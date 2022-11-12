let addform = document.querySelector("form")
let LSdata= [];

    addform.addEventListener("submit", login)
   function login(event) {
        event.preventDefault();

        let obj={
        email: addform.email.value,
        phone: addform.num.value,
        pass: addform.password.value
        }
        
     
    if(obj.email==""||obj.phone=="" || obj.pass==""){
        alert ("Fill all the infomation")
    }else{
           LSdata.push(obj);
    localStorage.setItem("signup", JSON.stringify(LSdata)) 
     window.location.href='registered.html'
    }

    }