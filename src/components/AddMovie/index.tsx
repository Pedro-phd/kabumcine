import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
} from './styles';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Add } from '../../redux/Movie/Movie.actions';

import { IRootReducer } from '../../typings/index';

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
    console.log(data.labels.split(';'));
    dispatch(
      Add(
        {
          title: data.title,
          categories: data.categories.split(';'),
          labels: data.labels.split(';'),
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
              <InputField>
                <Input {...register('categories')} />
                <Label>Separe por ; as categorias</Label>
              </InputField>
              <InputField>
                <Input {...register('labels')} />
                <Label>Separe por ; as labels</Label>
              </InputField>
            </Filter>
            <Button>Adicionar Filme</Button>
          </Form>
        </ModalContainer>
      </Modal>
    </>
  );
}

export default AddMovie;
