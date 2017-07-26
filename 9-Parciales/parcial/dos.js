function Mostrar()
{
    var importe_producto ;
    var importe_final ;
    importe_producto = prompt("Ingrese el valor del producto") ;
    importe_producto = parseInt(importe_producto) ;
    importe_final = importe_producto * 1.21 ;
    document.getElementById("importeFinal").value = importe_final ;
  
}
