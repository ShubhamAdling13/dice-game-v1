import "./Home.css";
import React from "react";
import i1 from "./images/dice1.png";
import i2 from "./images/dice2.png";
import i3 from "./images/dice3.png";
import i4 from "./images/dice4.png";
import i5 from "./images/dice5.png";
import i6 from "./images/dice6.png";

function Home() {
  function startgame() {
    var pn1 = prompt("player 1 enter your name");
    var pn2 = prompt("player 2 enter your name");

    var p1 = document.querySelector("#p1name");
    p1.textContent = pn1;
    var p2 = document.querySelector("#p2name");
    p2.textContent = pn2;

    document.querySelector(".strtbtn").style.visibility = "hidden";
    document.querySelector(".playbutton").style.visibility = "visible";
  }

  function rolldice() {
    var num1 = Math.floor(Math.random() * 6) + 1;
    var num2 = Math.floor(Math.random() * 6) + 1;
    console.log(num1, num2);
    var im1 = document.querySelector("#p1");
    var im2 = document.querySelector("#p2");
    im1.style.visibility = "visible";
    im2.style.visibility = "visible";

    if (num1 === 1) {
      im1.setAttribute("src", i1);
    }
    if (num1 === 2) {
      im1.setAttribute("src", i2);
    }
    if (num1 === 3) {
      im1.setAttribute("src", i3);
    }
    if (num1 === 4) {
        im1.setAttribute("src", i4);
      }
      if (num1 === 5) {
        im1.setAttribute("src", i5);
      }
      if (num1 === 6) {
        im1.setAttribute("src", i6);
      }


      if (num2 === 1) {
        im2.setAttribute("src", i1);
      }
      if (num2 === 2) {
        im2.setAttribute("src", i2);
      }
      if (num2 === 3) {
        im2.setAttribute("src", i3);
      }
      if (num2 === 4) {
          im2.setAttribute("src", i4);
        }
        if (num2 === 5) {
          im2.setAttribute("src", i5);
        }
        if (num2 === 6) {
          im2.setAttribute("src", i6);
        }

    var p01 = document.querySelector("#p1name").textContent;
    var p02 = document.querySelector("#p2name").textContent;

    var winner = document.querySelector("h1");
    if (num1 > num2) {
      winner.textContent = p01 + " is winner !!";
    } else if (num2 > num1) {
      winner.textContent = p02 + " is winner !!";
    } else {
      winner.textContent = "It's a Draw !!";
    }
  }

  return (
    <>
      <div className="heding">
        <h1>Welcome to Dice Game</h1>
      </div>

      <div className="outercontianer">
        <div className="btns">
          <div className="playbutton">
            <button onClick={rolldice}>Play</button>
          </div>
          <div className="strtbtn">
            <button onClick={startgame}>START GAME </button>
          </div>
        </div>
        <div className="container">
          <div id="p1name">Player 1</div>
          <div id="p2name">Player 2</div>
          <div>
            <img src="" alt="image1" id="p1" />
          </div>
          <div>
            <img src="" alt="image2" id="p2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
