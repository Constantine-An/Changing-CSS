function changeH1() {
	alert("function called");
var elem = document.getElementById("change1");   
// create variables
var r = 200;
var g = 56;
var b = 17;
var repetitions = 0;
var id = setInterval(setColor, 500); 
  function setColor() {
	   

	  if (repetitions < 20){  
		
		elem.style.color = 'rgb(' +r+','+g+','+b+')' ;
		repetitions += 1;
		r=r+14;
        b= b + 10; 
        g = g+6
	  		     }

	  else {
		 alert("setColor cleared");
		clearInterval(id);
	  	} 
			}     
    }
