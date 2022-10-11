import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPopular } from "../../redux/actions/MoviesActions";
import { selectPopularMovies } from "../../redux/selectors/MovieSelectors";
import { ROUTE } from "../routes";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const popular = useSelector(selectPopularMovies);

  useEffect(() => {
    dispatch(getPopular());
  }, []);

  return (
    <div>
      <h3> Popular movies </h3>
      <ul>
        {popular?.length > 0 ? (
          popular?.map((movie, index) => (
            <Link key={movie.id} to={`${ROUTE.MOVIES}${movie.id}`}>
              <li>
                {index + 1}. {movie.title}
              </li>
            </Link>
          ))
        ) : (
          <small>No popular movies</small>
        )}
      </ul>
    </div>
  );
};

export default PopularMovies;
