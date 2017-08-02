function Mostrar()
{
    var importe ;
    var precio_final ;
    importe = prompt("Ingrese el importe de un producto") ;
    importe = parseInt(importe) ;
    precio_final = importe *0.75 ;
    document.getElementById("importeFinal").value = precio_final ;
  
}
