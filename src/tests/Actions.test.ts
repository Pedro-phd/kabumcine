import { Add, Remove } from '../redux/Movie/Movie.actions';

describe('Actions tests', () => {
  it('Must validate if the action returns the correct dispatch', () => {
    const result = Add(
      {
        title: 'test',
        categories: ['test'],
        labels: ['test'],
        favorite: true,
      }
    );
    expect(result).toStrictEqual({
      type: 'ADD',
      payload: {
        title: 'test',
        categories: ['test'],
        labels: ['test'],
        favorite: true,
      },
    });
  });

  it('Must validate if the action returns the correct dispatch', () => {
    const result = Remove("123");

    expect(result).toStrictEqual({
      type: 'REMOVE',
      payload: "123"
    });
  });
});
