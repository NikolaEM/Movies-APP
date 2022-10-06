import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie } from "../../redux/actions/MoviesActions";
import { selectMovie } from "../../redux/selectors/MovieSelectors";

const SingleMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);

  useEffect(() => {
    dispatch(getMovie(id));
  }, []);

  return (
    <>
      {movie?.id ? (
        <div>
          <p>{movie?.title}</p>
          <img
            src={movie?.movie_cover}
            width="300"
            height="300"
            alt="Not available"
          />
          <p>{movie?.description}</p>
          {<p> {movie.genre.name} </p>}
        </div>
      ) : (
        <div>
          <p>loading</p>
        </div>
      )}
    </>
  );
};

export default SingleMovie;
