function Mostrar()
{
	var numero ;
	var contador=0 ;
	var respuesta = true ;
	var nummaximo  ;//no agregarle valor //
	var numminimo  ;//no agregarle valor sino da 0//
	var primera = true ;//se llama bandera//
	

while(respuesta == true)  //Podria ir while(respuesta.tolowerCASE() == "si")
	{
		
		numero = prompt("ingrese un numero") ;
		
		if(primera)
		{
			nummaximo = numero ;
			numminimo = numero ;
			primera = false ;
		}
		else if(numero < numminimo)
		{
			minnumero = numero ;
		}
		else if(numero > nummaximo)
		{
			nummaximo = numero ;
		}

		
		respuesta = confirm("Desea continuar") ;
	
	}

	document.getElementById("maximo").value = nummaximo ;
	document.getElementById("minimo").value = numminimo ;




}//FIN DE LA FUNCIÓN