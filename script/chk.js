let chk= document.querySelector("form")
    let LSdata=[];
chk.addEventListener("submit", pay)

function pay(){
    event.preventDefault()
    let obj={
        name: chk.name.value,
        phone: chk.num.value,
        add: chk.address.value
    }

    if(obj.name==""||obj.phone=="" || obj.add==""){
        alert ("Fill all the infomation")
    }
    else{
        LSdata.push(obj);
        localStorage.setItem("money", JSON.stringify(LSdata))
        window.location.href='pay.html'
    }
}

    