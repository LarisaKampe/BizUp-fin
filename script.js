  alert("Hello! Thank you for checking out this project! :) Please note that this is not a 'real' web page and/or brand, just my practise project. And for now it is not scalable, but I'm working on that too so stay tooned.");

function burger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

