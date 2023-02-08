import { Link } from "react-router-dom";
import { ROUTE } from "../views/routes";
import NumberOfViews from "./NumberOfViews";

const MovieRow = ({ movie }) => {
  return (
    <>
      <li className="w-50 p-3">
        <Link to={`${ROUTE.MOVIES}${movie.id}`}>
          <p>{movie.title}</p>
        </Link>
        <img src={movie.movie_cover} className="mw-100" alt="Max-width 100%" />
        <p>{movie.description}</p>
        <NumberOfViews movie={movie} />
      </li>
    </>
  );
};

export default MovieRow;
