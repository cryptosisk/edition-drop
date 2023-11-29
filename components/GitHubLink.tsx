import React from "react";

export default function ThirdwebGuideFooter() {
  const url = "irreversible.wtf/films";
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 14,
          right: 18,
        }}
      >
        <img
          src={"/irrev-dao-logo.png"}
          width={100}
          height={100}
          role="button"
          style={{ cursor: "pointer", border: "1px solid red"}}
          onClick={() => window.open(url, "_blank")}
        />
      </div>
    </>
  );
}
