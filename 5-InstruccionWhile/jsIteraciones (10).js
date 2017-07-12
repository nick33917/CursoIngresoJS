function Mostrar()
{
	var numero ; 
	var respuesta = true ;
	var acumulador_negativo = 0 ;
	var acumulador_positivo = 0 ;
	var contador_positivo = 0 ;
	var contador_negativo = 0 ;
	var contador_cero = 0 ;
	var contador_pares = 0 ;
	var prom_positivo = 0 ;
	var prom_negativo = 0 ;
	var dif_positivo_negativo = 0 ;
	while(respuesta==true)
	{
		numero = prompt("Ingrese un numero") ;
		numero = parseInt(numero) ;

		if(numero<0)
		{
			acumulador_negativo = numero + acumulador_negativo ;
			contador_negativo = contador_negativo +1 ;
		}

		else if(numero>0)
		{
			acumulador_positivo = numero + acumulador_positivo ;
			contador_positivo = contador_positivo +1 ;
		}

		else
		{
			contador_cero = contador_cero +1 ;

		}


		respuesta = confirm("¿Quiere seguir ingresando un numero?")

		

	}
	prom_positivo = acumulador_positivo / contador_positivo ;
	prom_negativo = acumulador_negativo / contador_negativo ;
	
	dif_positivo_negativo = acumulador_positivo - acumulador_negativo ;



		
	
}




}//FIN DE LA FUNCIÓN