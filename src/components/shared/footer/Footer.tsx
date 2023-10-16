import { Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import { COMPANY_NAME } from "../../../utils/constants/Names";
import "./Footer.css";

export function Footer() {
  function iconClick(): void {
    window.open("https://t.ly/UcFH_", "_blank");
  }

  return (
    <footer className="footer">
      <div className="row g-0">
        <span>
          © {new Date().getFullYear()} by {COMPANY_NAME} All rights reserved.
        </span>
        <span className="p">Follow us on</span>
      </div>

      <div className="d-flex justify-content-center py-2">
        <Instagram
          className="social-media-icons"
          size={"2rem"}
          onClick={iconClick}
        />
        <Twitter
          className="social-media-icons mx-5"
          size={"2rem"}
          onClick={iconClick}
        />
        <Youtube
          className="social-media-icons"
          size={"2rem"}
          onClick={iconClick}
        />
      </div>
    </footer>
  );
}
