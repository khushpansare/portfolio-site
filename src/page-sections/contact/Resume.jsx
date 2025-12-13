import React, { useState } from "react";

const Resume = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1200px",
        margin: "auto",
        background: "none",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          background: "none",
        }}
      >
        <a
          href="khushal_full_stack_dev_resume.pdf"
          download
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            padding: "10px 20px",
            backgroundColor: "transparent",
            color: hover ? "#4224aed3" : "#e6e4efd3",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "500",
            transition: "0.3s ease-in-out",
            border: hover ? "1px dashed #e6e4efd3" : "1px dashed #4224aed3",
          }}
        >
          Download MY Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
