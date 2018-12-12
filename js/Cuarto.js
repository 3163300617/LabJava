var namber=prompt("Ingrese el numero que quiere sumar");
var total=0;
namber.split('').forEach(namber=>total+=parseInt(namber));
document.write("La suma de los numeros que ingreso es:  "+ "<br>" +total);