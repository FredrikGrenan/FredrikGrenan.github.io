var bal = 0;
var multiplier = 1
var totalKlikk = 0
var antall = document.getElementById("antallKjeks");
var cookie = document.getElementById("cookie");
var double = document.getElementById("double");
var trippel = document.getElementById("trippel");
var frippel = document.getElementById("frippel");
var multi = document.getElementById("multiklikk");
var stats = document.getElementById("stats")
window.onload = function navn(){
  var navn = prompt("Hei, hva heter du?");
  var bakeriNavn = document.getElementById("bakeriNavn");
  bakeriNavn.innerHTML = (navn + " Sitt Bakeri");
}

cookie.onclick = function cookieClick(){
  bal += 1*multiplier;
  totalKlikk += 1;
  skrivBal();
  console.log("bal = " + bal.toFixed(1));
  skrivTittel()
  oppdaterStats()
}
  function ikkeNok(){
    alert("Du har ikke nok kjeks, trykk mer!");
    console.log("ikke nok");
  }
  function oppgraderLogg(){
    console.log("multiplier " + multiplier);
    skrivBal();
    console.log("bal = " + bal.toFixed(1));
  }
  function oppdaterStats(){
    stats.innerHTML = "Du har klikket totalt " + totalKlikk + " ganger"
  }

var array = [30,100,500,1500];
var tekst = [2,3,4,5]
var teller = 0;
var lengde = array.length
  multi.onclick = function kjop(){
    if (bal>=array[teller]) {
      if (teller<=lengde-2) {
        bal -= array[teller];
        teller +=1;
        multiplier += 1;
        multi.innerHTML = tekst[teller] + " Kjeks per trykk: " + array[teller] + "$";
        oppgraderLogg();
        console.log(teller);
      }
      else if (teller = lengde-1) {
        bal -= array[teller];
        totalbrukt += array[teller]
        multiplier += 1;
        teller += 1
        multi.innerHTML = "Fult oppgradert!";
        oppgraderLogg();
        console.log("teller: " + teller);
      } else if (teller < 3) {
          multi.style.disabled = true;
      }

    }else {
      ikkeNok();
    }
  }
