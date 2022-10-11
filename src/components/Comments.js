import { Formik, Field, Form } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createComment, getComments } from "../redux/actions/MoviesActions";
import { selectMovieComments } from "../redux/selectors/MovieSelectors";
import { createCommentSchema } from "../views/validation/CommentsValidation";

const CreateComment = ({ movie }) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectMovieComments);

  useEffect(() => {
    if (movie?.id) {
      dispatch(getComments(movie?.id));
    }
  }, []);

  const onSubmit = (values) => {
    dispatch(createComment({ id: movie.id, content: values.content }));
  };

  return (
    <>
      <ul></ul>
      {comments?.results?.map((comment) => (
        <li key={comment.id} comment={comment}>
          {comment.content}
        </li>
      ))}
      <h3> Post comment </h3>
      <Formik
        initialValues={{
          content: "",
        }}
        validationSchema={createCommentSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field
            id="content"
            name="content"
            placeholder="Post Comment"
            type="text"
          />
          <button type="submit"> Post Comment </button>
        </Form>
      </Formik>
    </>
  );
};

export default CreateComment;
