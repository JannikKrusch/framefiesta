import "./ErrorPage.css";
import "./PageNotFound.css";
import { EmojiFrownFill } from "react-bootstrap-icons";

export function PageNotFound(): JSX.Element {
  return (
    <div className="row g-0 error-container">
      <div className="col">
        <h1>Oh no ... an error occurred</h1>
      </div>
      <div>
        <EmojiFrownFill className="error-icon" />
      </div>
      <div className="error-text">404</div>
      <div className="error-text">
        The page you are looking for might have been removed or is temporarily
        unavailable
      </div>

      <div className="rickroll-text">
        But now that you are here enjoy the rickroll :)
      </div>
      <div>
        <iframe
          width="50%"
          height="500px"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=tDL65ZKiRWVkBbJI"
          title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
