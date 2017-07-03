function Mostrar()
{
//tomo la edad  
    var mes ;
    mes = document.getElementById("mes").value ;
    switch(mes)
    {
        case "Febrero" :
            alert("Tiene 28 dias");
            break;

        case "Abril" :
        case "Junio" :
        case "Septiembre" :
        case "Noviembre" :
            alert("tiene 30 días");
            break;

        default:
            alert("tiene 31 dias");
            break;
    
    
    }



	
	



}//FIN DE LA FUNCIÓN