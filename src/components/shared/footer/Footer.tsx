import { Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import { COMPANY_NAME } from "../../../utils/constants/Names";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="row g-0">
        <span>
          © {new Date().getFullYear()} by {COMPANY_NAME} All rights reserved.
        </span>
        <span className="p">Follow us on</span>
      </div>

      <div className="d-flex flex-row justify-content-center py-2">
        <Instagram size={"2rem"} />
        <Twitter size={"2rem"} className="mx-auto mx-sm-5" />
        <Youtube size={"2rem"} />
      </div>
    </footer>
  );
}
