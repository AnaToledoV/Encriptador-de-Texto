function iniciarPagina() {
    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("contenedor").style.display = "block";
} 

function tieneMayusculasOAcentos(texto) {
    return /[A-ZÁÉÍÓÚÜÑáéíóúüñ]/.test(texto);
}

function encriptar() {
    let salidaTitulo = document.getElementById("salida-titulo"); 
    let salidaParrafo = document.getElementById("salida-parrafo");
    let entradaTexto = document.getElementById("entrada-texto").value;
    let botonCopiar = document.getElementById("boton-copiar"); 
    botonCopiar.style.display = 'none';
    let loaderDos = document.getElementById("loader-dos"); 
    loaderDos.style.display ='none';
    if (tieneMayusculasOAcentos(entradaTexto)) {
        loaderDos.style.display = 'block';
        document.getElementById("salida-titulo").textContent = "ERROR";
        document.getElementById("salida-parrafo").textContent = "El texto contiene mayúsculas o tildes";
        document.getElementById("entrada-texto").value = "";
        return;
    }
    let textoEncriptado = entradaTexto 
                            .replace(/a/gi, "#a#")
                            .replace(/e/gi, "#e#")
                            .replace(/i/gi, "#i#")
                            .replace(/o/gi, "#o#")
                            .replace(/u/gi, "#u#")
                            .replace(/#a#/g, "ai")
                            .replace(/#e#/g, "enter")
                            .replace(/#i#/g, "imes")
                            .replace(/#o#/g, "ober")
                            .replace(/#u#/g, "ufat"); 
if (entradaTexto.length != 0 ) { 
    salidaParrafo.textContent = textoEncriptado;
    salidaTitulo.textContent = "Resultado:";
    botonCopiar.style.display = 'block'; 
    document.getElementById("entrada-texto").value = ""; 
} else { 
    salidaTitulo.textContent = "Recuerda ingresar un texto";
    salidaParrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
    document.getElementById("salida-texto").value = ""; 
}
}

function desencriptar() {
    let salidaTitulo = document.getElementById("salida-titulo"); 
    let salidaParrafo = document.getElementById("salida-parrafo");
    let entradaTexto = document.getElementById("entrada-texto").value;
    let botonCopiar = document.getElementById("boton-copiar");
    botonCopiar.style.display = 'none';
    let loaderDos = document.getElementById("loader-dos"); 
    loaderDos.style.display ='none';
    if (tieneMayusculasOAcentos(entradaTexto)) {
        loaderDos.style.display = 'block'
        document.getElementById("salida-titulo").textContent = "ERROR";
        document.getElementById("salida-parrafo").textContent = "El texto contiene mayúsculas o tildes";
        document.getElementById("entrada-texto").value = "";
        return;
    }
    let textoDesncriptado = entradaTexto
                            .replace(/ai/g, "#a#")
                            .replace(/enter/g, "#e#")
                            .replace(/imes/g, "#i#")
                            .replace(/ober/g, "#o#")
                            .replace(/ufat/g, "#u#")
                            .replace(/#a#/gi, "a")
                            .replace(/#e#/gi, "e")
                            .replace(/#i#/gi, "i")
                            .replace(/#o#/gi, "o")
                            .replace(/#u#/gi, "u");
if (document.getElementById("entrada-texto").value.length != 0 ) {
    salidaParrafo.textContent = textoDesncriptado; 
    salidaTitulo.textContent = "Resultado:";
    botonCopiar.style.display = 'block'; 
    document.getElementById("entrada-texto").value = "";  
} else { 
    salidaTitulo.textContent = "Recuerda ingresar un texto";
    salidaParrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
    document.getElementById("salida-texto").value = ""; 
} 
} 

function copiar() {
    let salidaParrafo = document.getElementById("salida-parrafo"); 
    let range = document.createRange();
    range.selectNodeContents(salidaParrafo);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    alert("Texto copiado: " + salidaParrafo.textContent); 
} 


