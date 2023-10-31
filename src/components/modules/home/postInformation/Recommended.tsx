import React, { useContext } from "react";
import { BlogPost } from "../../../../utils";
import "./Recommended.css";
import { Film } from "react-bootstrap-icons";
import { DataContext } from "../../../../utils/context/DataContext";

interface RecommendedProps {
  selectedName: string;
  recommendations: BlogPost[];
}

function Recommended(props: RecommendedProps) {
  const { selectedBlogPostId, setSelectedBlogPostId } = useContext(DataContext);

  function changeID(id: string) {
    setSelectedBlogPostId((prev) => id);
  }

  return (
    <div className="recommended-container">
      <div className="recommended-headline">
        If you like {props.selectedName}, you like:
      </div>
      <div className="card-container d-flex flex-wrap justify-content-between justify-content-sm-start">
        {props.recommendations.map((blogPost) => {
          return (
            <div
              className="recommend-card text-center"
              onClick={() => changeID(blogPost.id)}
            >
              <div className="recommend-icon">
                <Film className="film-icon" />
              </div>
              <div className="recommend-title">
                {blogPost.relatedMotionPicture.title}
              </div>
              <div className="recommend-year">
                {blogPost.relatedMotionPicture.initialRelease}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recommended;
