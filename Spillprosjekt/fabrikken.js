var autoClick = document.getElementById("autoclick");
var tittel = document.getElementById("tittel");
var ovn = document.getElementById("storreOvner");
var varme = document.getElementById("varmeOvner");
var storFabrikk = document.getElementById("storeFabrikker")
var brukt = document.getElementById("totalbrukt")
var factory = 0;
var autoClickPris = 10;
var ovnPris = 100;
var varmePris = 1000;
var storeFabrikkerPris = 10000;

function skrivBal(){
    antall.innerHTML = bal.toFixed(0) + "$";
};
function skrivTittel(){
  tittel.innerHTML=bal.toFixed(0) + " Cookies!"
};
autoclick.onclick = function autoclick(){
  if (bal<autoClickPris) {
    ikkeNok()
  }else {
    bal -= autoClickPris;
    autoClickPris += 2;
    factory += 0.1;
    skrivBal();
    autoClick.innerHTML="Auto Click: " + autoClickPris + "$"
    kjeksPerSekund.innerHTML = factory.toFixed(1) + "$ per sekund"
  };
};
ovn.onclick = function ovn(){
  if (bal < ovnPris) {
    ikkeNok()
  } else {
    bal -= ovnPris;
    totalbrukt += ovnPris;
    ovnPris += 10;
    factory += 1;
    skrivBal();
    storreOvner.innerHTML="Større ovner: " + ovnPris + "$";
    kjeksPerSekund.innerHTML = factory.toFixed(1) + "$ per sekund"
  };
};
varme.onclick = function varme(){
  if (bal < varmePris) {
    ikkeNok()
  } else {
    bal -= varmePris;
    varmePris += 100;
    factory += 10;
    skrivBal();
    varmeOvner.innerHTML="Varmere Ovner: " + varmePris + "$"
    kjeksPerSekund.innerHTML = factory.toFixed(1) + "$ per sekund"
  };
};
storFabrikk.onclick = function storFabrikk(){
  if (bal<storeFabrikkerPris) {
    ikkeNok()
  }else {
    bal -= storeFabrikkerPris;
    storeFabrikkerPris += 1000;
    factory += 100;
    skrivBal();
    storeFabrikker.innerHTML="Stor fabrikk Click: " + storeFabrikkerPris + "$"
    kjeksPerSekund.innerHTML = factory.toFixed(1) + "$ per sekund"
  };
};

function autoProd(){
  bal += 1*factory;
  skrivBal()
  console.log(factory)
  skrivTittel()
}
setInterval(autoProd,1000)
