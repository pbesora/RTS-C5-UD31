let text = prompt("Introduce un fecha(XX/XX/XXXX)", "Naci el 05/04/1982 en Donostia.");

if (text.search("[0-9]{2}/[0-9]{2}/[0-9]{4}") > -1) {
    alert("Fecha válida.");
}


text = prompt("Introduce un mail", "hola.mundo@asdaadas.com");

if (text.search("[0-9a-z\-\.]+@[a-z]+\.[a-z]{2,3}") == 0) {
    alert("Dirección válida.");
}


text = prompt("Introduce un texto", "& \" < >");

alert(escapeHTML(text));


let nombre = [];

text = prompt("Introduce un Nombre Apellido", "Juan Juans");

nombre = text.split(/ /);

alert(nombre[1] + ", " + nombre[0]);


text = prompt("Introduce un texto", "TEXTO<script></script>TEXTO");
text = text.replace("<script>", "");
text = text.replace("</script>", "");
alert(text);

function escapeHTML(text1) {
    
    let replacements = [["&", "&amp;"], ["\"", "&quot;"], ["<", "&lt;"], [">", "&gt;"]];

   text1 = text1.replace(replacements[0][0], replacements[0][1]);
   text1 = text1.replace(replacements[1][0], replacements[1][1]);
   text1 = text1.replace(replacements[2][0], replacements[2][1]);
   text1 = text1.replace(replacements[3][0], replacements[3][1]);

    return text1;
}