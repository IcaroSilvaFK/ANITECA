import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.4);

  max-width: 300px;
  height: 60px;

  border-radius: 4px;

  @media (max-width: 500px) {
    width: 160px;
    height: 60px;
  }

  &:hover {
    background-color: rgba(255, 0, 0, 0.5);
    transition: 0.6s;
  }

  cursor: pointer;
`;
