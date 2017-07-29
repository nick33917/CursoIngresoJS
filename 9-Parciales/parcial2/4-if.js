//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero_uno ;
	var numero_dos ;
	var resultado_suma ;
	var resultado_resta ;
	var resultado_multip ;
	numero_uno = prompt("Ingrese el primer numero") ;
	numero_dos = prompt("Ingrese el segundo numero") ;
	if(numero_uno == numero_dos)
	{
		resultado_multip = numero_uno * numero_dos ;
		document.write("El resultado de la multiplicacion es :" + resultado_multip ) ;
	}
	else if (numero_uno > numero_dos)
	{
		resultado_resta = numero_uno - numero_dos ;
		document.write("El resultado de la resta es :" + resultado_resta ) ;
	}
	else
	{
		resultado_suma = numero_uno + numero_dos ;
		document.write("El resultado de la suma es :" + resultado_suma ) ;
	}

	
	//se podria poner una variable sola que se llame resultado y la muestro afuera con document write//
	
}

