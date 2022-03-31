import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 80px;

  border-bottom: 1px solid #eee;

  div {
    a {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  nav {
    ul {
      display: flex;
      align-items: center;
      gap: 40px;
      li {
        a {
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }
    }
  }
`;

export const Title = styled.h1`
  font-family: var(--fontMont);
`;
