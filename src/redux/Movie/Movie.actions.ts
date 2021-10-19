import { IMovie, IMovieReducer } from '../../typings';
export function Add(
  { title, categories, favorite, labels }: IMovie,
  movies: IMovieReducer
) {
  return {
    type: 'ADD',
    payload: {
      title,
      categories,
      favorite,
      labels,
      movies: movies.movieList,
    },
  };
}
export function remove(index: number, movies: IMovieReducer) {
  return {
    type: 'REMOVE',
    payload: {
      index,
      movies: movies.movieList,
    },
  };
}
