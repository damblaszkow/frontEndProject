function showWhatIDo(cardName) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent;
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  tabcontent = document.getElementsByClassName("card");

  if (width > 1000) {
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    document.getElementById(cardName).style.display = "block";
    document.getElementById(cardName + 'Display').style.display = "block";
    document.getElementById(cardName + 'h3').style.textAlign = "center";
  }

}

function showAll(cardName) {
  var i, tabcontent;
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  tabcontent = document.getElementsByClassName("card");

  if (width > 1000) {
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "block";
    }

    document.getElementById(cardName + 'h3').style.textAlign = "left";
    document.getElementById(cardName + 'Display').style.display = "none";
  }

}