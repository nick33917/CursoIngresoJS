function Mostrar()
{
	var numero ; 
	var respuesta = true ; 
	var acumulador_negativo = 0 ;    //suma de negativos//	
	var acumulador_positivo = 0 ;   //suma de positivos//
	var contador_positivo = 0 ;     //cantidad de positivos // //se pueden crear los 2 contadores juntos con una "," en el medio//
	var contador_negativo = 0 ;    //cantidad de negativos //
	var contador_cero = 0 ;         //cantidad de ceros//
	var contador_pares = 0 ;        //cantidad de numeros pares//
	var prom_positivo = 0 ;       //promedio de positivos//
	var prom_negativo = 0 ;       //promedio de negativos//
	var dif_positivo_negativo = 0 ;  //diferencia entre positivos y negativos ///
	while(respuesta==true)
	{
		numero = prompt("Ingrese un numero") ;
		numero = parseInt(numero) ;
// no lo pide pero se podria validad si es un numero con IS NAN // 
	  	if(numero<0)
		{
			acumulador_negativo = acumulador_negativo + numero ;
			contador_negativo = contador_negativo +1 ;
		}

		else if(numero>0)
		{
			acumulador_positivo = acumulador_positivo + numero ;
			contador_positivo = contador_positivo +1 ;
		}

		else
		{
			contador_cero = contador_cero +1 ;

		}
//el resto de la division siempre tiene que ser 0 para que sea pares //
		if(numero%2 == 0)
		{
			contador_pares = contador_pares +1 ;
		}
		respuesta = confirm("¿Quiere seguir ingresando un numero?")

		

	}
//los calculos van afuera del while //
	prom_positivo = acumulador_positivo / contador_positivo ;
		if(contador_negativo >0)
		{
			prom_negativo = acumulador_negativo / contador_negativo ;
		}
		else
		{
			prom_negativo = ("No hay numeros negativos") ;

		}
// diferencia entre cantidad por eso va contador//
//si la resta da negativo , siempre tiene que dar positivo hay que hacer un if para que de positivo//	
	dif_positivo_negativo = contador_negativo - contador_positivo ;
	 	if(dif_positivo_negativo < 0 )
		 {
			 dif_positivo_negativo = dif_positivo_negativo * -1 ;
		 }
//"<br>" se pòne para que baje de linea y no se vea todo junto//	
	 document.write(" La suma de los negativos es: " + acumulador_negativo + "<br>") ;	
	 document.write(" La suma de los positivos es: " + acumulador_positivo + "<br>") ;	
	 document.write(" La cantidad de positivos es: " + contador_positivo + "<br>" ) ;	  
	 document.write(" La cantidad de negativos es: " + contador_negativo + "<br>") ;	 
	 document.write(" La cantidad de ceros es: " + contador_cero + "<br>") ;	 
	 document.write(" La cantidad de numeros pares es: " + contador_pares + "<br>") ;	 
	 document.write(" El promedio de los positivos es: " + prom_positivo + "<br>") ;	
	 document.write(" El promedio de los negativos es: " + prom_negativo + "<br>") ;
	 document.write(" La diferencia entre positivos y negativos es: " + dif_positivo_negativo) ;






		
	





}//FIN DE LA FUNCIÓN