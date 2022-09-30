import { Formik, Field, Form } from 'formik';
import { useDispatch } from "react-redux";
import { createMovie } from '../../redux/actions/MoviesActions';
import { MOVIE_GENRES } from '../../redux/constants/MovieActionTypes';
import { createMovieSchema } from '../validation/MoviesValidation';

const CreateMovie = () => {
    const dispatch = useDispatch();
    const OnSubmit = ( values) => {
      dispatch(createMovie(values))
    }

    return(
    <>
      <h2> Create Movie </h2>
    <Formik 
        initialValues={{
          title: '',
          description: '',
          movie_cover: '',
          genre: '',
        }}
        validationSchema={createMovieSchema} 
        onSubmit={OnSubmit} 
      >
        <Form>
          <Field 
          id="title" 
          name="title" 
          placeholder="Title" />
          <label >  Title </label>
          <br></br>
          
          <Field
            id="description"
            name="description"
            placeholder="Description" 
            type="text"
          />
          <label>  Description</label>
          <br></br>
          <label>  Cover Image </label>
          <Field 
            id="movie_cover" 
            name="movie_cover" 
            type="file"
            accept="image/png, image/jpeg"
          />
          <br></br>

          <Field name="genre" component="select" placeholder="Select genre">
            { Object.keys(MOVIE_GENRES).map((genre) => {
            return (
              <option key={genre} value={genre}>
                {MOVIE_GENRES[genre]}
              </option>
            );
          })}
          </Field>

           <button type="submit" > Create Movie </button> 
  
        </Form>
      </Formik>
      </>
  )};
  
  export default CreateMovie;