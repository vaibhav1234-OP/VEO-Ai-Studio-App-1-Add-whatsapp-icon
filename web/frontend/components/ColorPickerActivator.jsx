import React from "react";

export default function ColorPickerActivator({ label, color, onChange }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label
        style={{
          display: "block",
          marginBottom: "6px",
          fontWeight: 600,
          color: "#202223",
        }}
      >
        {label}
      </label>

      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
