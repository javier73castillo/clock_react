import React, { useEffect, useState } from "react";
import './Clock.css'
export default function Clock() {
    const [clock, setClockState] = useState();
    useEffect(() => {
        setInterval(() => {
            const date = new Date ();
            setClockState (date.toLocaleTimeString());
        }, 1000);
    }, []);
  return (
     <div className="container-clock">
        <h2>{clock}</h2>
    </div>
    );
  };
  