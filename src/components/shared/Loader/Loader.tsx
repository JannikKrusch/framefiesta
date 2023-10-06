import { Spinner } from "react-bootstrap";
import "./Loader.css";

export function Loader() {
  return (
    <div className="container">
      <Spinner animation="border" variant="light" />
    </div>
  );
}
