import {
  Container,
  Title,
  Categorie,
  Labels,
  Favorite,
  HeaderContainer,
  TrashButton,
  TitleContainer,
} from './styles';
import { FavoriteFalse, FavoriteTrue, Trash } from '../Icons';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/Movie/Movie.actions';
import { IMovie, IRootReducer } from '../../typings';
import toast, { Toaster } from 'react-hot-toast';

function Movie({ title, categories, favorite, index, labels }: IMovie) {
  const movie = useSelector((state: IRootReducer) => state.movie);
  const dispatch = useDispatch();
  const handleRemove = (index: number) => {
    dispatch(remove(index, movie));
    toast('Filme excluido!', {
      icon: '🗑️',
    });
  };

  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <Favorite>{favorite ? <FavoriteTrue /> : <FavoriteFalse />}</Favorite>
        </TitleContainer>
        <TrashButton
          onClick={() => {
            handleRemove(index);
          }}
        >
          <Trash />
        </TrashButton>
      </HeaderContainer>
      {categories.map((categorie) => {
        return categorie != '' ? (
          <Categorie key={Math.random()}>{categorie}</Categorie>
        ) : null;
      })}
      {labels.map((label) => {
        return label != '' ? (
          <Labels key={Math.random()}>{label}</Labels>
        ) : null;
      })}
      <Toaster />
    </Container>
  );
}

export default Movie;
