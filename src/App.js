import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import useExitPrompt from "./hooks/useExitPrompt";

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

function App() {
  const [, setShowExitPrompt] = useExitPrompt(true);
  useEffect(() => {
    return () => {
      setShowExitPrompt(false);
    };
  }, []);
  useEffect(() => {
    const handleClick = () => {
      setShowExitPrompt(false);
      audio.play();

      audio.onended = () => {
        window.location.replace("https://youtube.com");
      };
    };

    window.addEventListener("click", handleClick);
    // window.history.pushState({ page: 1 }, "", "");

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

// import React, { PropTypes, Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//   }
//   beforeUnLoad = (e) => {
//     e.preventDefault();
//     e.stopImmediatePropagation();
//     e.returnValue = "leave";
//   };

//   handleTabClosing = (e) => {
//     e.preventDefault();
//     e.stopImmediatePropagation();
//     e.returnValue = "leave";
//   };

//   componentDidMount() {
//     window.addEventListener("beforeunload", this.beforeUnLoad);
//     window.addEventListener("unload", this.handleTabClosing);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("beforeunload", this.beforeUnLoad);
//     window.removeEventListener("unload", this.handleTabClosing);
//   }

//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Landing />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;
