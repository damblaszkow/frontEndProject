function menuHover() {
  var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function smallMenuOut() {
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var x = document.getElementById("myTopnav");
  if (width <= 1000 && x.className === "topnav responsive")
  {
    menuHover()
  }
}