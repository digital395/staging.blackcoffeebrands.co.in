import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      location,
      project,
      message,
      source = "Contact Form",
    } = body;

    // ==========================================
    // VALIDATION
    // ==========================================

    if (!name || !email || !phone || !project) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    // ==========================================
    // ENVIRONMENT CHECK
    // ==========================================

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.CONTACT_EMAIL
    ) {
      console.error("SMTP environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Server email configuration is missing.",
        },
        { status: 500 }
      );
    }

    // ==========================================
    // SMTP TRANSPORTER
    // ==========================================

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === "true",

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ==========================================
    // VERIFY SMTP
    // ==========================================

    await transporter.verify();

    // ==========================================
    // EMAIL HTML
    // ==========================================

    const emailHtml = `
      <div style="
        font-family: Arial, sans-serif;
        background: #f5f5f5;
        padding: 30px;
      ">

        <div style="
          max-width: 650px;
          margin: auto;
          background: #ffffff;
          padding: 30px;
          border: 1px solid #ddd;
        ">

          <h2 style="
            margin-top: 0;
            color: #222;
          ">
            New Project Enquiry
          </h2>

          <p>
            A new enquiry has been submitted from the Luxe website.
          </p>

          <hr />

          <p>
            <strong>Source:</strong><br />
            ${source}
          </p>

          <p>
            <strong>Name:</strong><br />
            ${name}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${email}
          </p>

          <p>
            <strong>Phone:</strong><br />
            ${phone}
          </p>

          <p>
            <strong>Project Location:</strong><br />
            ${location || "Not provided"}
          </p>

          <p>
            <strong>Project Type:</strong><br />
            ${project}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${message || "No message provided"}
          </p>

          <hr />

          <p style="
            font-size: 12px;
            color: #777;
          ">
            This lead was submitted through the Luxe Construction website.
          </p>

        </div>

      </div>
    `;

    // ==========================================
    // 1. SEND EMAIL
    // ==========================================

    await transporter.sendMail({
      from: `"Luxe Website" <${process.env.SMTP_USER}>`,

      to: process.env.CONTACT_EMAIL,

      replyTo: email,

      subject: `New Project Enquiry - ${name}`,

      html: emailHtml,
    });

    console.log("Email sent successfully.");

    // ==========================================
    // 2. SEND LEAD TO GOOGLE SHEET
    // ==========================================

    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      try {
        const sheetResponse = await fetch(
          process.env.GOOGLE_SHEET_WEBHOOK_URL,
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              name,
              email,
              phone,
              location: location || "",
              project,
              message: message || "",
              source,
              submittedAt: new Date().toISOString(),
            }),
          }
        );

        const sheetText = await sheetResponse.text();

        console.log(
          "Google Sheet response:",
          sheetResponse.status,
          sheetText
        );

        if (!sheetResponse.ok) {
          console.error(
            "Google Sheet submission failed:",
            sheetResponse.status,
            sheetText
          );
        }
      } catch (sheetError) {
        // Do NOT fail the enquiry if Google Sheet fails.
        console.error(
          "Google Sheet error:",
          sheetError
        );
      }
    }

    // ==========================================
    // SUCCESS
    // ==========================================

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}