import { useContext, useEffect } from "react";
import { ErrorContext } from "../context/ErrorContext";
import { useNavigate } from "react-router-dom";
import { RouterPaths } from "../constants/RouterPaths";

export function useErrorUpdate() {
  const navigate = useNavigate();
  const { error } = useContext(ErrorContext);

  useEffect(() => {
    if (error != undefined) {
      navigate(RouterPaths.Error.path);
    }
  }, [error]);
}
