/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numSecreto ;
var contador = 0 ;
var numerousuario ;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
    numSecreto = Math.floor(Math.random()*(101-1))+1 ;
   //para saber el numero y no ponerse a buscarlo//
    console.log(numSecreto) ;
    
	 
	
	

}

function verificar()
{
	  
    contador = contador + 1 ;
    numerousuario = document.getElementById("numero").value ;
    if(numSecreto == numerousuario)
    {
       alert("Gano en " + contador + " intentos") ;
    //para que el contador se ponga en 0 despues de ganar//      
       contador = 0 ;
       

    } 
   else if (numerousuario <numSecreto)
   {
      alert("falta...") ;
   }
   else
   {
     alert("Se paso") ;
   }
   
        

   }
	