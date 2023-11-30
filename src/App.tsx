import { ThemeProvider } from "styled-components";
import { Sign } from "./pages";
import light from "./assets/theme/light";
import GlobalStyles from "./assets/theme/global";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Sign />
    </ThemeProvider>
  );
}

export default App;
