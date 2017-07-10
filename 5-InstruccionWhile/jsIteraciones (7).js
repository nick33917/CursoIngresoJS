function Mostrar()
{
	var numero ;
	var contador=0;
	var acumulador=0;
	var respuesta = true;
while(respuesta == true)//se podria poner while(confirm("..."))
	{
		contador = contador +1 ;
		numero = prompt("ingrese un numero") ;
		numero = parseInt(numero) ;
		
//esto es para validar nada mas//		
		while(isNaN(numero))
			{
				numero = prompt("ingrese un numero") ;
				numero = parseInt(numero) ;
			}
		acumulador = acumulador + numero ;
		respuesta = confirm("Desea continuar") ;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN