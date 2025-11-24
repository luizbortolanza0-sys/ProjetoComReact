import { useState } from "react";
import imageJetta from "./assets/jetta.png";
import imageBmw from "./assets/bmw.png";
import imageMcLaren from "./assets/mclaren.png"
import imageMorgan from "./assets/morgan.png"
import imageB95 from "./assets/b95.png"

import "./App.css";

const Carros = [
  {
    nome: "Jetta GLI",
    Ano: "2025",
    Modelo: "2.0 turbo de 231 cv",
    Img: imageJetta,
    URL: "https://www.vw.com.br/pt/carros/Jetta.html"
  },
  {
    nome: "BMW M3",
    Ano: "2025",
    Modelo: "3.0 Twin-Turbo de 503 cv (Competition)",
    Img: imageBmw,
    URL: "https://www.bmw.com.br/pt/all-models/m-series/bmw-3-series-m-models/bmw-m3-seda.html"
  },
  {
    nome: "McLaren W1",
    Ano: "2025",
    Modelo: "Híbrido V8 4.0 biturbo + elétrico — 1.275 cv",
    Img: imageMcLaren,
    URL: "https://www.nehttps://cars.mclaren.com/br-pt/W1tcarshow.com/mclaren/2025-w1/",
  },
  {
    nome: "Morgan Supersport",
    Ano: "2025",
    Modelo: "I6 turbo BMW de 340 cv",
    Img: imageMorgan,
    URL: "https://morgan-motor.com/models/supersport/"
  },
  {
    nome: "Pininfarina B95",
    Ano: "2025",
    Modelo: "Elétrico, 4 motores (um por roda), 1.400 kW",
    Img: imageB95,
    URL: "https://www.automobili-pininfarina.com/coachbuilt/b95"
  },
];

function App() {
  const [count, setCount] = useState(0);
  function addOnCount() {
    if(count == Carros.length-1){
      return;
    }
    return setCount(count + 1);
  }
  function removeCount(){
    if(count==0){
      return; 
    }
    return setCount(count -1);
  }
  return (
    <div>
      <h2>Página {count+1}</h2>
      <h1>{Carros[count].nome} </h1>
      <a href={Carros[count].URL}>
        <img src={Carros[count].Img} alt={Carros[count].Modelo} />
      </a>
      
      <br />
      <p>
        Carro modelo {Carros[count].Modelo}, do ano de {Carros[count].Ano}.
      </p>
      
      <button onClick={removeCount}>Anterior</button>
      <button onClick={addOnCount}>Proximo</button>
    </div>
  );
}

export default App;
