import { example } from './example.js';

example();

//var provider = new firebase.auth.GoogleAuthProvider();

function formulario () {
    var padre = document.getElementById("padre");
    var input = document.createElement("INPUT");
    input.type = 'text';
    padre.appendChild(input);
}
document.getElementById('botonregistrarse').addEventListener('click', formulario);
 