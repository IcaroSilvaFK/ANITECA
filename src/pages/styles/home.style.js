import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  article {
    display: flex;
    align-items: center;
    justify-content: space-around;

    max-width: 1000px;

    margin-top: 30px;

    div {
      h1 {
        font-size: 40px;
        text-align: center;
      }
    }
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  div {
    display: flex;
    align-items: center;

    gap: 10px;

    background-color: #fff;
    width: 400px;
    height: 40px;

    border-radius: 5px;
    padding: 5px;

    input {
      flex-grow: 1;
      font-size: 18px;
      color: #171923;
    }
  }
  button {
    display: flex;
    align-items: center;
    gap: 5px;

    color: #fff;
    background-color: #48bb78;
    padding: 5px;
    border-radius: 5px;
  }
`;
