import React from "react";

const Support = () => {
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

  const linkStyle = {
    fontSize: "15px",
    color: "#006eff",
    fontWeight: "500",
    textDecoration: "none",
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Support</h1>

      {/* Get Support Card */}
      <div style={cardStyle}>
        <h2 style={headingStyle}>Get Help and Support</h2>
        <p style={textStyle}>
          We are here to help. If you encounter any issues or have questions
          about our app, please don't hesitate to reach out. Our team is
          dedicated to providing the best support and will resolve any problems
          as quickly as possible.
        </p>
      </div>

      {/* Contact Card */}
      <div style={cardStyle}>
        <h2 style={headingStyle}>Contact Us</h2>
        <p style={textStyle}>
          The best way to get in touch with us is by email. Send your questions
          or issues to:
        </p>
        <a href="mailto:contact.veoaistudio@gmail.com" style={linkStyle}>
          contact.veoaistudio@gmail.com
        </a>
      </div>

      {/* Info Card */}
      <div style={cardStyle}>
        <h2 style={headingStyle}>Helpful Information</h2>

        <p style={textStyle}>
          <strong>App Version:</strong> 1.0.0
        </p>

        <p style={textStyle}>
          <strong>Typical Support Response Time:</strong> Within 24–48 hours
        </p>
      </div>
    </div>
  );
};

export default Support;
