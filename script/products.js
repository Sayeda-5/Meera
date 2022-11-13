let arr=[];
    let url="https://636d371191576e19e3231cf4.mockapi.io/products"
    async function getdata(){
      try{
        let res= await fetch(url)
      let out = await res.json();
      arr=[...out]
      console.log(arr)
      displaycard(arr)
      }catch(err){
        alert(err);
      }
    }

    getdata();

    

    function displaycard(arr){
      let carts= JSON.parse(localStorage.getItem("cart"))||[]
      document.querySelector("#pro").innerHTML="";

      arr?.forEach(function(el){
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
        btn.innerText= "Add to Cart"
        btn.style.backgroundColor="lightblue"
        btn.style.color="white"
        btn.style.border="0px"
        btn.style.margin= "3px"
        btn.style.height="30px"
        btn.style.boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"

        btn.addEventListener("click", function(){
          carts.push(el)
          localStorage.setItem("cart", JSON.stringify(carts))
          alert("Product Added To Cart")
          
        })

        div.append(image,name,price,deet,cat,btn)

        document.querySelector("#pro").append(div)

      })
    }

    function filterdata(){
    let v= document.querySelector("#filter").value
    let fd= arr.filter(function(el){
      return el.category== v
    })
    console.log(fd)
    displaycard(fd)
   }

   function handdleSort(){
    let selected=document.querySelector("#sort").value
    if(selected=="HTL"){
        arr.sort((a,b)=>b.price-a.price)
    }if(selected=="LTH"){
        arr.sort((a,b)=>a.price-b.price)
    }

    displaycard(arr);
}
