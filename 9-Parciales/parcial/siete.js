function Mostrar()
{
    var notas ;
    var sexo ;
    var contador_alumnos = 0 ;
    var acumulador_notas = 0 ;
    var nota_min = 0 ;
    var promedio ;
    var flag = true ;
    var contador_varones =0 ;
    

    while(contador_alumnos <5)
    {
       contador_alumnos ++ ;
       notas = prompt("Ingrese una nota") ;
       notas = parseInt(notas) ;
       acumulador_notas = acumulador_notas + notas ;
       sexo = prompt("ingrese el sexo") ;
       sexo = sexo.toLowerCase() ;
       
        while(notas<0 || notas>10)
        {
            notas = prompt("Ingrese otra nota") ;
        }
        
        while(sexo != "f" && sexo!="m")
        {
            sexo = prompt("ingrese el sexo") ;
        }
        
        if(flag)
        {
            nota_min = notas ;
            flag = false ;
        }
        else
        {
            if(notas < nota_min)
            {
                nota_min = notas ;
            }
            
        }
        if(sexo=="m" && notas >=6)
        {
            contador_varones ++ ;
        }

        
        


    }
    promedio= acumulador_notas / contador_alumnos ;
    alert("El promedio de las notas totales es : "+ promedio) ;
    alert("La nota mas baja es : "+ nota_min) ;
    alert("La cantidad de varones que su nota fue mayor o igual a 6 es : " + contador_varones) ;



}
