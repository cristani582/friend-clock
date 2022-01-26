function carregar() {
  let date = new Date();
  let hora = date.getHours();
  let min = date.getMinutes().toString().padStart(2, "0");
  let foto = document.getElementById("sexo");
  let sec = date.getSeconds();
  if (hora < 12 && hora>=6) {
    // code for the morning
    msg1.innerHTML = "good morning, sunshine!";
    msg.innerHTML = `it's ${hora}:${min}:${sec}s.`;
    foto.src = "morningpic.png";
    document.body.style.background = "yellow";
  } else if (hora == 16 && min == 20) {
    // code for the 4:20 joke
    msg1.innerHTML = "bichobiluga diz oi *-*";
    msg.innerHTML = `hey dude wasup it's 4:20pm dog.`;
    foto.src = "bichobiluga.png";
    document.body.style.background = "#4eff00";
  } else if (hora >= 12 && hora <= 19) {
    // code for the afternoon
    msg1.innerHTML = "good afternoon, beauty!";
    msg.innerHTML = `it's ${hora}:${min}:${sec}s.`;
    foto.src = "afternoonpic.png";
    document.body.style.background =
      "linear-gradient(to right,rgba(255, 178, 12),rgba(255, 90, 0)";
  } else{
    // code for the late night
    msg1.innerHTML = `hmm, it's ${hora}:${min}:${sec}s and it was already dark.`;
    msg.innerHTML = `I wish you a good night ;)`;
    foto.src = "latenight.png";
    document.body.style.background =
      "linear-gradient(to right,rgba(28,40,74),rgba(22,39,62)";
  }
}

setInterval(carregar, 500);