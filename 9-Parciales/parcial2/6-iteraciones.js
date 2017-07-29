//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe ;
	var contador_dias = 0 ;
	var flag = true ;
	var mayor_importe ;
	var menor_importe ;
	while(contador_dias <7 ) 
	{
		importe = prompt("Ingrese el importe de venta") ;
		importe = parseInt(importe) ;
		while(importe <0)
		{
			importe = prompt("Ingrese un importe de ventas valido") ;
			importe = parseInt(importe) ;
		}
		contador_dias ++ ;
		if(flag)
		{
			mayor_importe = importe ;
			menor_importe = importe ;
			flag = false ;
		}
		else 
		{
			if(importe >mayor_importe)
			{
				mayor_importe = importe ;
			}
			if(importe < menor_importe)
			{
				menor_importe = importe ;
			}
		}

	}
	document.write("El mayor importe es :$" + mayor_importe + "<br>") ;
	document.write("El menor importe es :$" + menor_importe) ;


	
	
}

