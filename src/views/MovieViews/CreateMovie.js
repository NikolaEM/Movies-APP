import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMovie, loadGenres } from "../../redux/actions/MoviesActions";
import { createMovieSchema } from "../validation/MoviesValidation";

const CreateMovie = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.movies.genres);
  const [movieCover, setMovieCover] = useState(null);

  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values?.title);
    formData.append("description", values?.description);
    formData.append("movie_cover", movieCover);
    formData.append("genre", parseInt(values?.genre));
    dispatch(createMovie(formData));
  };
  useEffect(() => {
    dispatch(loadGenres());
  }, []);

  return (
    <>
      <h2> Create Movie </h2>
      <Formik
        initialValues={{
          title: "",
          description: "",
          movie_cover: "",
          genre: 1,
        }}
        validationSchema={createMovieSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field id="title" name="title" placeholder="Title" />
          <label> Title </label>
          <br></br>

          <Field
            id="description"
            name="description"
            placeholder="Description"
            type="text"
          />
          <label> Description</label>
          <br></br>
          <label> Cover Image </label>
          <Field id="movie_cover" name="movie_cover" type="text">
            {() => (
              <input
                className="form-control"
                type="file"
                name={"movie_cover"}
                onChange={(e) => setMovieCover(e.target.files[0])}
              />
            )}
          </Field>
          <br></br>
          <Field name="genre" component="select" placeholder="Select genre">
            {genres.map((genre, id) => (
              <option key={genre.id} value={genre.id}>
                {" "}
                {genre.name}{" "}
              </option>
            ))}
          </Field>

          <button type="submit"> Create Movie </button>
        </Form>
      </Formik>
    </>
  );
};

export default CreateMovie;
