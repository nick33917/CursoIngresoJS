function Mostrar()
{
    var numero1 ;
    var numero2;
    var suma ;
    
    numero1 = prompt("Ingrese el primer numero") ;
    numero2 = prompt("Ingrese el segundo numero") ;
    numero1 = parseInt(numero1) ;
    numero2 = parseInt(numero2) ;
    suma = numero1 + numero2 ;

    if(suma>0)
    {
        document.write("El resultado de la suma es positivo") ;
    }
        else if(suma<0)
        {
            document.write("El resultado de la suma es negativo") ;
        }
            else
            {
                document.write("El resultado de la suma es cero") ;
            }

}
