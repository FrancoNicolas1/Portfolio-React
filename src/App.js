import React, { useContext } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import MensajesEnIngles from "./lang/en-US.json";
import MensajeEnEspañol from "./lang/es-ARG.json";
import { langContext } from "./context/langContext";

function App() {
  const idioma = useContext(langContext);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
