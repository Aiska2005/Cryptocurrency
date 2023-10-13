import React from "react";

const Header = () => {
  return (
    <div
    className="boxShadow"
      style={{
        background: "white",
        height: 40,
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "10px",
      }}
    >
      <div style={{ fontSize: 18 }}>Cryptocurrency</div>

      <div>
        <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
          <li>Home</li>
          <li>Agents</li>
          <li>Project</li>
          <li>Exchange rates</li>
        </ul>
      </div>
      <div>
        <button
          style={{
            border: "none",
            color: "white",
            background: "grey",
            height: 20,
            width: 60,
            borderRadius: 10,
          }}
        >
          Sing In
        </button>
      </div>
    </div>
  );
};

export default Header;
