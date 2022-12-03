import Profile from "./components/Skeleton/Profile";
import Header from "./components/Skeleton/Header";
import "./index.css"
import AnimatedRoots from "./pages/AnimatedRoutes";
import ThemeProvider from "./contexts/ThemeContext"
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./contexts/LanguageContext";

function App() {

  return <ThemeProvider>
    <LanguageProvider>
      <BrowserRouter>
        <Header />
        <Profile />
        <AnimatedRoots />
      </BrowserRouter>
    </LanguageProvider>
  </ThemeProvider>
}

export default App;
