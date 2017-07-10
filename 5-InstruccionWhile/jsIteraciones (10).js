function Mostrar()
{
	var numero ;
	var respuesta = true ;
	var acumuladorNegativo = 0 ;
	var acumuladorPositivo = 0 ;
	var contador = 0 ;
	
	

while(respuesta == true)  //Podria ir while(respuesta.tolowerCASE() == "si")
	{
		contador = contador +1 ;
		numero = prompt("ingrese un numero") ;
		numero = parseInt(numero) ;
	if(numero <0)
		{
			acumuladorNegativo = acumuladorNegativo + numero ;

		}
	else
		{
			acumuladorPositivo = acumuladorPositivo + numero ;
		}
		
		acumuladorPositivo = acumuladorPositivo + contador ;
		acumuladorNegativo = acumuladorNegativo 

	} 

	respuesta = confirm("Desea continuar") ;
		

	
	




}//FIN DE LA FUNCIÓN