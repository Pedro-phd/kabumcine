import {
  Container,
  Title,
  Categorie,
  Favorite,
  HeaderContainer,
  TrashButton,
  TitleContainer,
} from './styles';
import { FavoriteFalse, FavoriteTrue, Trash } from '../Icons';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/Movie/Movie.actions';
import { IMovie, IRootReducer } from '../../typings';

function Movie({ title, categories, favorite, index }: IMovie) {
  const movie = useSelector((state: IRootReducer) => state.movie);
  const dispatch = useDispatch();

  const handleRemove = (index: number) => {
    dispatch(remove(index, movie));
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
      <Categorie>{categories}</Categorie>
    </Container>
  );
}

export default Movie;
