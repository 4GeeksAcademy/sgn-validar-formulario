import "bootstrap";
import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };


document.getElementById('myForm').addEventListener('submit', function(event) {  
 
  event.preventDefault();  
  

  const inputs = this.querySelectorAll('input, select, textarea');  
  let allValid = true;  


  inputs.forEach(input => input.classList.remove("red-200"));
  document.getElementById('alertDanger').style.display = 'none';

  inputs.forEach(input => {  
      if (!input.value.trim()) { 
          input.classList.add("red-200");
          allValid = false; 
      }  
  });  


      
if (allValid){
    if (alertDiv) {
        alertDiv.style.display = 'block';
      }
}else{
    document.getElementById('alertDanger').style.display= 'block';
}
});


