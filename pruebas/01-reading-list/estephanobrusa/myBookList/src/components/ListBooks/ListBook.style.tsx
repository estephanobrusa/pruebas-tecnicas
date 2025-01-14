import { styled } from "styled-components";

export  const Container = styled.div`
    width: 50%;
    height: 100vh;
    padding: 20px;
    color: #f6f1f1;
`;

export  const BookAvailable = styled.h1`
`;

export  const BookBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;
export  const CardBook = styled.div`
    width: 100px;
    width: 100px;
    border-radius: 20px;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
    }
    :hover{
        box-shadow: 0px 0px 10px 0px #ffffff;
    }
`;

export const ContainerFilter = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 50px;

`;

export const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: transparent;
  :focus{
    outline: none;
  }

`;