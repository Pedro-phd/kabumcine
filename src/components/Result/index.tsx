import { useEffect, useState } from 'react';
import Movie from '../Movie/index';
import { useSelector } from 'react-redux';
import { IMovie, IRootReducer } from '../../typings';

function Result() {
  const [movieList, setMovieList] = useState<Array<any>>([]);

  const movies = useSelector((state: IRootReducer) => state.movie);

  useEffect(() => {
    setMovieList(movies.movieList);
  }, [movies, movies.movieList]);

  return (
    <>
      {movieList.map((movie: IMovie, index: number) => {
        return (
          <Movie
            key={index}
            title={movie.title}
            categories={movie.categories}
            favorite={movie.favorite}
            index={index}
          />
        );
      })}
    </>
  );
}

export default Result;
