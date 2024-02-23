import { ThemeProvider } from "styled-components";
import light from "./assets/theme/light";
import GlobalStyles from "./assets/theme/global";
import { Router } from "./routes";
import { AuthProvider } from "./hooks";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Toaster position="top-right" />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
