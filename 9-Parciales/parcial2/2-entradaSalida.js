//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var producto ;
	var importe_final ;
	producto = prompt("Ingrese el importe de un producto") ;
	producto=parseInt(producto) ;
	importe_final = producto * 1.21 ;
	document.getElementById("importe").value = importe_final ;

	
	
}

