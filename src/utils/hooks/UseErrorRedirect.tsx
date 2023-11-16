import { useContext, useEffect } from "react";
import { StateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";
import { RouterPaths } from "../constants/RouterPaths";

export function useErrorRedirect(): void {
  const navigate = useNavigate();
  const { error } = useContext(StateContext);

  useEffect(() => {
    if (error !== undefined) {
      navigate(RouterPaths.Error.path);
    }
  }, [error, navigate]);
}
