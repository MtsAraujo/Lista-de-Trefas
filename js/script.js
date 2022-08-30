let contador = 0
let input = document.getElementById("Tarefa");
let btnAdd = document.getElementsByid("adicionar");
let main = document.getElementById("Lista");

function addTarefa() {

    let valorInput = input.value;

    if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
        contador++
        var novoItem = `<div id="` + contador + ` " class="Item">
       <div onclick="marcarTarefa(`+ contador + `)" class="ItemIcone">
           <img  src="img/circulo.png" alt="">
       </div>
       <div onclick="marcarTarefa(`+ contador + `)" class="ItemNome">
           `+ valorInput + `
       </div>
       <div class="ItemBotao">
           <button onclick="deletar(`+ contador + `)" class="deletar"> <img src="img/excluir.png" alt=""> Deletar</button>
       </div>
   </div>`;
        main.innerHTML += novoItem

        valorInput = " ";
        input.focus();
    } else {
        alert("ADICIONE UM VALOR VALIDO");
    }
}



function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();

}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute(`class`);

    if (classe == "item") {
        item.classList.add(`clicado`);
        item.parentNode.appendChild(item);

    }else{
        item.classList.remove(`clicado`);
    }
}