import React from "react";
import "./LightweightSite.css";

export default function LightweightSite() {
    return <div className="_site">
            <Frontpage/>
        </div>;
  }
  
function Frontpage() {
    return <>
        <div className="_headingContainer">
            <h1 className="_heading">Randall Kent Brown Jr.</h1>
            <h2 className="_heading">Madison, WI</h2>
        </div>
        <p>
            Hello, I'm Kent! I'm a Software Developer currently working at Epic, an electronic health records company. I graduated with a Bachelor's in Software Engineering from RIT (Rochester Institute of Technology) in 2021.
        </p>
        <p>
            "A quote? I don't know... I don't know a quote." -Carly Masonheimer, July 2023
        </p>
    </>;
}