function Mostrar()
{

	var contador=0;
	var acumuladorpositivo=0;
	var acumuladornegativo=1;//tiene que estar en 1 xq es para multiplicar xq sino siempre es 0 si tiene el valor 0 //
	var numero ;
	var respuesta= true ;
while(respuesta == true)//se podria poner while(confirm("..."))
	{
		numero = prompt("ingrese un numero") ;
		numero = parseInt(numero) ;
	while(isNaN(numero))
			{
				numero = prompt("ingrese un numero") ;
				numero = parseInt(numero) ;
			}
	if(numero>=0)
		{	
			acumuladorpositivo = acumuladorpositivo + numero ;

		}
	else
		{
			acumuladornegativo = acumuladornegativo * numero ; 
		}
		
	respuesta = confirm("Desea continuar") ;
	}

document.getElementById('suma').value = acumuladorpositivo;
document.getElementById('producto').value = acumuladornegativo;
 
}//FIN DE LA FUNCIÓN