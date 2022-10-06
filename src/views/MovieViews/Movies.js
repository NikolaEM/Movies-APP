import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getMovies } from "../../redux/actions/MoviesActions";
import {
  selectGenre,
  selectMovies,
} from "../../redux/selectors/MovieSelectors";
import MovieRow from "../../components/MovieRow";
import PagesNavigation from "../../components/PagesNav";
import MovieSearch from "../../components/Search";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenre);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    dispatch(getMovies(page, search, genre));
  }, [page, search, genre]);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const handleChangeGenre = (e) => {
    setGenre(e.target.value);
  };

  return (
    <>
      {movies?.results?.length ? (
        <div>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleChangeGenre}
          >
            {genres?.map((genre) => (
              <option key={genre?.id} value={genre?.id}>
                {genre?.name}
              </option>
            ))}
          </select>
          <MovieSearch search={search} setSearch={setSearch} />
          <ul>
            {movies?.results?.map((movie) => (
              <MovieRow key={movie.id} movie={movie} />
            ))}
          </ul>
          <PagesNavigation
            setPage={setPage}
            page={page}
            totalPages={movies.total_pages}
          />
        </div>
      ) : (
        <div>No search results found.</div>
      )}
    </>
  );
};

export default Movies;
