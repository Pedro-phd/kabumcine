import { useState } from 'react';
import {
  Form,
  Title,
  Button,
  TitleInput,
  Label,
  Checkbox,
  CheckContainer,
  Filter,
  ModalContainer,
} from './styles';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Add } from '../../redux/Movie/Movie.actions';
import { useForm } from 'react-hook-form';

import { IRootReducer } from '../../typings';

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
  },
};

function AddMovie() {
  const movies = useSelector((state: IRootReducer) => state.movie);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(
      Add(
        {
          title: data.title,
          categories: `
        ${data.action ? 'Ação' : ''} 
        ${data.adventure ? 'Aventura' : ''} 
        ${data.comedy ? 'Comédia' : ''}
      `,
          favorite: data.favorite,
        },
        movies
      )
    );
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={() => openModal()}>Adicionar Filme</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Adicionar Filme'
      >
        <ModalContainer>
          <Title>Adicionar Filme</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TitleInput {...register('title')} />
            <Filter>
              <CheckContainer>
                <Checkbox type='checkbox' {...register('favorite')} />
                <Label>Favoritos</Label>
              </CheckContainer>
              <CheckContainer>
                <Checkbox type='checkbox' {...register('action')} />
                <Label>Ação</Label>
              </CheckContainer>
              <CheckContainer>
                <Checkbox type='checkbox' {...register('adventure')} />
                <Label>Aventura</Label>
              </CheckContainer>
              <CheckContainer>
                <Checkbox type='checkbox' {...register('comedy')} />
                <Label>Comédia</Label>
              </CheckContainer>
            </Filter>
            <Button>Adicionar Filme</Button>
          </Form>
        </ModalContainer>
      </Modal>
    </>
  );
}

export default AddMovie;
