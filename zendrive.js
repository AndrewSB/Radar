window.oload = setInterval(function(){
    var rand = Math.floor((Math.random()-.5)*20)/10
    if (rand < 0) {
      document.getElementById("zendrive").style.color = "#f44336"
    } else {
      document.getElementById("zendrive").style.color = "#6FC59E"
    }
    document.getElementById("zendrive").innerHTML =  (84.7+rand).toString().substring(0,4) + "%"
  }, 10000);
