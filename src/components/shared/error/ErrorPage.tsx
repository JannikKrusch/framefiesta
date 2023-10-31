import "./ErrorPage.css";
import { StateContext } from "../../../utils/context/StateContext";
import { useContext } from "react";

export function ErrorPage(): JSX.Element {
  const { error } = useContext(StateContext);
  return (
    <>
      <div className="error-text">{error?.message}</div>
    </>
  );
}
