import styled from "styled-components";

export const StyledSign = styled.main<{ isregister: boolean }>`
  display: flex;
  justify-content: space-between;

  .sign {
    width: 40%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 100vh;
  }

  .sign form {
    display: grid;
    gap: 1rem;
    max-width: 500px;
    width: 300px;
  }

  .overcard {
    position: absolute;
    z-index: 10;
    width: 60%;
    height: 100vh;
    background: ${({ theme }) =>
      `linear-gradient(${theme.colors.primary}, ${theme.colors.quaternary})`};
    ${({ isregister }) => isregister && `right: 0;`};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;

    p, h1 {
      font-size: 1.5rem;
      color: white;
      text-align: center;
    }

    h1 {
      font-size: 1.8rem;
    }
  }

  .overcard-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    svg {
      height: 100px;
      width: 300px;
    }
  }
`;
