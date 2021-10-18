import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  margin-top: 15px;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #505050;
  margin: 0;
`;
export const Categorie = styled.p`
  font-size: 12px;
  color: #505050;
  display: inline-block;
  margin-right: 10px;
`;

export const Favorite = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 0;
  margin-left: 10px;
`;
export const TrashButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
`;
