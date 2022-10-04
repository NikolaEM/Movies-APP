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
}

const movieService = new MovieService();
export default movieService;
