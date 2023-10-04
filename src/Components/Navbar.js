import React from "react";
import "../Styles/Navbar.css";
import gitlogo from "../Images/gitlogo.png";
import linkedInlogo from "../Images/linkdein.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 style={{ alignSelf: "center" }}>To Do's</h1>
      <div style={{ display: "flex", columnGap: "0.2rem" }}>
        <a
          href="https://www.linkedin.com/in/ameyaawatade/"
          target="_blank"
          style={{ alignSelf: "center" }}
        >
          <img
            src={linkedInlogo}
            style={{
              height: "40px",
              width: "40px",
              backgroundBlendMode: "color-dodge",
            }}
          />
        </a>
        <a
          href="https://github.com/ameya699/todoApp"
          target="_blank"
          style={{ alignSelf: "center" }}
        >
          <img src={gitlogo} style={{ height: "50px" }} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
