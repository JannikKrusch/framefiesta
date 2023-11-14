import React from "react";
import "./ErrorPage.css";
import "./PageNotFound.css";
import { EmojiFrownFill } from "react-bootstrap-icons";

function PageNotFound(): JSX.Element {
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
          width="100%"
          height="480"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}

export default PageNotFound;
