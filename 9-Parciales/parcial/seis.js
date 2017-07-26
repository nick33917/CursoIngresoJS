function Mostrar()
{
    var importe_ventas ;
    var contador_dias= 0 ;
    var flag = true ;
    var mayor_importe ;
    var menor_importe ;
    
    
    while(contador_dias < 24)
    {
        importe_ventas = prompt("Ingrese otro importe de ventas") ;
        contador_dias ++ ;
        importe_ventas = parseInt(importe_ventas) ;
        
        
    while(importe_ventas <=0 )//siempre se valida con while//
    {   
        importe_ventas = prompt("Ingrese otro importe de ventas") ;
    }
   
    
    if(flag)
    {
            mayor_importe = importe_ventas ;
            menor_importe = importe_ventas ;
            flag = false ;
    }

    else
    {
            if(importe_ventas > mayor_importe)
            {
                mayor_importe = importe_ventas ;
            }
            
            if(importe_ventas < menor_importe)
            {
                menor_importe = importe_ventas ;
            }
    }

   


    }  
    

    }

    alert("El importe minimo fue : " +menor_importe+ " Y el Importe maximo fue : " + mayor_importe) ;
    
   


}
