// Get all attribute 
const form = document.querySelector("form") ;
 const input = form.querySelector(".first-input")   ;
 const text = form.querySelector(".text") ;
 form.addEventListener('submit' , (e)=>{
    form.classList.add("error") ;
    // after check email is valid remove class valid ;
    form.classList.remove("valid") ; 
    let regexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ ; 
    // check if input value is empty
    if(input.value === ''){
        text.innerHTML = "Email can't be Empty " ;
    } 
    // check if input value is not match the regular expression
    else if(!input.value.match(regexp)){
        text.innerHTML = "Please Enter a Valid Email " ; 
    }
    else{
        form.classList.replace("error" ,"valid") ;
        text.innerHTML = 'Valid Email' ; 
    }
 })