function Mostrar()
{
    var mes ;
    mes = prompt("Ingrese un mes del año") ;
    mes = mes.toLowerCase() ;
    
    switch(mes)
    {
        case "enero" :
            alert("Comienza el año") ;
            break;
        case "diciembre" :
            alert("Se vienen las fiestas") ;
            break;
        default :
            alert("No es enero , ni diciembre") ;    

    }

}
