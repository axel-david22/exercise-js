var calificacion = Number(prompt("Escribe tu calificacion")) 
console.log(calificacion)
if(  calificacion !== NaN || calificacion > 10){

    alert("nota invalida")
    console.log("hola")
}else{

    switch(calificacion){
        case 0:
        case 1:
        case 2:
        case 3:
            alert("Muy deficiente") 
            break;
        case 4:
        case 5:
                alert("Insuficiente")
                break;
        
        case 6:
        case 7:
            alert("bien")
            break;
        case 8:
        case 9:
            alert("notable")
            break;
        case 10:
            alert("Sobresaliente")
            break;
    
    }
}