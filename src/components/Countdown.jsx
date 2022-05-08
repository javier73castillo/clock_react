import React, { useState, useEffect } from "react";
import './Countdown.css'
const Countdown = () => {
  const [tiempo, setTiempo] = useState("");
  useEffect(() => {
    let countDownDate = new Date("August 28, 2022 13:21:00").getTiempo();
    let x = setInterval(() => {
      let now = new Date().getTiempo();
      let distancia = countDownDate - now;
      let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      let horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
      let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

      setTiempo(dias + "d " + horas + "h " + minutos + "m " + segundos + "s ");

      if (distancia < 0) {
        clearInterval(x);
        setTiempo("Contador finalizado");
      }
    }, 1000);
  }, []);
  return (
    <div className="container-countdown">
      <h2>{tiempo}</h2>
    </div>
  );
};

export default Countdown;
