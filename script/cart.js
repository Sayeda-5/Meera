let l= document.querySelector("#item")
let cartItem= JSON.parse(localStorage.getItem("cart"))
    
let total= cartItem.reduce((acc, el)=>acc +  el.price, 0 );
document.querySelector("#total").innerText ="CART TOTAL:- "+ total
console.log(total)

function displaycard(cartItem){
  
  // document.querySelector("#cart-container").innerHTML="";

  cartItem?.forEach(function(el,index){
        let div= document.createElement("div")
        div.style.backgroundColor="pink"
        div.style.color="white"

        let image = document.createElement("img")
        image.setAttribute("src", el.avatar)
        image.style.width= "75%"

        let name = document.createElement("h2")
        name.innerText= el.ttle

        let price = document.createElement("h3")
        price.innerText= el.price

        let deet= document.createElement("p")
        deet.innerText= el.description

        let cat = document.createElement("p")
        cat.innerText = el.category


    let btn= document.createElement("button")
    btn.innerText= "+"
    btn.style.backgroundColor="lightblue"
    btn.style.color="white"
    btn.style.border="0px"
    btn.style.margin= "3px"
    let c=0
    btn.addEventListener("click",function(){
      c++
      span.innerText = c
    })

    let span = document.createElement("span")
    span.innerText="1"

    let btn1= document.createElement("button")
    btn1.innerText= "-"
    btn1.style.backgroundColor="lightblue"
    btn1.style.color="white"
    btn1.style.border="0px"
    btn1.style.margin= "3px"

    btn1.addEventListener("click",function(){
      c--
      span.innerText = c
      
    })

    let btn2= document.createElement("button")
    btn2.innerText= "Remove"
    btn2.style.backgroundColor="lightblue"
    btn2.style.color="white"
    btn2.style.border="0px"
    btn2.style.margin= "3px"

    btn2.addEventListener("click",function(){
      deletedata(cartItem,index)
      window.location.reload();
    })
    
    

    div.append(image,name,price,deet,cat,btn,span,btn1,btn2)

    document.querySelector("#pro").append(div)
    // document.querySelector("#cart-total").innerText =total
  })

  l.innerText=cartItem.length
  console.log(l)

}
function deletedata(data,index){
  data.splice(index,1)
  localStorage.setItem("cart",JSON.stringify(data))
  displaycard(data)
}
displaycard(cartItem)
