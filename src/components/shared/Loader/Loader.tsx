import { Spinner } from "react-bootstrap";
import "./Loader.css";

function Loader() {
  return (
    <div className="container">
      <Spinner animation="border" variant="light" />
    </div>
  );
}

export default Loader;
