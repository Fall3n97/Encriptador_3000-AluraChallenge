function textAndButtonDisplay() {
  document.getElementById("hacker-txt").style.fontSize = "1.3em";
  document.getElementById("hacker-txt").style.marginTop = "5em";
  document.getElementById("copy-btn").style.display = "inline";
}

function encrypt() {

  var text = document.getElementById("raw-txt").value.split("");

  for(let i = 0; i < text.length; i++){
    if(text[i] == "e"){
      text[i] = "enter";
    }
    if(text[i] == "i"){
      text[i] = "imes";
    }
    if(text[i] == "a"){
      text[i] = "ai";
    }
    if(text[i] == "o"){
      text[i] = "ober";
    }
    if(text[i] == "u"){
      text[i] = "ufat";
    }
  };

  document.getElementById("tooltip").style.display = "inline-block";
  document.getElementById("tooltip").style.marginTop = "50%";
  document.getElementById("hacker-txt").innerHTML = text.join("");
  textAndButtonDisplay();
};

function desencrypt() {

  var text = document.getElementById("raw-txt").value.split("");

  for(let i = 0; i < text.length; i++){
    if(text[i] == "e" && text[i+1] == "n"){
      text.splice(i+1, 4);
    }
    if(text[i] == "i" && text[i+1] == "m"){
      text.splice(i+1, 3);
    }
    if(text[i] == "a" && text[i+1] == "i"){
      text.splice(i+1, 1);
    }
    if(text[i] == "o" && text[i+1] == "b"){
      text.splice(i+1, 3);
    }
    if(text[i] == "u" && text[i+1] == "f"){
      text.splice(i+1, 3);
    }
  };

  document.getElementById("tooltip").style.display = "inline-block";
  document.getElementById("hacker-txt").innerHTML = text.join("");
  textAndButtonDisplay();
};

function copy() {
  var copyText = document.getElementById("hacker-txt").textContent;

  navigator.clipboard.writeText(copyText).then(() => {
      var tooltip = document.getElementById("myTooltip");
      tooltip.innerHTML = "Mensaje copiado.";
  });

  document.getElementById("raw-txt").value = "";
  document.getElementById("raw-txt").focus();

};