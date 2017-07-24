function Mostrar()
{
    var contador = 0 ;
    for(numero=prompt("ingrese un numero") ; numero>0 ;)
    {
        contador++ ;
        alert(numero) ;
        console.log(contador) ;
        if(contador>=1000000 )
        {
            break;
        }
    }



}//FIN DE LA FUNCIÓN