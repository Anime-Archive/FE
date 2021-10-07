import "./index.css";

// MUI
import { ThemeProvider } from "@mui/material/styles";

// Theme
import Theme from "./Theme/Theme.js";

//Pages
import Landing from "./Pages/Landing/Landing.js";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Landing />
      </div>
    </ThemeProvider>
  );
}

export default App;
