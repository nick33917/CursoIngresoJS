function Mostrar()
{
    var numero_1;
    var numero_2 ;
    var resultado_mult=0 ;
    var resultado_resta= 0 ;
    var resultado_suma  =0;
    
    numero_1 = prompt("Ingrese 1 numero") ;
    numero_1 = parseInt(numero_1) ;
    numero_2 = prompt("ingrese 1 numero") ;
    numero_2 = parseInt(numero_2) ;

    if(numero_1 == numero_2)
    {
        resultado_mult = numero_1 * numero_2 ;

    }
    else if(numero_1 > numero_2)
    {
        resultado_resta = numero_1 - numero_2 ;
    }
    else 
    {
        resultado_suma = numero_1 + numero_2 ;
    }

    document.write("Los numeros son iguales asi que se van a multiplicar y el resultado da :" + resultado_mult + "<br>") ;
    document.write("El primer numero es mayor que el segundo numero , se van a restar y da como resultado :"+ resultado_resta+ "<br>") ;
    document.write("El primer numero es menor o igual al segundo numero asi que se van a sumar y da como resultado :" + resultado_suma ) ;  
    

}
