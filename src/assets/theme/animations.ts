export const showUp = `
animation-name: show-up;
animation-duration: 500ms;

@keyframes show-up {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
`;

export const transition = `transition: 300ms;`;
