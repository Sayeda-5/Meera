let user= document.querySelector("#otp");
    let btn= document.querySelector("#btn");
    btn.addEventListener("click",function(event){
        event.preventDefault();
        if(user.value=="1234"){
            alert("Payment Successful")
            window.location.href="Track.html"
        }else{
            alert("Incorrect OTP")
        }
    })