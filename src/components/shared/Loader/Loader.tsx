import { Spinner } from "react-bootstrap";
import "./Loader.css";
import { useContext } from "react";
import { StateContext } from "../../../utils/context/StateContext";

export function Loader() {
  const { loading } = useContext(StateContext);
  return (
    <>
      {loading === true ? (
        <>
          <div className="loader-container">
            <Spinner animation="border" variant="light" />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
