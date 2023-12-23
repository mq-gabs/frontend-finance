import { ThemeProvider } from "styled-components";
import light from "./assets/theme/light";
import GlobalStyles from "./assets/theme/global";
import { Router } from "./routes";
import { AuthProvider } from "./hooks";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
