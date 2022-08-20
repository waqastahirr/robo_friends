import React from "react";

const cardSkeleton = () => {
  return (
    <div className="robot-card robot-card-skeleton">
      <div className="image-skeleton"></div>
      <div className="content-skeleton">
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default cardSkeleton;