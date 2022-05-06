let passwords = [1111 , 2222 , 3333 , 4444 ];


let elForm = document.querySelector(".lock-form");
let elPasswordInput = elForm.querySelector(".lock-input");
let elShowBtn = elForm.querySelector(".show-password");
let returnPassword = elForm.querySelector(".return-password");

elForm.addEventListener("submit" , function(evt){
  evt.preventDefault();
  
  inputValue =  Number(elPasswordInput.value);
  
  if (passwords.includes(inputValue)){
    window.open("https://telegram-wine.vercel.app/");
    returnPassword.setAttribute("style" , "display: none;");
    elPasswordInput.style.borderColor = "black";
    elPasswordInput.value = "";
    console.log(inputValue);
  } else if (inputValue == "" || inputValue != inputValue){
    elPasswordInput.style.borderColor = "red";
    elPasswordInput.value = "";
    alert("iltimos raqam kiriting !!");
  } else {
    returnPassword.setAttribute("style" , "display: block;");
    elPasswordInput.style.borderColor = "red";
    elPasswordInput.value = "";
    console.log(inputValue);
  }
});

elShowBtn.addEventListener("click", function(e){
  e.preventDefault();

  if(elPasswordInput.type == "password"){
    elPasswordInput.type = "text";
  } else{
    elPasswordInput.type = "password";
  }
})