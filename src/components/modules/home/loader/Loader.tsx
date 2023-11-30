import { Spinner } from "react-bootstrap";
import "./Loader.css";

export function Loader(): JSX.Element {
  return (
    <div className="loader-container">
      <Spinner animation="border" variant="light" />
    </div>
  );
}
