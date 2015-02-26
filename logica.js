


  var num1=0;
  var num2=0; 
  var mostrado=""; 
  comprobador=0; 
  operador=0; 

function seleccionar(a)
{ 
	switch (a){ 
    case 1: 
      operador=1 
  
      document.getElementById("txtResultado").value="+";
      break; 
    case 2: 
      operador=2 
  
      document.getElementById("txtResultado").value="-";
      break; 
    case 3: 
      operador=3 
  
      document.getElementById("txtResultado").value="*";
      break; 
    case 4: 
      operador=4 
        document.getElementById("txtResultado").value="/";
      break; 
     
      case 5: 
      operador=5 
        document.getElementById("txtResultado").value=Math.sin(num1);
      break; 

      case 6: 
      operador=6
        document.getElementById("txtResultado").value=Math.cos(num1);
      break; 

    default: 
    break; 
  } 
  mostrado=""; 
  comprobador=1; 
} 



function darNumero(a)
{ 
	mostrado=mostrado+a; 
  
  document.getElementById("txtResultado").value=""+mostrado;

  if(comprobador==0){ 
    num1=parseFloat(mostrado); 
  }
  else if(comprobador==1){ 
    num2=parseFloat(mostrado); 
} 
  
} 

function resultado()
{ 
  switch (operador){ 
    case 1: 
      
      document.getElementById("txtResultado").value=num1+num2;
      break; 
    case 2: 
      
      document.getElementById("txtResultado").value=num1-num2;
      break; 
    case 3: 
     
      document.getElementById("txtResultado").value=num1*num2;
      break; 
    case 4: 
     
      document.getElementById("txtResultado").value=num1/num2;
      break; 

   


      default: 
    break;  
  } 
  
  num1=parseFloat(document.getElementById("txtResultado").value); 
  mostrado=""; 
} 



function dibujarPlanoCanvas(){
var C = document.getElementById("canvas");
//se trae la propiedad de lapiz para dibujar
dibujador= C.getContext("2d");

dibujador.fillStyle="#000";
///se dibuja eje X
dibujador.moveTo(0,100);//
dibujador.lineTo(200,100);
//muestra la linea en canvas
dibujador.stroke();



///se dibuja eje Y
dibujador.moveTo(100,0);//
dibujador.lineTo(100,200);
//muestra la linea en canvas
dibujador.stroke();
}