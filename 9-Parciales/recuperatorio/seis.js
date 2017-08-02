function Mostrar()
{
    var peso_kilo ;
    var cont_contenedor = 0 ;
    var peso_maximo ;
    var peso_minimo ;
    var flag = true ;

    while(cont_contenedor<10)
    {
        peso_kilo = prompt("Ingrese el peso del contenedor" ) ;
        peso_kilo = parseInt(peso_kilo) ;
            
        while(peso_kilo<=0)
        {
            peso_kilo = prompt("Ingrese el peso del contenedor que sea mayor a 0") ;
            peso_kilo = parseInt(peso_kilo) ;
        }
       
        cont_contenedor ++ ;

        if(flag)
        {
            peso_maximo = peso_kilo ;
            peso_minimo = peso_kilo ;
            flag = false ;
        }
        else
        {
            if(peso_kilo>peso_maximo)
            {
                peso_maximo = peso_kilo ;
            }
            if(peso_kilo<peso_minimo)
            {
                peso_minimo = peso_kilo ;
            }
        }

    }

    document.write("El contenedor mas pesado , pesa :" + peso_maximo + " kilos <br>" ) ;
    document.write("El contenedor menos pesado , pesa :" + peso_minimo+ " kilos" ) ;
            

}
