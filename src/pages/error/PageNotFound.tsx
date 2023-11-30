import { HttpStatusCodes } from "../../utils";
import "./ErrorPage.css";
import "./PageNotFound.css";
import { EmojiFrownFill } from "react-bootstrap-icons";

export function PageNotFound(): JSX.Element {
  const image = require("../../assets/images/Chad_Bad_Boys_For_Life.png");

  return (
    <div className="row g-0 error-container">
      <div className="col">
        <h1>Oh no ... an error occurred</h1>
      </div>
      <div>
        <EmojiFrownFill className="error-icon" />
      </div>
      <div className="error-text">{HttpStatusCodes.NotFound}</div>
      <div className="error-text">
        The page you are looking for might have been removed or is temporarily
        unavailable
      </div>

      <div className="col">
        But now that you are here, have a look at the upcoming blog
        <span className="upcoming-title"> Bad Boys For Life</span>
      </div>

      <div>
        <img src={image} alt="Motion picture" className="upcoming-image" />
      </div>
    </div>
  );
}
