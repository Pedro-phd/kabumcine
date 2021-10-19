import MovieReducer from '../redux/Movie/Movie.reducer';
import { IMovieReducer } from '../typings/index';

const initialState: IMovieReducer = {
  movieList: [],
};
const actionAdd = {
  type: 'ADD',
  payload: {
    title: 'test',
    categories: ['teste'],
    labels: ['teste'],
    favorite: true,
    movies: ['movies'],
  },
};
const actionRemove = {
  type: 'REMOVE',
  payload: {
    id: 0,
    movies: ['movies', 'teste'],
  },
};

describe('Reduce tests', () => {
  it('Must validate if the reduce of add returns the correct state', () => {
    const result = MovieReducer(initialState, actionAdd);

    expect(result).toStrictEqual({
      movieList: [
        ...actionAdd.payload.movies,
        {
          title: 'test',
          categories: ['teste'],
          labels: ['teste'],
          favorite: true,
        },
      ],
    });
  });

  it('Must validate if the reduce of remove returns the correct state', () => {
    const result = MovieReducer(initialState, actionRemove);

    expect(result).toStrictEqual({
      movieList: ['teste'],
    });
  });
});
