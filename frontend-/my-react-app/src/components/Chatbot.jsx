import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px", // 👈 left ki jagah right
        zIndex: 1000,
      }}
    >
      {/* Chat window */}
      {open && (
        <div
          style={{
            width: "320px",
            height: "420px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
            padding: "10px",
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "8px",
            }}
          >
            <p>👋 Hi! I’m your chatbot. How can I help?</p>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            style={{
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "8px",
              outline: "none",
              width: "100%",
            }}
          />
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          fontSize: "24px",
        }}
      >
        💬
      </button>
    </div>
  );
}
