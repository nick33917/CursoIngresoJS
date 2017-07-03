function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota ;
	nota = parseInt(Math.random ()* (10-1 )) + 1 ;
	if (nota>=9)
	{
		alert("EXCELENTE " + nota) ;
	}
	else
	{

	if (nota>=4)
	{
		alert("APROBÒ "+ nota) ;
	}
	else
	{
		alert("Vamos la proxima se puede "+ nota);
	}

	}


	

}//FIN DE LA FUNCIÓN