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


  inputs.forEach(input => {  
      input.classList.add("red-200");  
  }); 

  inputs.forEach(input => {  
      if (!input.value.trim()) { 
          input.classList.add("red-200");
          allValid = false; 
      }  
  });  

 
  if (allValid) {  
      alert('Formulario enviado correctamente.');  
      
      this.submit(); 
  } else {  
      let mensaje = document.getElementById ('alertaDanger')
      alert (mensaje); 
  }  
});  



