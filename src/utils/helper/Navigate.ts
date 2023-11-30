import { RouterPaths } from "..";

export function navigateToHome(): void {
  window.location.href = RouterPaths.Default.path;
}
