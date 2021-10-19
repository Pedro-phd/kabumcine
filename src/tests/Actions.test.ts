import { Add, remove } from '../redux/Movie/Movie.actions';
describe('Actions tests', () => {
  it('Must validate if the action returns the correct dispatch', () => {
    const result = Add(
      {
        title: 'test',
        categories: ['teste'],
        labels: ['teste'],
        favorite: true,
      },
      {
        movieList: ['movies'],
      }
    );
    expect(result).toStrictEqual({
      type: 'ADD',
      payload: {
        title: 'test',
        categories: ['teste'],
        labels: ['teste'],
        favorite: true,
        movies: ['movies'],
      },
    });
  });

  it('Must validate if the action returns the correct dispatch', () => {
    const result = remove(0, { movieList: ['movies'] });

    expect(result).toStrictEqual({
      type: 'REMOVE',
      payload: {
        index: 0,
        movies: ['movies'],
      },
    });
  });
});
