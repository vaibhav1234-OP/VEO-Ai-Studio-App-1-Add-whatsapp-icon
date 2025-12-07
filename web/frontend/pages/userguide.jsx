import React from "react";

const UserGuide = () => {
  const pageStyle = {
    padding: "32px",
    maxWidth: "900px",
    margin: "0 auto",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "24px",
    color: "#111213",
  };

  const cardStyle = {
    background: "white",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "20px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    border: "1px solid #e1e3e5",
  };

  const headingStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#202223",
  };

  const textStyle = {
    fontSize: "15px",
    lineHeight: "22px",
    marginBottom: "12px",
    color: "#2c2c2c",
  };

  const listStyle = {
    paddingLeft: "20px",
    marginBottom: "12px",
    lineHeight: "22px",
    color: "#2c2c2c",
  };

  const linkStyle = {
    fontSize: "15px",
    color: "#006eff",
    fontWeight: "500",
    textDecoration: "none",
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>User Guide</h1>

      {/* Introduction */}
      <div style={cardStyle}>
        <h2 style={headingStyle}>What This App Does</h2>
        <p style={textStyle}>
          The <strong>VEO WhatsApp Icon</strong> app allows you to add a floating
          WhatsApp chat button to your Shopify store. This helps customers reach
          you instantly, improving engagement and boosting conversions.
        </p>

        <p style={textStyle}>
          Once installed, the WhatsApp icon appears on every store page (unless
          customized) and customers can click it to start a conversation with
          you instantly.
        </p>
      </div>

      {/* WhatsApp Config Page */}
      <div style={cardStyle}>
        <h2 style={headingStyle}>WhatsApp Config Page</h2>
        <p style={textStyle}>
          The <strong>WhatsApp Config</strong> page is where you set up your
          WhatsApp details and customize the chat button.
        </p>

        <ul style={listStyle}>
          <li>Enter your WhatsApp phone number.</li>
          <li>Choose your default welcome message.</li>
          <li>Customize button position (left or right).</li>
          <li>Update button text or tooltip.</li>
          <li>Enable / Disable the WhatsApp chat icon.</li>
        </ul>

        <p style={textStyle}>
          Once saved, the changes automatically reflect on your store.
        </p>
      </div>

      {/* Settings Page */}
      <div style={cardStyle}>
        <h2 style={headingStyle}>Settings Page</h2>
        <p style={textStyle}>
          The <strong>Settings</strong> page allows you to manage additional
          configuration options to fine-tune the user experience.
        </p>

        <ul style={listStyle}>
          <li>Control device visibility (Desktop / Mobile).</li>
          <li>Adjust button size and UI behavior.</li>
          <li>Configure store page visibility rules.</li>
          <li>Reset settings to default if needed.</li>
        </ul>
      </div>

      {/* Troubleshooting */}
      <div style={cardStyle}>
        <h2 style={headingStyle}>Troubleshooting</h2>

        <ul style={listStyle}>
          <li>
            <strong>WhatsApp button not showing?</strong> Make sure the feature
            is enabled in the WhatsApp Config page.
          </li>
          <li>
            <strong>Incorrect number behavior?</strong> Re-check the country
            code and formatting.
          </li>
          <li>
            <strong>Not appearing on some pages?</strong> Review the Settings
            visibility rules.
          </li>
        </ul>

        <p style={textStyle}>
          If these steps don’t fix the problem, our team is happy to help.
        </p>
      </div>

      {/* Final Help Section */}
      <div style={cardStyle}>
        <h2 style={headingStyle}>Need More Help?</h2>
        <p style={textStyle}>
          If you face any issue or have questions about using the app, feel free
          to contact our support team anytime.
        </p>

        <a href="/support" style={linkStyle}>
          Visit the Support Page →
        </a>
      </div>
    </div>
  );
};

export default UserGuide;
