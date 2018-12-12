var Note;
var counter;
var firstcounter;
var Secondcounter;
var thirdcounter;

counter=0;
firstcounter=0;
Secondcounter=0;
thirdcounter=0;
count=0;
while(count<=10){
     Note=prompt("digite su calificación"+ count);
	 count=count+1;

	if(Note>0 && Note<=100){
		if (Note<50) {
			counter=counter+1;

		   }if(Note>=50 && Note<70){
			   firstcounter=firstcounter+1;
		   
		   }if(Note>=70 && Note<80){
			   Secondcounter=Secondcounter+1;
		   }if(Note>80){
			   thirdcounter=thirdcounter+1;
		   
		   }else{
			   alert("su calificacion no es valida por favor vuelva a digitarla");
		   
		   }

	}


}
document.write("la cantidad de estudiantes que obtuvieron una calificaión menor a 50 son  "+ counter +"<br>");
document.write("la cantidad de estudiantes que obtuvieron una calificaión de 50 o mas pero menor a 70 son  "+ firstcounter + "<br>");
document.write("la cantidad de estudiantes que obtuvieron una calificaión de 70 o mas pero menor a 80 son  "+ Secondcounter + "<br>");
document.write("la cantidad de estudiantes que obtuvieron una calificaión DE 8O o mas son   "+ thirdcounter +"<br>");

