let parrafos = document.getElementsByClassName("parrafo");
let parrafos2 = document.getElementsByClassName("parrafo2");

for (let index = 0; index < parrafos.length; index++) {
   parrafos[index].addEventListener("click", mensaje, false);
    
}
for (let index = 0; index < parrafos2.length; index++) {
   parrafos2[index].addEventListener("click", mensaje2, false);
    
}

function mensaje() {
    console.log("Se presionó un párrafo del documento.");
}
function mensaje2() {
    console.log("Se presionó un párrafo contenido en la segunda tabla.");
}