import React from "react";
import ColorPickerActivator from "./ColorPickerActivator";

export default function ConfigurationForm({ config, setConfig, onSave }) {
  const handleChange = (key, value) => {
    setConfig({ ...config, [key]: value });
  };

  return (
    <div
      style={{
        border: "1px solid #E1E3E5",
        borderRadius: "12px",
        padding: "20px",
        background: "white",
      }}
    >
      <h2 style={{ marginBottom: "20px", fontWeight: 600 }}>
        WhatsApp Configuration
      </h2>

      {/* Phone Number */}
      <div style={{ marginBottom: "18px" }}>
        <label style={{ fontWeight: 600 }}>Phone Number</label>
        <input
          type="text"
          value={config.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="Ex: +14151234567"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "6px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
      </div>

      {/* Prefill Message */}
      <div style={{ marginBottom: "18px" }}>
        <label style={{ fontWeight: 600 }}>Welcome Message</label>
        <textarea
          value={config.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Hello! I need help with..."
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "6px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            minHeight: "80px",
          }}
        />
      </div>

      {/* Button Size */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ fontWeight: 600 }}>Button Size ({config.size}px)</label>
        <input
          type="range"
          min="40"
          max="120"
          value={config.size}
          onChange={(e) => handleChange("size", e.target.value)}
          style={{ width: "100%", marginTop: "10px" }}
        />
      </div>

      {/* Colors */}
      <ColorPickerActivator
        label="Icon Color"
        color={config.iconColor}
        onChange={(val) => handleChange("iconColor", val)}
      />

      <ColorPickerActivator
        label="Text Color"
        color={config.textColor}
        onChange={(val) => handleChange("textColor", val)}
      />

      <ColorPickerActivator
        label="Background Color"
        color={config.bgColor}
        onChange={(val) => handleChange("bgColor", val)}
      />

      {/* Save Button */}
      <button
        onClick={onSave}
        style={{
          background: "#008060",
          padding: "12px 18px",
          borderRadius: "6px",
          border: "none",
          marginTop: "20px",
          color: "white",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Save Configuration
      </button>
    </div>
  );
}
