function Mostrar()
{
    var numero = prompt("Ingresar un numero") ;
    var primo = true ;
    for(i=2 ; i<numero ; i++)
    {
        if(numero%i==0)
        {
            primo=false ;
            break ;     
        }
    }
    if(!primo)
    {
        alert("no es primo") ;
    }
    else
    {
        alert("es primo") ;
    }



}//FIN DE LA FUNCIÓN