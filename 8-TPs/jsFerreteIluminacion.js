/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
    
function CalcularPrecio () 
{   
    var lamparas = 35 ;
    var cantidad_lamparas ;
    var precio_descuento ;
    var marca ;
    var ingresos_brutos = 0 ;
    marca = document.getElementById("Marca").value ;
    cantidad_lamparas = document.getElementById("Cantidad").value ;
    cantidad_lamparas = parseInt(cantidad_lamparas) ;
        if(cantidad_lamparas>=6)
        {
            precio_descuento = (lamparas * cantidad_lamparas) * 0.50 ;
            document.getElementById("precioDescuento").value = precio_descuento ;
        }
        else if(cantidad_lamparas==5)
        {
            if(marca=="ArgentinaLuz")
            {
                precio_descuento = (lamparas * cantidad_lamparas) * 0.60 ;
                document.getElementById("precioDescuento").value = precio_descuento ;
            }
            else 
            {
                precio_descuento = (lamparas * cantidad_lamparas) * 0.70 ;
                document.getElementById("precioDescuento").value = precio_descuento ;
            }
        }
        else if(cantidad_lamparas==4)
        {
            if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
            {
                precio_descuento = (lamparas * cantidad_lamparas) * 0.75 ;
                document.getElementById("precioDescuento").value = precio_descuento ;
            }
            else
            {
                precio_descuento = (lamparas * cantidad_lamparas) * 0.80 ;
                document.getElementById("precioDescuento").value = precio_descuento ;
            }
        }
        else if(cantidad_lamparas==3)
        {
            if(marca=="ArgentinaLuz")
            {
                precio_descuento = (lamparas * cantidad_lamparas) * 0.85 ;
                document.getElementById("precioDescuento").value = precio_descuento ;
            }
            else if(marca=="FelipeLamparas")
            {
                precio_descuento = (lamparas * cantidad_lamparas) * 0.90 ;
                document.getElementById("precioDescuento").value = precio_descuento ;
            }
            else
            {
                precio_descuento = (lamparas * cantidad_lamparas) * 0.95 ;
                document.getElementById("precioDescuento").value = precio_descuento ;
            }
        }
        else
        {
                precio_descuento = (lamparas * cantidad_lamparas) ;
                document.getElementById("precioDescuento").value = precio_descuento ;
        }
// no esta correjido//
       if (precio_descuento >120)
        {
                ingresos_brutos = (precio_descuento /100 *10)
                alert("Usted pagó de Ingresos brutos $" +  ingresos_brutos + " , siendo  $" + precio_descuento + " El impuesto que se pagó.") ;
        }



 	
}
