function Mostrar()
{
//tomo la edad
    var mes ;
    mes = document.getElementById("mes").value ;
    switch(mes)
    {
        case "Julio" :
        case "Agosto" :
             alert("Abrigate que hace frio");
             break;
        case "Enero" :
        case "Febrero" :
        case "Marzo" :
        case "Abril" :
        case "Mayo" :
        case "Junio":
            alert("Falta para el invierno");
            break;
        default :
            alert("Ya pasamos el frio") ;

        

        

    }







}//FIN DE LA FUNCIÓN