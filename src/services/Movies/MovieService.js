import ApiService from "../ApiService";

export const ENDPOINTS = {
  MOVIES: "/movies/",
  GENRES: "/genres/",
};

class MovieService extends ApiService {
  createMovie = async (movieData) => {
    const { data } = await this.client.post(`${ENDPOINTS.MOVIES}`, movieData);
    return data;
  };

  getGenres = async () => {
    const { data } = await this.client.get(`${ENDPOINTS.GENRES}`);
    return data;
  };

  getMovies = async ({ page, search, genre }) => {
    const { data } = await this.client.get(
      `${ENDPOINTS.MOVIES}` +
        `?page=${page}` +
        `&search=${search}` +
        `&genre=${genre}`
    );
    return data;
  };

  getMovie = async (id) => {
    const { data } = await this.client.get(`${ENDPOINTS.MOVIES}${id}`);
    return data;
  };

  likeMovie = async (id) => {
    const { data } = await this.client.patch(`${ENDPOINTS.MOVIES}${id}/likes/`);
    return data;
  };

  dislikeMovie = async (id) => {
    const { data } = await this.client.patch(
      `${ENDPOINTS.MOVIES}${id}/dislikes/`
    );
    return data;
  };
}

const movieService = new MovieService();
export default movieService;
