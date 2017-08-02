function Mostrar()
{   
    var numero ;
    var respuesta = true ;
    var promedio ;
    var flag = true ;
    var cont_num = 0 ;
    var cont_pares = 0 ;
    var acum_num = 0 ;
    var num_max ;
    var num_min ;
    
    while(respuesta)
    {
        numero = prompt("Ingrese un numero") ;
        numero = parseInt(numero) ;
        while(numero<=0)
        {
            numero = prompt("Ingrese un numero positivo") ;
            numero = parseInt(numero) ;
        }
        acum_num = acum_num + numero ;
        cont_num ++ ;

        if(numero%2==0)
        {
            cont_pares ++ ;
        }
        
        if(flag)
        {
            num_max = numero ;
            num_min = numero ;
            flag = false ;
        }
        else
        {
            if(numero<num_min)
            {
                num_min = numero ;
            }
            if(numero>num_max)
            {
                num_max = numero ;
            }
        }
        
        respuesta = confirm("¿Desea seguir ingresando numeros?") ;
    }

    promedio = acum_num / cont_num ;
    document.write("La cantidad de numeros pares es :" + cont_pares + "</br>") ;
    document.write("El promedio de los numeros ingresados es :" + promedio + "</br>") ;
    document.write("La suma de los numeros ingresados es :" + acum_num + "</br>") ;
    document.write("El numero maximo es :" + num_max + " y el numero minimo es: " + num_min) ;


    

}
