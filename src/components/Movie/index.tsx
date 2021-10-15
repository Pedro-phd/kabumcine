import { 
  Container, 
  Title, 
  Categorie, 
  Favorite,
  HeaderContainer,
  TrashButton,
  TitleContainer 
} from './styles';
import {FavoriteFalse, FavoriteTrue, Trash} from '../Icons'
interface MovieProps {
  title: String;
  categories: Array<String>;
  favorite: boolean;
}

function Movie({ title,categories,favorite }: MovieProps) {
  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <Favorite>
            {favorite ? <FavoriteTrue/> : <FavoriteFalse/>}
          </Favorite>
        </TitleContainer>
          <TrashButton>
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
