//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo ;
	var ancho ;
	var resultado ;
	largo = document.getElementById("largo").value ;
	ancho = document.getElementById("ancho").value ;
	largo = parseInt(largo) ;
	ancho = parseInt (ancho) ;
	resultado = (ancho * 2 + largo * 2) * 6 ;
	alert("La cantidad de alambre que se necesita es : " + resultado + " metros ") ; 

	
	
}

