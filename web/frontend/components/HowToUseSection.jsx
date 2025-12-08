import React from "react";

export default function HowToUseSection() {
  return (
    <div
      style={{
        border: "1px solid #E1E3E5",
        borderRadius: "12px",
        padding: "20px",
        background: "white",
        marginTop: "20px",
      }}
    >
      <h3 style={{ marginBottom: "12px", fontWeight: 600 }}>How to Use</h3>

      <ul style={{ marginLeft: "18px", color: "#6D7175", lineHeight: "1.6" }}>
        <li>Enter your WhatsApp number in international format.</li>
        <li>Add a welcome message for your customers.</li>
        <li>Customize button size and colors.</li>
        <li>Preview the floating WhatsApp button on the right.</li>
        <li>Click “Save Configuration” to apply your changes.</li>
      </ul>
    </div>
  );
}
