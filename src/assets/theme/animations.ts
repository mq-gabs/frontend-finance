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

export const boxShadow = `box-shadow: 0px 0px 5px rgba(0,0,0,0.5);`;

export const bright = `filter: brightness(1.1);`;
