/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
    
}    

function NumerosPares()
{
    var numero= document.getElementById("numero").value ;
    var contador_pares = 0 ;
     if(numero<0)
    {
        alert("Ingrese un numero positivo") ;
    }
    else
    {

        for(i=1 ;i <=numero ; i++)
        {
        if(i%2==0)
        {
            contador_pares ++ ;
        }

        }
    
    alert(contador_pares) ;
    }

}
function NumerosImpares()
{
    var numero= document.getElementById("numero").value ;
    var contador_impar = 0 ;
     if(numero<0)
    {
        alert("Ingrese un numero positivo") ;
    }
    else
    {

        for(i=1 ;i <=numero ; i++)
        {
        if(i%2!=0)
        {
            contador_impar ++ ;
        }

        }
    
    alert(contador_impar) ;
    }
}
function NumerosDivisibles()
{
    var numero= document.getElementById("numero").value ;
    var contador_divisibles = 0 ;
     if(numero<0)
    {
        alert("Ingrese un numero positivo") ;
    }
    else
    {

        for(i=0 ;i <=numero ; i++)
        {
        if(i%2!=0)
        {
            contador_divisibles ++ ;
        }

        }
    
    alert(contador_divisibles) ;
    }



}
function VerificarPrimo()
{



}
function NumerosPrimos()
{



}