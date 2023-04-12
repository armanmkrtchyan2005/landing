import { useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import useExitPrompt from "./hooks/useExitPrompt";
import "./Components/i18n/i18n.jsx";
import { useTranslation } from "react-i18next";

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

function App() {
  const [, setShowExitPrompt] = useExitPrompt(true);
  const { i18n } = useTranslation();
  useEffect(() => {
    const redirect = JSON.parse(localStorage.getItem("redirect"));
    if (redirect) {
      window.location.replace("https://youtube.com");
    }
    const userLang = window.navigator.language.split("-")[0];
    i18n.changeLanguage(userLang);

    return () => {
      setShowExitPrompt(false);
    };
  }, []);
  useEffect(() => {
    const handleClick = () => {
      setShowExitPrompt(false);
      audio.play();
      localStorage.setItem("redirect", "true");
      audio.onended = () => {
        window.location.replace("https://youtube.com");
      };
    };

    window.addEventListener("click", handleClick);

    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);
  const handlePopstate = function (event) {
    if (event) {
      setShowExitPrompt(false);
      window.location.href = "https://www.yahoo.com";
    }
  };

  return (
    <div className="App">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
