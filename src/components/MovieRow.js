import { Link } from "react-router-dom";
import { ROUTE } from "../views/routes";
import NumberOfViews from "./NumberOfViews";

const MovieRow = ({ movie }) => {
  return (
    <>
      <Link to={`${ROUTE.MOVIES}${movie.id}`}>
        <p>{movie.title}</p>
      </Link>
      <img
        src={movie.movie_cover}
        width="300"
        height="300"
        alt="Not available"
      />
      <p>{movie.description}</p>
      <NumberOfViews movie={movie} />
    </>
  );
};

export default MovieRow;
