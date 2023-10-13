import "./ErrorPage.css";
import { ErrorContext } from "../../../utils/context/ErrorContext";
import { useContext } from "react";

export function ErrorPage(): JSX.Element {
  const { error } = useContext(ErrorContext);
  return (
    <>
      <div className="error-text">{error?.message}</div>
    </>
  );
}
