window.oload = setInterval(function(){
    console.log("runin")
    var rand = Math.floor((Math.random()-.5)*20)/10
    console.log(rand)
    if (rand < 0) {
      document.getElementById("zendrive").style.color = "#ff492b"
    } else {
      document.getElementById("zendrive").style.color = "#5aaa25"
    }
    document.getElementById("zendrive").innerHTML =  (84.7+rand).toString().substring(0,4) + "%"
  }, 4500);
