import { Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import "./Footer.css";
import { COMPANY_NAME, RICKROLL_YT_LINK } from "../../../utils";

export function Footer(): JSX.Element {
  function iconClick(): void {
    window.open(RICKROLL_YT_LINK, "_blank");
  }

  return (
    <footer className="footer">
      <div className="row g-0">
        <span>
          © {new Date().getFullYear()} by{" "}
          <span className="company-name">{COMPANY_NAME}</span> - All rights
          reserved.
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
