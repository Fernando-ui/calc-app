import { useState } from "react";
import "../src/styles/css/style.css";
import { Pantalla } from "./components/Pantalla";
import { Teclado } from "./components/Teclado";
function App() {
  return (
    <>
      <div className="calc">
        <div className="calc__container">
          <Pantalla />
          <Teclado />
        </div>  
      </div>
    </>
  );
}

export default App;
