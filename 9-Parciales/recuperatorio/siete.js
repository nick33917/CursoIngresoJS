function Mostrar()
{
    var edad ;
    var sexo ;
    var contador_alumno = 0 ;
    var prom_edad ;
    var acum_edad = 0 ;
    var edad_minima ;
    var cont_var = 0 ;
    var flag = true ;

    while(contador_alumno<10)
    {
        edad = prompt("Ingrese la edad") ;
        edad = parseInt(edad) ;
        while(edad <0 || edad >100)
        {
            edad = prompt("Ingrese una edad valida ") ;
            edad = parseInt(edad) ;
        }

        sexo = prompt("Ingrese F o M") ;
        sexo = sexo.toLowerCase() ;
        while(sexo!="f" && sexo!="m")
        {
            sexo = prompt("Ingrese Sexo valido") ;
            sexo = sexo.toLowerCase() ;
        }

        acum_edad = acum_edad + edad ;
        contador_alumno ++ ;

        if(flag)
        {
            edad_minima = edad
            flag = false ;
        }
        else
        {
            if(edad<edad_minima)
            {
                edad_minima = edad ;
            }
        }
        
        if(edad>=20 && sexo == "m")
        {
            cont_var ++ ;
        }
        



    }
   
    prom_edad = acum_edad / contador_alumno ;
    alert("El promedio de edad es : " + prom_edad) ;
    alert("La edad mas baja es : " + edad_minima) ;
    alert("La cantidad de varones mayores o igual a 20 es :" + cont_var) ;



}
