function Mostrar()
{
    var numero = prompt("ingresar numero") ;
    var contador = 0 ;
    for(i=1;i<=numero;i++)
    {
        if(numero%i==0)
        {
            contador++ ;
        }
    }
    alert(contador) ;



}//FIN DE LA FUNCIÓN