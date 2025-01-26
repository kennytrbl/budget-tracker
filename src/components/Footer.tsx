import React, { Component } from "react";
import "../styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          a creation by{" "}
          <a
            href="https://kennytrbl.github.io/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#FEFAE0" }}
          >
            Kenny Zhang
          </a>
          , © {new Date().getFullYear()}
        </p>
      </div>
    );
  }
}

export default Footer;
