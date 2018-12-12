var cedula=prompt("numero de Cedula");
var nombre=prompt("Nombre del vendedor");
var salario=prompt("Valor deL sueldo mensual");
var laborados=prompt("Dias Laborados");
var ventas=prompt("Valor de sus ventas")
var prestamos=prompt("Prestamos dilingenciados");

if(prestamos>0){
    var prestamos=prompt("Ingrese el valor del prestamo")
    }
    else if(prestamos<=0){
    
    }

if(salario<=1562484){
    var trabajo=(salario*laborados)/30;
    var comision=ventas*0.2;
    var auxilio=(88211*laborados)/30;
    var comision=ventas*0.2;
    var deuda=prestamos;
   var total =(trabajo+comision+auxilio)-prestamos;

}else if(salario>1562484){
    alert("No tiene el beneficio de auxilio de transporte");
}
    var comision=ventas*0.2;
    var trabajo=(salario*laborados)/30;
    var deuda=prestamos;
    var total =(trabajo+comision)-prestamos;
    
   

document.write("Cedula Empleado:"+cedula+ "<br>");
document.write("Nombre Empleado: "+nombre+ "<br>");
document.write("Salario Básico: "+salario+ "<br>");
document.write("Auxilio de Transporte: "+auxilio+ "<br>");
document.write("Comisión de Ventas: "+comision+ "<br>");
document.write("Valor de Préstamos: "+deuda+ "<br>");
document.write("Salario Neto a Recibir: "+total+ "<br>");