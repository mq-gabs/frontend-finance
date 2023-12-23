import { ThemeProvider } from "styled-components";
import light from "./assets/theme/light";
import GlobalStyles from "./assets/theme/global";
import { Router } from "./routes";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
