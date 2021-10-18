import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { IMovie, IRootReducer } from '../../typings';
import Movie from '../Movie/index';

interface ISearchResult {
  openModal: boolean;
  word: string;
  actionClose: any;
  categorieFilter: string;
  labels: string;
  favorite: boolean;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    width: '100%',
    height: 'auto',
    maxWidth: '800px',
    maxHeight: '500px',
  },
};

function SearchResult({
  openModal,
  word,
  actionClose,
  categorieFilter,
  labels,
  favorite,
}: ISearchResult) {
  const movies = useSelector((state: IRootReducer) => state.movie);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchMovieList, setSearchMovieList] = useState<Array<any>>([]);
  useEffect(() => {
    setIsOpen(openModal);
    const searchList = movies.movieList.filter((movie: IMovie) =>
      movie.title.includes(word)
    );

    const filterResult = searchList.map((movie) => {
      if (
        movie.labels.find((label) => label.indexOf(labels) >= 0) &&
        movie.categories.find(
          (categorie) => categorie.indexOf(categorieFilter) >= 0
        )
      ) {
        if (favorite == true) {
          if (movie.favorite == true) {
            return movie;
          } else {
            return undefined;
          }
        } else {
          return movie;
        }
      }
    });

    setSearchMovieList(filterResult);
  }, [openModal, word, movies.movieList, categorieFilter, labels]);

  const closeModal = () => {
    setIsOpen(false);
    actionClose(false);
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Adicionar Filme'
      >
        {searchMovieList.map((movie: IMovie, index: number) => {
          if (movie == undefined) return null;
          return (
            <Movie
              key={index}
              title={movie.title}
              categories={movie.categories}
              favorite={movie.favorite}
              index={index}
              labels={movie.labels}
            />
          );
        })}
        {searchMovieList.length == 0 && (
          <h1>{'Nenhum resultado de busca ... :('}</h1>
        )}
      </Modal>
    </>
  );
}

export default SearchResult;
