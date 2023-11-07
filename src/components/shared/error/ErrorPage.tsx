import "./ErrorPage.css";
import { StateContext } from "../../../utils/context/StateContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouterPaths } from "../../../utils";

export function ErrorPage(): JSX.Element {
  const { error } = useContext(StateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (error === undefined) {
      console.warn("error is undefined");
      navigate(RouterPaths.Default.path);
    }
  }, [error]);

  return (
    <>
      <div className="error-text">{error?.message}</div>
    </>
  );
}
