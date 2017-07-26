function Mostrar()
{   
    var dia;
    dia = prompt("Ingrese un dia de la semana ");
    dia = dia.toLowerCase() ;
    switch(dia)
    {
        case "lunes" :
        case "martes" :
        case "miercoles" :
        case "jueves" :
        case "viernes" :
            alert("A trabajar !!!");
            break;
        case "sabado" :
        case "domingo" : 
            alert("Es fin de semana") ; 
            break;
        
    }

}
