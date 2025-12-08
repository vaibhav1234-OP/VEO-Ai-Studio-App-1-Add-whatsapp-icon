import React from "react";

export default function PreviewSection({ config }) {
  const { size, iconColor, textColor, bgColor } = config;

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #E1E3E5",
        borderRadius: "12px",
        background: "white",
        position: "sticky",
        top: "20px",
      }}
    >
      <h3 style={{ marginBottom: "14px", fontWeight: 600 }}>
        Live Preview
      </h3>

      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: bgColor,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: iconColor,
          fontSize: size / 2.5,
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        Ⱳ {/* fake WA icon */}
      </div>

      <p style={{ marginTop: "20px", color: "#6D7175" }}>
        This is how the button will appear on your store.
      </p>
    </div>
  );
}
