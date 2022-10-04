import * as Yup from 'yup';

const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png"
];

export const createMovieSchema = Yup.object({
    title: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
    description: Yup.string().max(500, 'Must be 500 characters or less').required('Required'),
    movie_cover: Yup.mixed()
    .test(
      "fileFormat",
      "Unsupported Format",
      value => !value || (value => value && SUPPORTED_FORMATS.includes(value.type))
    ),
    genre: Yup.string().required('Required'),
  });