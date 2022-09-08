let body = document.querySelector("body")
let header = document.createElement("header")
let main = document.createElement("main")
let h1 = document.createElement("h1")
let section = document.createElement("section")
let span1 = document.createElement("span")
let span2 = document.createElement("span")
let ul = document.createElement("ul")
let section2 = document.createElement("section")
let span3 = document.createElement("span")
let span4 = document.createElement("span")
let but = document.createElement("button")

h1.innerText = "Virtual Market"
span1.innerText = "Item"
span2.innerText = "Valor"
span3.innerText = `Total`
span4.innerText = "R$ ?"
but.innerText = "Finalizar compra"

body.append(header, main)
header.appendChild(h1)
main.append(section, ul, section2, but)
section.append(span1, span2)
section2.append(span3, span4)

header.classList.add("header")
main.classList.add("main")
section.classList.add("section")
section2.classList.add("section2")
ul.classList.add("ul")
but.classList.add("but")

function carrinho(lista){
    for(let i = 0; i < lista.length; i++){
        let li = document.createElement("li")
        let p = document.createElement("p")
        let p2 = document.createElement("p")
        li.id = lista[i].id
        p.innerText = lista[i].name
        p2.innerText = `R$ ${lista[i].price}`
        li.append(p, p2)
        ul.append(li)
        li.classList.add("li")
    }
    return ul
}
const but2 = document.querySelector(".but")

function soma(){
    let valor = 0
    for(let i = 0; i < productsCart.length; i++){
        valor = productsCart[i].price + valor 
    }
    span4.innerText = `R$ ${valor}`
    return valor
}

but2.addEventListener("click", soma)

carrinho(productsCart)