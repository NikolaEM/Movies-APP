import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenres,
  getMovies,
  likeMovie,
  dislikeMovie,
} from "../../redux/actions/MoviesActions";
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

  const handleLikeMovie = (id) => {
    dispatch(likeMovie(id));
  };

  const handleDislikeMovie = (id) => {
    dispatch(dislikeMovie(id));
  };

  return (
    <>
      {movies?.results?.length ? (
        <>
          <div className="d-flex flex-row justify-content-around">
            <MovieSearch search={search} setSearch={setSearch} />
            <div className="d-flex">
              <h4> Search by genre</h4>
              <select
                className="form-select w-50 p-3"
                aria-label="Default select example"
                onChange={handleChangeGenre}
              >
                {genres?.map((genre) => (
                  <option key={genre?.id} value={genre?.id}>
                    {genre?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div class="d-flex flex-column   d-flex flex-wrap">
            <ul>
              {movies?.results?.map((movie) => (
                <MovieRow
                  key={movie.id}
                  movie={movie}
                  onLike={handleLikeMovie}
                  onDislike={handleDislikeMovie}
                />
              ))}
            </ul>
          </div>
          <PagesNavigation
            setPage={setPage}
            page={page}
            totalPages={movies.total_pages}
          />
        </>
      ) : (
        <div>No search results found.</div>
      )}
    </>
  );
};

export default Movies;
