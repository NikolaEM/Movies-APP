import React from "react";

function NumberOfViews({ movie }) {
  return (
    <>
      {movie && (
        <div>
          {movie.number_of_views === 1 ? (
            <small>This movie has been viewed 1 time</small>
          ) : (
            <small>Movie has been viewed {movie.number_of_views} times</small>
          )}
        </div>
      )}
    </>
  );
}

export default NumberOfViews;
