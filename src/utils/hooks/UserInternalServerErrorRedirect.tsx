import { useContext, useEffect } from "react";
import { StateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";
import { RouterPaths } from "../constants/RouterPaths";
import { HttpStatusCodes } from "../constants/Api";

export function useInternalServerErrorRedirect(): void {
  const navigate = useNavigate();
  const { error } = useContext(StateContext);

  useEffect(() => {
    if (error?.statusCode === HttpStatusCodes.InternalServerError) {
      navigate(RouterPaths.Error.path);
    }
  }, [error, navigate]);
}
