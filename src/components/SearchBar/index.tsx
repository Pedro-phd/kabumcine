import { Bar,Button,Container,Checkbox,Label,CheckContainer,Search,Filter } from './styles';

function SearchBar() {
  return (
    <Container>
    <Search>
      <Bar/>
      <Button>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" viewBox="0 0 20 20" fill="white" width="30" height="30">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </Button>
    </Search>
    <Filter>
      <CheckContainer>
        <Checkbox type="checkbox"/>
        <Label>
          Favoritos
        </Label>
      </CheckContainer>
      <CheckContainer>
        <Checkbox type="checkbox"/>
        <Label>
          Ação
        </Label>
      </CheckContainer>
      <CheckContainer>
        <Checkbox type="checkbox"/>
        <Label>
          Aventura
        </Label>
      </CheckContainer>
      <CheckContainer>
        <Checkbox type="checkbox"/>
        <Label>
          Comédia
        </Label>
      </CheckContainer>
    </Filter>
    </Container>
  );
};

export default SearchBar;
