export interface IReduxAction {
  type: String;
  payload: any;
}
export interface IMovieReducer {
  movieList: Array<IMovie>;
}
export interface IMovie {
  title: String;
  categories: Array<string>;
  favorite: boolean;
  index?: any;
}

export interface IRootReducer {
  movie: IMovieReducer;
}
