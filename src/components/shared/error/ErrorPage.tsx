import "./ErrorPage.css";
import { StateContext } from "../../../utils/context/StateContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouterPaths } from "../../../utils";
import { EmojiFrownFill } from "react-bootstrap-icons";

export function ErrorPage(): JSX.Element {
  const { error } = useContext(StateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (error === undefined) {
      navigate(RouterPaths.Default.path);
    }
  }, [error, navigate]);

  return (
    <div className="row m-auto error-container">
      <div>
        <h1>Oh no ... an error occurred</h1>
      </div>
      <div>
        <EmojiFrownFill className="error-icon" />
      </div>
      <div className="error-text">{error?.statusCode}</div>
      <div className="error-text">{error?.message}</div>
    </div>
  );
}
