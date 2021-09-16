window.onload = function(){

function horaAtual(){
  let data = new Date();
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let segundo = data.getSeconds();
  let periodo = "AM"

  //Relogio formatada no relogio americano

  if( hora == 0){
      hora = 12;
  }

  if(hora > 12){
    hora = hora - 12;
    periodo = "PM"
  }

  hora = (hora < 10) ? "0" + hora : hora;
  minuto = (minuto < 10) ? "0" + minuto : minuto;
  segundo = (segundo < 10) ? "0" + segundo : segundo;

  let tempo = hora + ":" + minuto + ":" + segundo + " " + periodo;
  document.getElementById("interfaceRelogio").innerHTML = tempo;
  document.getElementById("interfaceRelogio").textContent = tempo;

  setTimeout(horaAtual, 1000);
}



horaAtual();

}
