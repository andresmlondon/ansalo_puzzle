var numeros = document.getElementById("numeros");
var letras = document.getElementById("letras");

function b1() {
    var aux = numeros.innerText;
    if (aux == "1,2,3,4,5,6,7,8,9,0") {
        letras.innerHTML="A";
    }else{

    }
    if (aux == '') {
        numeros.innerHTML="1";
    }
    
}

function b2() {
    var aux = numeros.innerText; // contenido del div de numeros
    var aux2 = letras.innerText; // contenido del div de letras
    if (aux2 == "A") {//valido si el div de letras ya tiene una A
        letras.innerHTML="A,B";//asigno el A,B al div de letras
        }else{ // si no tiene una A el div letras
            //valido que el div de letras este vacio y que el div de numeros este hasta el 0
        if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
            // muestro la alerta de que hace falta una letra
            alert("falta una letra");
        }
        }
    if (aux == "1") { //valido si el div numeros tiene un 1
        numeros.innerHTML="1,2"; //asigno el 1,2
    } else { //si el div numeros no tiene un 1
        if (aux == '') { //valido si esta vacio
            alert("falta un numero") //informo que falta un numero para asignar el 1,2
        }
    }    
    }
    
function b3() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText; // contenido del div de letras
    if (aux2 == "A,B") {//valido si el div de letras ya tiene A,B
        letras.innerHTML="A,B,C";//asigno el A,B,C al div de letras
        }else{ // si no tiene una A,B el div letras
            //valido que el div de letras este vacio y que el div de numeros este hasta el 0
        if (aux2 != 'A,B' && aux == "1,2,3,4,5,6,7,8,9,0") {
            // muestro la alerta de que hace falta una letra
            alert("falta una letra");
        }
        }
    if (aux == "1,2") {
        numeros.innerHTML="1,2,3";
    } else {
        if (aux != '1,2' && aux2=='') {
            alert("falta un numero")
        }
    }    
    }

function b4() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText; // contenido del div de letras
    if (aux2 == "A,B,C") {//valido si el div de letras ya tiene A,B
        letras.innerHTML="A,B,C,D";//asigno el A,B,C al div de letras
        }else{ // si no tiene una A,B el div letras
            //valido que el div de letras este vacio y que el div de numeros este hasta el 0
        if (aux2 != 'A,B,C' && aux == "1,2,3,4,5,6,7,8,9,0") {
            // muestro la alerta de que hace falta una letra
            alert("falta una letra");
        }
        }
    if (aux == "1,2,3") {
        numeros.innerHTML="1,2,3,4";
    } else {
        if (aux != '1,2,3' && aux2=='') {
            alert("falta un numero")
        }
    }    
    }

function b5() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText; // contenido del div de letras
    if (aux2 == "A,B,C,D") {//valido si el div de letras ya tiene A,B
        letras.innerHTML="A,B,C,D,E";//asigno el A,B,C al div de letras
        }else{ // si no tiene una A,B el div letras
            //valido que el div de letras este vacio y que el div de numeros este hasta el 0
        if (aux2 != 'A,B,C,D' && aux == "1,2,3,4,5,6,7,8,9,0") {
            // muestro la alerta de que hace falta una letra
            alert("falta una letra");
        }
        }
    if (aux == "1,2,3,4") {
        numeros.innerHTML="1,2,3,4,5";
    } else {
        if (aux != '1,2,3,4' && aux2=='') {
            alert("falta un numero")
        }
    }    
    }

function b6() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText; // contenido del div de letras
    if (aux2 == "A,B,C,D,E") {//valido si el div de letras ya tiene A,B
        letras.innerHTML="A,B,C,D,E,F";//asigno el A,B,C al div de letras
        }else{ // si no tiene una A,B el div letras
            //valido que el div de letras este vacio y que el div de numeros este hasta el 0
        if (aux2 != 'A,B,C,D,E' && aux == "1,2,3,4,5,6,7,8,9,0") {
            // muestro la alerta de que hace falta una letra
            alert("falta una letra");
        }
        }
        if (aux == "1,2,3,4,5") {
            numeros.innerHTML="1,2,3,4,5,6";
        } else {
            if (aux != '1,2,3,4,5' && aux2=='') {
                alert("falta un numero")
            }
        }    
        }

function b7() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText; // contenido del div de letras
    if (aux2 == "A,B,C,D,E,F") {//valido si el div de letras ya tiene A,B
        letras.innerHTML="A,B,C,D,E,F,G";//asigno el A,B,C al div de letras
        }else{ // si no tiene una A,B el div letras
            //valido que el div de letras este vacio y que el div de numeros este hasta el 0
        if (aux2 != 'A,B,C,D,E,F' && aux == "1,2,3,4,5,6,7,8,9,0") {
            // muestro la alerta de que hace falta una letra
            alert("falta una letra");
        }
        }
    if (aux == "1,2,3,4,5,6") {
        numeros.innerHTML="1,2,3,4,5,6,7";
    } else {
        if (aux != '1,2,3,4,5,6' && aux2=='') {
            alert("falta un numero")
        }
    }    
    }  

function b8() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText; // contenido del div de letras
    if (aux2 == "A,B,C,D,E,F,G") {//valido si el div de letras ya tiene A,B
        letras.innerHTML="A,B,C,D,E,F,G,H";//asigno el A,B,C al div de letras
        }else{ // si no tiene una A,B el div letras
            //valido que el div de letras este vacio y que el div de numeros este hasta el 0
        if (aux2 != 'A,B,C,D,E,F,G' && aux == "1,2,3,4,5,6,7,8,9,0") {
            // muestro la alerta de que hace falta una letra
            alert("falta una letra");
        }
        }
    if (aux == "1,2,3,4,5,6,7") {
        numeros.innerHTML="1,2,3,4,5,6,7,8";
    } else {
        if (aux != '1,2,3,4,5,6,7' && aux2=='') {
            alert("falta un numero")
        }
    }    
    }  

function b9() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText; // contenido del div de letras
    if (aux2 == "A,B,C,D,E,F,G,H") {//valido si el div de letras ya tiene A,B
        letras.innerHTML="A,B,C,D,E,F,G,H,I";//asigno el A,B,C al div de letras
        }else{ // si no tiene una A,B el div letras
            //valido que el div de letras este vacio y que el div de numeros este hasta el 0
        if (aux2 != 'A,B,C,D,E,F,G,H' && aux == "1,2,3,4,5,6,7,8,9,0") {
            // muestro la alerta de que hace falta una letra
            alert("falta una letra");
        }
        }
    if (aux == "1,2,3,4,5,6,7,8") {
        numeros.innerHTML="1,2,3,4,5,6,7,8,9";
    } else {
        if (aux != '1,2,3,4,5,6,7,8' && aux2=='') {
            alert("falta un numero")
        }
    }    
    } 

function b0() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText; // contenido del div de letras
    if (aux2 == "A,B,C,D,E,F,G,H,I") {//valido si el div de letras ya tiene A,B
        letras.innerHTML="A,B,C,D,E,F,G,H,I,J";//asigno el A,B,C al div de letras
        }else{ // si no tiene una A,B el div letras
            //valido que el div de letras este vacio y que el div de numeros este hasta el 0
        if (aux2 != 'A,B,C,D,E,F,G,H,I' && aux == "1,2,3,4,5,6,7,8,9,0") {
            // muestro la alerta de que hace falta una letra
            alert("falta una letra");
        }
        }
    if (aux == "1,2,3,4,5,6,7,8,9") {
        numeros.innerHTML="1,2,3,4,5,6,7,8,9,0";
    } else {
        if (aux != '1,2,3,4,5,6,7,8,9' && aux2=='') {
            alert("falta un numero")
        }
    }    
    }

    