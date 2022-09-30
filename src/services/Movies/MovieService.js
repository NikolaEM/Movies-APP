import HttpService from "../HttpService";
import { ENDPOINTS } from "../endPoints";

class MovieService extends HttpService {

    createMovie = async (movieData) => {
        const { data } = await this.apiClient.post(`${ENDPOINTS.MOVIES}`, movieData);
        return data;
    }
}

const movieService = new MovieService();
export default movieService;