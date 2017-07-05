/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
    var largoterreno ;
    var anchoterreno ;
    var radio ;
    var resultado;


function Rectangulo () 
{
    largoterreno = document.getElementById("Largo").value ; 
    anchoterreno = document.getElementById("Ancho").value ;
    resultado = ((parseInt(largoterreno)*2 + parseInt(anchoterreno)*2) * 3) ;
    alert("La cantidad de alambre a comprar es : " + resultado);

}
function Circulo () 
{
    radio = document.getElementById("Radio") .value ;
    radio = parseInt(radio)
    resultado = (Math.PI * radio * radio) * 3  ; 
    alert("La cantidad de alambre es : "+ resultado) ;   
	
}
function Materiales () 
{
    largoterreno = document.getElementById("Largo").value ; 
    anchoterreno = document.getElementById("Ancho").value ;
    largoterreno = parseInt(largoterreno) ;
    anchoterreno = parseInt(anchoterreno) ;

//saco el area del rectangulo y los multiplico por la cantidad //
    var bolsascal  ;
    var bolsascemento ;
    bolsascal = (largoterreno)*(anchoterreno) * 3 ;
    bolsascemento = (largoterreno)*(anchoterreno) * 2 ;
    alert("Se requieren " + bolsascemento + " bolsas de cemento y " + bolsascal + " de cal. ") ;



    
	
}