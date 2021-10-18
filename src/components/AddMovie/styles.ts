import styled from 'styled-components';

export const ModalContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

export const Button = styled.button`
    width:100%;
    max-width:170px;
    background-color: #FC6B0F;
    color:white;
    font-size:14px;
    font-weight:bold;
    border:none;
    border-radius:10px;
    margin: 20px auto 0;
    height: 50px;
    outline: none;

`;
export const TitleInput = styled.input`
    font-style:italic;  
    max-width: 600px;
    width:100%;
    background-color:#EBEBEB;
    height: 50px;
    outline: none;
    font-size:18px;
    color: #A4A3A3;
    border:none;
    padding-left:25px;
    border-radius:10px;
    border-top-right-radius:0px;
    border-bottom-right-radius:0px;
    margin:0 auto;
`

export const Filter = styled.div`
    width:100%;
    max-width:500px;
    display:flex;
    margin: 40px auto;
    flex-direction: row;
    justify-content: space-evenly;
`
export const CheckContainer = styled.div`
    display:flex;
    align-items: center;
    margin-left:10px;
    &:first-child{
        margin-left:0;
    }
`
export const Checkbox = styled.input`
    width:25px;
    height:25px;
    background-color: #EBEBEB;
    transition: 0.3s;
    border-radius:5px;
    border:none;
    &:checked{
        background-color: #0587C6;
    }
`
export const Label = styled.label`
    color: #A4A3A3;
    font-size:14px;
    font-style:italic;
    margin-left:5px;
    font-weight:700;
`

export const Title = styled.h1`
    font-size: 48px;
    color: #0587C6;
    font-weight:bold;
    text-align:center;
`
export const Form = styled.form`
    display:flex;
    flex-direction: column;
`