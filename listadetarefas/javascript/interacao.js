window.onload = function(){
/* declaraçao de variavel*/

let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.getElementById("ul");
let item = document.getElementsByTagName("li");

/**/

function inputLength(){
  return input.value.length;
}


// criação do li
function criacaoLista() {
 let li = document.createElement("li");

 li.appendChild(document.createTextNode(input.value));
 ul.appendChild(li);
 input.value = "";

 function mudancaCor(){
   li.classList.toggle("done");
 }

 li.addEventListener("click", mudancaCor);

 let deletarButton = document.createElement("button");
 deletarButton.appendChild(document.createTextNode("X"));
 li.appendChild(deletarButton);
deletarButton.addEventListener("click",deletarItemLista);

function deletarItemLista(){
  li.classList.add("delete");
  }
}

function addListaDepoisClique(){
  if(inputLength() > 0){
    criacaoLista();
  }
}

function addListaDepoisEnter(){
  if(inputLength() > 0 && event.which === 13){
      criacaoLista();
  }
}

enterButton.addEventListener("click",addListaDepoisClique);
input.addEventListener("keypress",addListaDepoisEnter);

}