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