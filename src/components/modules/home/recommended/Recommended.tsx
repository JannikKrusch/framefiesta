import React, { useContext } from "react";
import { BlogPost } from "../../../../utils";
import "./Recommended.css";
import { DataContext } from "../../../../utils/context/DataContext";

interface RecommendedProps {
  selectedName: string;
  recommendations: BlogPost[];
}

function Recommended(props: RecommendedProps): JSX.Element {
  const { setSelectedBlogPostId } = useContext(DataContext);

  function changeID(id: string) {
    setSelectedBlogPostId((prev) => id);
  }

  return (
    <div>
      <div className="recommended-headline">
        If you like{" "}
        <span className="recommended-title">{props.selectedName}</span>, you
        like:
      </div>
      <div className="recommended-grid">
        {props.recommendations.map((blogPost: BlogPost, index: number) => {
          return (
            <div key={index}>
              <div
                className="recommend-card text-center"
                onClick={() => changeID(blogPost.id)}
              >
                <img
                  src={blogPost.relatedMotionPicture.image}
                  alt="recommended picture"
                  className="recommended-image"
                />
                <div className="recommended-card-title ">
                  {blogPost.relatedMotionPicture.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recommended;
