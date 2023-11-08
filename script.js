// piedra papel o tijera del curso despertar

var numeros = prompt("Bienvenidos al juego... Ingrese piedra (1), papel (2) o tijeras (3)","");
var a = parseInt(numeros);
a = Number. isInteger(a);
console.log(a);
if (numeros > 3) {
    alert ("debes elegir un numero del 1 al 3");
} else if(a== false){
    alert ("Ingresaste un caracter incorrecto");
}
    else { 
var numeroRandomPC = Math.floor(Math.random()*3 + 1);
    console.log(numeroRandomPC);

    //piedra => 1
    //papel => 2
    //tijera => 3

    if ((numeros == 1 &&  numeroRandomPC == 3) ||
        (numeros == 2 &&  numeroRandomPC == 1) ||
        (numeros == 3 &&  numeroRandomPC == 2) 
        ){ 

                alert("¡GANASTE! 🔥");     

    } else if((numeroRandomPC == 1 &&  numeros == 3) ||
              (numeroRandomPC == 2 &&  numeros == 1) ||
              (numeroRandomPC == 3 &&  numeros == 2) ){ 

                alert("PERDISTE 😭");              

    } else if (numeros == numeroRandomPC){
                alert("¡EMPATE! 😱")   
    }
}


//codigo piedra papel o tijera sacado de internet

let puntosUsuarios =0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuarios = document.querySelector(".puntos-usuarios");
let contenedorPuntosPC = document.querySelector(".puntos-pc");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");
let elegiTuArma = document.querySelector(".elegi-tu-arma");
/* contenedorPuntosUsuarios.innerText = 1; //innertext unicamente funciona con los ID con # y clase con .
contenedorEleccionPC.innerText = "asdadsadasda"; 
contenedorEleccionUsuario.innerText = "asdadsadasda";
contenedorPuntosPC.innerText = 1;*/
//mensaje.classList.add("disabled");
//elegiTuArma.innerText = "asdadsadasda"; 

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => { 
    boton.addEventListener("click", iniciarTurno); //cada vez que tocamos un boton se inicia la funcioon del iniciar turno
});


function iniciarTurno(e) { 
    
    let eleccionPC = Math.floor(Math.random()*3);
    //console.log(eleccionPC);
    let eleccionUsuario = e.currentTarget.id;
    console.log("Elegiste: " + eleccionUsuario);

    // piedra => 0
    // papel => 1
    //tijera => 2

    if (eleccionPC ===0) { 
        eleccionPC = "Piedra 🪨";
    } else if (eleccionPC === 1) { 
        eleccionPC  = "Papel 📃";
    } else {
        eleccionPC = "Tijera ✂️";
    }
    console.log("La PC eligió: " + eleccionPC);

    if ((eleccionUsuario === "Piedra 🪨" && eleccionPC === "Tijera ✂️") ||
        (eleccionUsuario === "Papel 📃" && eleccionPC === "Piedra 🪨") ||
        (eleccionUsuario === "Tijera ✂️" && eleccionPC === "Papel 📃") 
        ){ 

                //ganaUsuario();
                //contenedorPuntosUsuarios.innerText = 1 ;
                ganaUsuario();

    } else if((eleccionPC === "Piedra 🪨" && eleccionUsuario === "Tijera ✂️") ||
        (eleccionPC === "Papel 📃" && eleccionUsuario === "Piedra 🪨") ||
        (eleccionPC === "Tijera ✂️" && eleccionUsuario === "Papel 📃") ){ 

                //console.log("Perdiste");
                //contenedorPuntosPC.innerText = 1; 
                ganaPC();              

    } else if (eleccionPC == eleccionUsuario){

                //console.log("empate");
                empate();


    }
    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

    if (puntosUsuarios === 5 || puntosPC === 5){
            if (puntosUsuarios ===5 ){
                instrucciones.innerText = "¡Ganaste el Juego!";
            }
            
            if (puntosPC ===5){

                instrucciones.innerText = "Perdiste 😭";

            }
            elegiTuArma.classList.add("disabled");
            reiniciar.classList.remove("disabled");
            reiniciar.addEventListener("click", reiniciarJuego);
    }
}


function ganaUsuario() { 
    puntosUsuarios ++;
    contenedorPuntosUsuarios.innerText = puntosUsuarios;
    contenedorGanaPunto.innerText = "Ganaste un punto! 🔥"
}

function ganaPC() { 
    puntosPC ++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "La PC ganó un punto 😭"
}

function empate() { 
    contenedorGanaPunto.innerText = "El resultado fue un empate 😱"
}

function reiniciarJuego(){ 
    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");
    puntosPC = 0;
    puntosUsuarios = 0;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorPuntosUsuarios.innerText = puntosUsuarios;
    instrucciones.innerText = "El primero en llegar a 5 puntos gana.";
}