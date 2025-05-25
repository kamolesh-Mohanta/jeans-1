let sidemenu = document.getElementById("sideMenu");
sidemenu.style.maxHeight = "0px";
function openMenu(){
    if(sidemenu.style.maxHeight == "0px"){
        sidemenu.style.maxHeight = "300px"
    }
   
  else if(sidemenu.style.maxHeight == "300px"){
    sidemenu.style.maxHeight = "0px"

  }
};

// Contact click submit button


function btnClick() {
  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const msgInput = document.getElementById("msg").value;

  const message = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  if (nameInput.trim() == "") {
    message.textContent = "Please Enter your name.";
  
 
  }else if(emailInput.trim() == ""){
 emailError.textContent = "Please Enter a valid email."
  }else if(msgInput.trim() == ""){
      
    messageError.textContent = "Please enter your message.";
  }else{
    successMsg.innerHTML = "Form submitted Successfully!";
    // Proceed with form submission or further logic
    
  }
}

