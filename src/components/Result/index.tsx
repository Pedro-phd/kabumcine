import { useEffect, useState } from 'react';
import Movie from '../Movie/index';
import { useSelector } from 'react-redux';
import { IMovie, IRootReducer } from '../../typings';

function Result() {
  const [movieList, setMovieList] = useState<Array<IMovie>>([]);

  const movies = useSelector((state: IRootReducer) => state.movie);

  useEffect(() => {
    setMovieList(movies.movieList);
  }, [movies, movies.movieList]);

  return (
    <>
      {' '}
      {movieList.map((movie: IMovie) => (
        <Movie key={movie.id} {...movie} />
      ))}{' '}
    </>
  );
}

export default Result;
