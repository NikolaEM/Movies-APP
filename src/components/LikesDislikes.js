import React from "react";
import { useDispatch } from "react-redux";
import { likeMovie, dislikeMovie } from "../redux/actions/MoviesActions";

function LikesDislikes({ movie }) {
  const dispatch = useDispatch();
  return (
    <>
      {movie && (
        <div>
          {movie.likes}
          <button
            variant={movie.liked_by_user ? "success" : "outline-success"}
            onClick={() => dispatch(likeMovie(movie.id))}
          >
            {" "}
            LIKE {movie?.likes_count}
          </button>
          <button
            variant={movie.disliked_by_user ? "danger" : "outline-success"}
            onClick={() => dispatch(dislikeMovie(movie.id))}
          >
            DISLIKE {movie?.dislikes_count}
          </button>
          {movie.dislikes}
        </div>
      )}
    </>
  );
}

export default LikesDislikes;
