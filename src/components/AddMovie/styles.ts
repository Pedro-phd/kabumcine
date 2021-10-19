import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 170px;
  background-color: #fc6b0f;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  margin: 20px auto 0;
  height: 50px;
  outline: none;
`;

export const Close = styled.button`
  width: 100%;
  max-width: 170px;
  background-color: none;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  margin: 20px auto 0;
  height: 50px;
  outline: none;
  color: #ad2828;
`;

export const TitleInput = styled.input`
  font-style: italic;
  max-width: 600px;
  width: 100%;
  background-color: #ebebeb;
  height: 50px;
  outline: none;
  font-size: 18px;
  color: #a4a3a3;
  border: none;
  padding-left: 25px;
  border-radius: 10px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`;
export const Input = styled.input`
  font-style: italic;
  max-width: 150px;
  width: 100%;
  background-color: #ebebeb;
  height: 50px;
  outline: none;
  font-size: 18px;
  color: #a4a3a3;
  border: none;
  padding-left: 25px;
  border-radius: 10px;
  margin: 0 auto;
`;

export const Filter = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  margin: 40px auto;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  &:first-child {
    margin-left: 0;
  }
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

export const LabelCheck = styled.label`
  color: #a4a3a3;
  font-size: 14px;
  font-style: italic;
  margin-left: 5px;
  font-weight: 700;
`;

export const Label = styled.label`
  color: #a4a3a3;
  font-size: 12px;
  font-style: italic;
  margin-left: 5px;
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #0587c6;
  font-weight: bold;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
