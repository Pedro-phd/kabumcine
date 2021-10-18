import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { IMovie, IRootReducer } from '../../typings';
import Movie from '../Movie/index';

interface ISearchResult {
  openModal: boolean;
  word: string;
  actionClose: any;
  categorie: string;
  labels: string;
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
  categorie,
  labels,
}: ISearchResult) {
  const movies = useSelector((state: IRootReducer) => state.movie);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchMovieList, setSearchMovieList] = useState<any>([]);
  useEffect(() => {
    setIsOpen(openModal);
    const searchList = movies.movieList.filter((movie: IMovie) =>
      movie.title.includes(word)
    );

    const labelFilter = searchList.map((movie) => {
      if (movie.labels.find((label) => label.includes(labels)) == labels) {
        return movie;
      }
    });

    setSearchMovieList(labelFilter);
  }, [openModal, word, movies.movieList, categorie, labels]);

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
      </Modal>
    </>
  );
}

export default SearchResult;
