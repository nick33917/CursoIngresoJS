function Mostrar()
{
    var largo_terreno ;
    var ancho_terreno ;
    var resultado ;
    largo_terreno = document.getElementById("alrgo").value ;
    ancho_terreno = document.getElementById("ancho").value ;
    largo_terreno = parseInt(largo_terreno) ;
    ancho_terreno = parseInt(ancho_terreno) ;
    resultado = (largo_terreno * 2 + ancho_terreno * 2) * 3 ;
    alert("Se necesitan : " + resultado + " hilos de alambre") ;


}
