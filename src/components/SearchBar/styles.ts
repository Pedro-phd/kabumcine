import styled from 'styled-components';

export const Bar = styled.input`
  font-style: italic;
  max-width: 500px;
  width: 100%;
  background-color: #ebebeb;
  height: 50px;
  outline: none;
  font-size: 18px;
  color: #a4a3a3;
  border: none;
  padding-left: 25px;
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const Button = styled.button`
  width: 70px;
  height: 50px;
  background-color: #fc6b0f;
  border-radius: 10px;
  border: none;
  outline: none;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-left: 5px solid #de5d0b;
  transition: 0.3s;
  &:hover {
    background-color: #f55f00;
  }
`;

export const Search = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  margin: 0 auto;
`;
export const Checkbox = styled.input`
  width: 25px;
  height: 25px;
  background-color: #ebebeb;
  transition: 0.3s;
  border-radius: 5px;
  border: none;
  &:checked {
    background-color: #0587c6;
  }
`;
export const Label = styled.label`
  color: #a4a3a3;
  font-size: 14px;
  font-style: italic;
  margin-left: 5px;
  font-weight: 700;
`;

export const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  &:first-child {
    margin-left: 0;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;
export const Filter = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
`;
