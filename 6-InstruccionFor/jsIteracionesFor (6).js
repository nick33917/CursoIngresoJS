function Mostrar()
{
    var numero = prompt("Ingresar numero") ;
    var contador_pares =0 ;
    for(i=1;i<=numero ;i++)
    {
        if(i%2==0)
        {
            contador_pares ++ ;
        }
    }
    alert(contador_pares) ;




}//FIN DE LA FUNCIÓN