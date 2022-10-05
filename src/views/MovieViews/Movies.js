import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/actions/MoviesActions";
import { selectMovies } from "../../redux/selectors/MovieSelectors";
import MovieRow from "../../components/MovieRow";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      {movies.length ? (
        <div>
          <ul>
            {movies.map((movie) => (
              <MovieRow key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>
      ) : (
        <div>No search results found.</div>
      )}
    </>
  );
};

export default Movies;
