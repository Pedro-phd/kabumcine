import MovieReducer from '../redux/Movie/Movie.reducer';
import { IMovieReducer } from '../typings/index';
import { v1 } from 'uuid';

jest.mock('uuid');

const initialState: IMovieReducer = {
  movieList: [
    {
      id: '123',
      title: 'Venom',
      categories: ['ação'],
      favorite: false,
      labels: ['netflix'],
    },
    {
      id: '189',
      title: 'homem aranha',
      categories: ['aventura'],
      favorite: true,
      labels: ['prime'],
    },
  ],
};

const actionAdd = {
  type: 'ADD',
  payload: {
    title: 'test',
    categories: ['teste'],
    labels: ['teste'],
    favorite: true,
  },
};

const actionRemove = {
  type: 'REMOVE',
  payload: '123'
};

describe('Reduce tests', () => {
  it('Must validate if the reduce of add returns the correct state', () => {
    (v1 as jest.Mock).mockImplementation(() => '157');
    const result = MovieReducer(initialState, actionAdd);

    expect(result).toStrictEqual({
      movieList: [
        ...initialState.movieList,
        {
          id: '157',
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
      movieList: [{
        id: '189',
        title: 'homem aranha',
        categories: ['aventura'],
        favorite: true,
        labels: ['prime'],
      }],
    });
  });
});
