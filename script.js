
function encriptador() { //encriptacion de texto
    var cadena = document.querySelector("#texto").value.toLowerCase();

    var textoEncriptado = cadena.replace(/e/img, "enter").replace(/o/img, "ober").replace(/i/img, "imes")
    .replace(/a/img, "ai").replace(/u/img, "ufat")
    document.querySelector("#texto-encriptado").value = textoEncriptado;
    document.querySelector("#texto").value;
}
document.querySelector("#encriptar").onclick = encriptador;

function desencriptador() { //desencripta el texto
    var cadena = document.querySelector("#texto").value;

    var textoDesencriptado = cadena.replace(/enter/img, "e").replace(/ober/img, "o").replace(/imes/img, "i")
    .replace(/ai/img, "a").replace(/ufat/img, "u");
    document.querySelector("#texto-encriptado").value = textoDesencriptado;
    document.querySelector("#texto").value;
}
var btmDesncriptar = document.querySelector("#desencriptar");
btmDesncriptar.onclick = desencriptador;


function ocultarMuñeco() { //ocultar la imagen para la salida del texto encriptado
    var ocultar = document.querySelector(".no-mostrar");
    if (ocultar.style.display === "none") {
        ocultar.style.display = "none";
    }
    else {
        ocultar.style.display = "none";
    }

}
document.querySelector('#texto').onclick = ocultarMuñeco;


function sinCaracterEspecial(string){ //denegar la entrada de caracteres especiales
    var salida = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890 ';
	
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
	     salida += string.charAt(i);
    return salida;
}


document.getElementById("copy").onclick = function() { //Copiar el texto 
    var text = document.getElementById("texto-encriptado").value;
 
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });

    if (screen < 940){
        ocultarMuñeco
    }  
}

var typed = new Typed('.typed', { //descripcion estilo maquina de escribir
	strings: [
	'Encriptador de texto desarrollado para el reto Challenge_1 alura latam'
    ],
	typeSpeed: 45,
	startDelay: 300,
	backSpeed: 15, 
	smartBackspace: true, 
	shuffle: false,
	backDelay: 1500,
	loop: true, 
	loopCount: false,
	showCursor: true,
	cursorChar: '|', 
	contentType: 'html',
}
);
