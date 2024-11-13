import React from "react";

const MovieCard = (props) => {
  const { qid, title, image, year } = props;

  return (
    <div className="movie">
      <>
        <div>
          <p>{year}</p>
        </div>
        <div>
          <img src={image ? image : "https://placehold.co/400"} alt={title} />
        </div>
        <div>
          <span>{qid}</span>
          <h3>{title}</h3>
        </div>
      </>
    </div>
  );
};

export default MovieCard;
