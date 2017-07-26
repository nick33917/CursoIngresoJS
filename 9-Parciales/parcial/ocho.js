function Mostrar()
{
    var numero ;
    var respuesta = true ;
    var contador_pares = 0 ;
    var promedio ;
    var acumulador_num = 0 ;
    var num_min ;
    var num_max ;
    var flag = true ;
    var contador = 0 ;
    
    while(respuesta==true)
    {
        numero=prompt("Ingrese un numero") ;
        numero=parseInt(numero) ;
        acumulador_num = acumulador_num + numero ;
        contador ++ ;
        
        
        while(numero<0)
        {
            numero=prompt("Ingrese un numero valido") ;

        }
        if(numero%2 ==0)
        {
            contador_pares ++ ;
        }
        if(flag)
        {
            num_max = numero ;
            num_min = numero ;
            flag = false ;   
           
        }
        else
        {
            if(numero>num_max)
            {
                num_max = numero ;
            }
            if(numero<num_min)
            {
                num_min = numero ;
            }
        }

        respuesta = confirm("¿Quiere seguir ingresando numeros?")
    }
    
    promedio = acumulador_num / contador ;
    document.write("La cantidad de numeros pares es : "+ contador_pares + "<br>") ;
    document.write("El promedio de todos los numeros ingresados es : "+ promedio + "<br>" ) ;
    document.write("La suma de todos los numeros es : " +acumulador_num + "<br>") ;
    document.write("El numero maximo es : "+ num_max + "<br>") ;
    document.write("El numero minimo es :"+num_min + "<br>") ;


}
