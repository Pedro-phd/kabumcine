import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v1 } from 'uuid';
import {
  Form,
  Title,
  Button,
  TitleInput,
  Input,
  Filter,
  ModalContainer,
  Label,
  InputField,
  Close,
  Checkbox,
  LabelCheck,
} from './styles';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Add } from '../../redux/Movie/Movie.actions';

import { IRootReducer } from '../../typings/index';
import Swal from 'sweetalert2';

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
    if (data.title.trim() != '') {
      dispatch(
        Add({
          title: data.title,
          categories: data.categories.split(';'),
          labels: data.labels.split(';'),
          favorite: data.favorite,
        })
      );
      Swal.fire(
        'Filme adicionado com sucesso!',
        `Filme ${data.title} adicionado a sua lista!`,
        'success'
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'O campo titulo é obrigatorio!',
      });
    }
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

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
            <TitleInput {...register('title')} placeholder='Título ...' />
            <Filter>
              <Checkbox type='checkbox' {...register('favorite')} />
              <LabelCheck>Favoritos</LabelCheck>
              <InputField>
                <Input {...register('categories')} placeholder='Categorias' />
                <Label>Separe por ; as categorias</Label>
              </InputField>
              <InputField>
                <Input {...register('labels')} placeholder='Labels' />
                <Label>Separe por ; as labels</Label>
              </InputField>
            </Filter>
            <Button>Adicionar Filme</Button>
          </Form>
          <Close onClick={() => closeModal()}>Cancelar</Close>
        </ModalContainer>
      </Modal>
    </>
  );
}

export default AddMovie;
