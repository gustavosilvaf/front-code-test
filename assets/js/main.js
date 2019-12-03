let cartas = function() { 
    let cartasarray = ["5 Paus", "4 Paus","3 Paus", "2 Copas", "K Espada", "Q Espada", "10 Espada", "9 Espada", "8 Espada", "8 Copas", "4 Copas", "10 Ouro", "8 Paus", "10 Paus", "7 Ouro", "J Paus", "K Copas", "2 Ouro", "5 Copas", "6 Copas", "J Espada"];

    return cartasarray;
}

var $ = function(elemento){return document.querySelector(elemento)}


let fileiraUm = []
let fileiraDois = []
let fileiraTres = []
const cartasNaFileira = 7;

let lista = cartas();

function split(cartasADividir){
    fileiraUm = []
    fileiraDois = []
    fileiraTres = []
    for (let index = 0; index < cartasADividir.length; index++) {
       if(index % 3 == 0 || index == 0){
           
           fileiraUm.push(cartasADividir[index])
       } else if(index % 3 == 1 || index == 1){
        fileiraDois.push(cartasADividir[index])
       } else {
           fileiraTres.push(cartasADividir[index])
       }
        
    }
}

function embaralharEscolha ( fileiraClicada){
    let embaralhado = [];
    if(fileiraClicada == "primeira"){
        fileiraDois.forEach(element => {embaralhado.push(element)});
        fileiraUm.forEach(element => {embaralhado.push(element)});
        fileiraTres.forEach(element => {embaralhado.push(element)});
    } else if(fileiraClicada == "segunda"){
        fileiraUm.forEach(element => {embaralhado.push(element)});
        fileiraDois.forEach(element => {embaralhado.push(element)});
        fileiraTres.forEach(element => {embaralhado.push(element)});
    } else {
        fileiraUm.forEach(element => {embaralhado.push(element)});
        fileiraTres.forEach(element => {embaralhado.push(element)});
        fileiraDois.forEach(element => {embaralhado.push(element)});
        
    }
    return(embaralhado);
}

let renderizar = function(elemento, fileira) {
    let doc = elemento.outerHTML
    for (let i = 0; i < cartasNaFileira; i++) {
        doc += `<tr"><td>${fileira[i]}</td></tr>`
    }
    return doc;
}

let renderizarFileiras = function(idUm, idDois, idTres){
    $(idUm).innerHTML = `${renderizar($(idUm), fileiraUm)}`;
    $(idDois).innerHTML = `${renderizar($(idDois), fileiraDois)}`;
    $(idTres).innerHTML = `${renderizar($(idTres), fileiraTres)}`;
}

split(lista)
renderizarFileiras('#primeirafileira', '#segundafileira', '#terceirafileira')

lista = embaralharEscolha("terceira");
split(lista);
renderizarFileiras('#primeirafileirascd', '#segundafileirascd', '#terceirafileirascd');

lista = embaralharEscolha("segunda");
split(lista);
renderizarFileiras('#primeirafileiratrc', '#segundafileiratrc', '#terceirafileiratrc');
lista = embaralharEscolha("primeira");

$('#resultado').innerText = `${lista[10]}`




