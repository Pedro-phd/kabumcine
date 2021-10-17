import { useState, useEffect } from 'react'
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { IMovie, IRootReducer } from '../../typings';
import Movie from '../Movie/index'

interface ISearchResult {
  openModal: boolean
  word: string
  actionClose: any
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
    height:'auto',
    maxWidth: '800px',
    maxHeight: '500px'
  },
};

function SearchResult({openModal,word, actionClose}:ISearchResult) {

  const movies = useSelector((state:IRootReducer) => state.movie)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchMovieList, setSearchMovieList] = useState<any>([])
  useEffect(() => {
    setIsOpen(openModal);
    const searchList = movies.movieList.filter((movie:IMovie) => movie.title.includes(word))
    setSearchMovieList(searchList)
  },[openModal,word,movies.movieList])

  const closeModal = () => {
    setIsOpen(false)
    actionClose(false)
  }
  return (
    <>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Adicionar Filme"
      >
        {
          searchMovieList.map((movie:IMovie, index:number) =>{
            return(
              <Movie 
                key={index}
                title={movie.title}
                categories={movie.categories} 
                favorite={movie.favorite}  
                index={index}
              />
              )
          })
        }
      </Modal>
    </>
  );
};

export default SearchResult;
