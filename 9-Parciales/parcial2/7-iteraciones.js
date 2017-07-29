//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota ;
	var sexo ;
	var contador_alumno = 0 ;
	var promedio ;
	var nota_baja ;
	var contador_varones = 0 ;
	var acumulador_nota = 0 ;
	var flag = true ;
	while(contador_alumno <6)
	{
		nota = prompt("Ingrese una nota") ;
		nota = parseInt(nota) ;
		sexo = prompt("Ingrese el F o M") ;
		sexo = sexo.toLowerCase() ;
		while(nota <0 || nota >10)
		{
			nota = prompt("Ingrese una nota valida") ;
			nota = parseInt(nota) ;
		}
		while(sexo!="f" && sexo!="m")
		{
			sexo = prompt("Ingrese un sexo valido") ;
			sexo = sexo.toLowerCase() ;
			
		}
		
		acumulador_nota = acumulador_nota + nota ;
		contador_alumno ++ ;

		if(flag)
		{
			nota_baja = nota ;
			flag = false ;
		}
		else 
		{
			if(nota < nota_baja)
			{
				nota_baja = nota ;
			}
		}
		if(sexo == "m" && nota >=6)
		{
			contador_varones ++ ;
		}



	}
	
	promedio = acumulador_nota / contador_alumno ;
	alert("El promedio de las notas totales es : " + promedio) ;
	alert("La nota mas baja es :" + nota_baja) ;
	alert("La cantidad de varones que su nota haya sido mayor o igual a 6 :" + contador_varones) ;

	
}

