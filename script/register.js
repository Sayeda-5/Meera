let addform = document.querySelector("form");

addform.addEventListener("submit", login)
function login(event){
    event.preventDefault()

    let obj={
        email: addform.email.value,
        pass: addform.password.value
    }
    let mail= JSON.parse(localStorage.getItem("signup"))

    mail.forEach(function(e){
        if(obj.email==e.email){
            if(obj.pass==e.pass){
                alert("Successful")
                window.location.href='HomePage.html'
            }
            else{
                alert("Failed")
            }
        }
        else{
            alert("Invalid credentials")
        }
    })
}