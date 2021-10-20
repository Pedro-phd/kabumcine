export interface IReduxAction {
  type: string;
  payload: IMovieAdd | string;
}
export interface IMovieReducer {
  movieList: Array<IMovie>;
}
export interface IActionAdd {
  title: string;
  categories: Array<string>;
  favorite: boolean;
  labels: Array<string>;
}
export interface IMovie {
  id: string
  title: string;
  categories: Array<string>;
  favorite: boolean;
  labels: Array<string>;
}
export type IMovieAdd = Omit<IMovie, "id">
  

export interface IRootReducer {
  movie: IMovieReducer;
}
