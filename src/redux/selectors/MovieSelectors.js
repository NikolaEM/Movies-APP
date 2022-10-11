export function selectMovies(state) {
  return state.movies.movies;
}
export function selectGenre(state) {
  return state.movies.genres;
}

export function selectMovie(state) {
  return state.movies.movie;
}

export function selectMovieComments(state) {
  return state.movies.comments;
}

export function selectPopularMovies(state) {
  return state.movies.popular;
}
