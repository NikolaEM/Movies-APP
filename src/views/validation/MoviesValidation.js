import * as Yup from 'yup';

export const createMovieSchema = Yup.object({
    title: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
    description: Yup.string().max(500, 'Must be 500 characters or less').required('Required'),
    cover_image_url: Yup.string().max(500, 'Must be 500 characters or less'),
    genre: Yup.string().required('Required'),
  });