
var edad = prompt("Cual es tu edad");
var numero = Number(edad);

if(typeof numero !== Number){
    alert("No es un dato numerico")
}else{
    if(numero > 18){
        alert("Puedes manjar")
    }else{
        alert("No puedes manejar")
    }

}


