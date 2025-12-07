import { Page } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function HomePage() {
  // Reusable heading style
  const headingStyle = {
    margin: "0 0 20px 0",
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "1.3",
    color: "#111217",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  };

  return (
    <Page>
      <TitleBar title="VEO WhatsApp Icon: Home" />

      {/* =====================
          CONTAINER
      ====================== */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* =====================
            HERO — UPDATED
        ====================== */}
        <div
          style={{
            border: "1px solid #E1E3E5",
            borderRadius: "12px",
            padding: "28px",
            background: "white",
          }}
        >
          <h2 style={headingStyle}>Welcome to VEO WhatsApp Icon</h2>

          <p
            style={{
              margin: "0 0 20px 0",
              color: "#6D7175",
              fontSize: "15px",
              lineHeight: "1.6",
              maxWidth: "88%",
            }}
          >
            Easily add a floating WhatsApp chat button to your Shopify store.
            Improve customer engagement and allow users to contact you instantly
            — setup takes less than a minute.
          </p>

          <a
            href="/whatsappconfig"
            style={{
              display: "inline-block",
              padding: "12px 20px",
              background: "#008060",
              color: "white",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            Get Started
          </a>
        </div>

        {/* =====================
            3 EASY STEPS — UPDATED
        ====================== */}
        <div
          style={{
            border: "1px solid #E1E3E5",
            borderRadius: "12px",
            padding: "28px",
            background: "white",
          }}
        >
          <h2 style={headingStyle}>Set Up in 3 Easy Steps</h2>

          <div style={{ marginBottom: "18px" }}>
            <h3
              style={{
                margin: "0 0 6px 0",
                fontSize: "17px",
                fontWeight: 600,
                color: "#111217",
              }}
            >
              1. Enable the App
            </h3>
            <p style={{ margin: 0, color: "#6D7175", fontSize: "15px" }}>
              Turn on the floating WhatsApp button to make it visible on your
              store.
            </p>
          </div>

          <div style={{ marginBottom: "18px" }}>
            <h3
              style={{
                margin: "0 0 6px 0",
                fontSize: "17px",
                fontWeight: 600,
                color: "#111217",
              }}
            >
              2. Configure WhatsApp
            </h3>
            <p style={{ margin: 0, color: "#6D7175", fontSize: "15px" }}>
              Add your WhatsApp number, welcome text, and choose your button
              style.
            </p>
          </div>

          <div>
            <h3
              style={{
                margin: "0 0 6px 0",
                fontSize: "17px",
                fontWeight: 600,
                color: "#111217",
              }}
            >
              3. Customize Settings
            </h3>
            <p style={{ margin: 0, color: "#6D7175", fontSize: "15px" }}>
              Choose visibility options, device targeting, delay time, and more.
            </p>
          </div>
        </div>

        {/* =====================
            FEATURES — UPDATED HEADING
        ====================== */}
        <div
          style={{
            border: "1px solid #E1E3E5",
            borderRadius: "12px",
            padding: "24px",
            background: "white",
          }}
        >
          <h2 style={headingStyle}>Features</h2>

          <ul style={{ margin: 0, paddingLeft: "20px", color: "#6D7175" }}>
            <li>Floating WhatsApp Button</li>
            <li>Fully Customizable</li>
            <li>Mobile & Desktop Support</li>
            <li>Multiple Button Styles</li>
            <li>No Coding Required</li>
            <li>Loads Fast & Lightweight</li>
          </ul>
        </div>

        {/* =====================
            QUICK NAVIGATION — UPDATED HEADING
        ====================== */}
        <div
          style={{
            border: "1px solid #E1E3E5",
            borderRadius: "12px",
            padding: "24px",
            background: "white",
          }}
        >
          <h2 style={headingStyle}>Quick Navigation</h2>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="/whatsappconfig"
              style={{
                padding: "10px 16px",
                background: "#F6F6F7",
                borderRadius: "6px",
                textDecoration: "none",
                color: "#202223",
              }}
            >
              WhatsApp Config
            </a>

            <a
              href="/settings"
              style={{
                padding: "10px 16px",
                background: "#F6F6F7",
                borderRadius: "6px",
                textDecoration: "none",
                color: "#202223",
              }}
            >
              Settings
            </a>

            <a
              href="/userguide"
              style={{
                padding: "10px 16px",
                background: "#F6F6F7",
                borderRadius: "6px",
                textDecoration: "none",
                color: "#202223",
              }}
            >
              User Guide
            </a>
          </div>
        </div>

        {/* =====================
            SUPPORT — UPDATED HEADING
        ====================== */}
        <div
          style={{
            border: "1px solid #E1E3E5",
            borderRadius: "12px",
            padding: "24px",
            background: "white",
          }}
        >
          <h2 style={headingStyle}>Need Help?</h2>

          <p style={{ margin: "0 0 16px 0", color: "#6D7175", fontSize: "15px" }}>
            Facing issues? We’re here to assist you anytime.
          </p>

          <a
            href="/support"
            style={{
              display: "inline-block",
              padding: "10px 16px",
              background: "#008060",
              color: "white",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Contact Support
          </a>
        </div>
      </div>
    </Page>
  );
}
