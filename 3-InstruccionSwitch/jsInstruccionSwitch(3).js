function Mostrar()
{
//tomo la edad  
    var mes ;
    mes = document.getElementById("mes").value ;
    switch(mes)
    {
        case "Febrero" :
            alert("Este mes no tiene mas de 29 dìas");
            break;
        default :
            alert("Este mes tiene 30 o mas dìas");
            break;

    }

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN