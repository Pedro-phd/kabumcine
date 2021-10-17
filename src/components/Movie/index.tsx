import { 
  Container, 
  Title, 
  Categorie, 
  Favorite,
  HeaderContainer,
  TrashButton,
  TitleContainer 
} from './styles';
import { FavoriteFalse, FavoriteTrue, Trash} from '../Icons'
import { useSelector, useDispatch} from 'react-redux'
import { remove } from '../../redux/Movie/Movie.actions'
import { IRootReducer } from '../../typings';
interface MovieProps {
  title: String;
  categories: Array<String>;
  favorite: boolean;
  index: number
}
function Movie({ title,categories,favorite, index }: MovieProps) {

  const movie = useSelector((state:IRootReducer) => state.movie)
  const dispatch = useDispatch()

  const handleRemove = (index:number) =>{
    console.log(index)
    dispatch(remove(index,movie))
  }

  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <Favorite>
            {favorite ? <FavoriteTrue/> : <FavoriteFalse/>}
          </Favorite>
        </TitleContainer>
          <TrashButton onClick={() =>{
            handleRemove(index)
          }}>
            <Trash/>
          </TrashButton>
      </HeaderContainer>

      {categories.map((categorie) =>{
        return(
          <Categorie key={Math.random()}>{categorie}</Categorie>
        )
      })}
      
    </Container>
  );
};

export default Movie;
