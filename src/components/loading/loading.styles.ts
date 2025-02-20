import styled from "styled-components";

export const StyledLoadingWrapper = styled.div`
  padding: 0.5rem;
  width: fit-content;
  height: fit-content;

  animation-name: rotating;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes rotating {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;