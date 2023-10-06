import { COMPANY_NAME } from "../../../utils/constants/Names";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} by {COMPANY_NAME} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
