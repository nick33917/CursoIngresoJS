//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero ;
	var respuesta = true ;
	var flag = true ;
	var maximo  ;
	var minimo ;
	var acum_suma = 0 ;
	var promedio ;
	var contador_pares = 0 ;
	var contador_numero = 0 ;
	while(respuesta==true)
	{
		numero = prompt("Ingrese numeros positivos");
		numero = parseInt(numero) ;
		while(numero<0)
		{
			numero = prompt("Ingrese un numero valido");
			numero = parseInt(numero) ;
		}
		acum_suma = acum_suma + numero ;
		contador_numero ++ ;

		if(numero%2==0)
		{
			contador_pares ++ ;
		}
		if(flag)
		{
			minimo = numero ;
			maximo = numero ;
			flag = false ;
		}
		else
		{
			if(numero>maximo)
			{
				maximo = numero ;
			}
			if(numero<minimo)
			{
				minimo = numero ;
			}
		}




		respuesta = confirm("¿Quiere seguir Ingresando numeros positivos?")	;
	}

	promedio = acum_suma / contador_numero ;
	document.write("La cantidad de numeros pares es :" + contador_pares + "<br>") ;
	document.write("El promedio de todos los numeros ingresados es :" +promedio + "<br>") ;
	document.write("La suma de todos los numeros :" + acum_suma + "<br>") ;
	document.write("El numero maximo es : " + maximo + "<br>") ;
	document.write("El numero minimo es : " + minimo ) ;
	
	
	
}

