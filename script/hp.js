let arr=[
    "https://logan.nnnow.com/content/dam/nnnow-project/04-nov-2022/SC_Offerpagedesktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/03-aug-2022/Olaplex_Offerpagedesktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/13-sep-2022/se/SephoraandExclusives_TopBannerdesktop(1).jpg"
]

let image=document.createElement("img");
image.style.width ="100%"
image.style.height ="450px"
document.querySelector(".icont").append(image);

let n= arr.length
let a=0;
slider(a);
function slider(e){
    setInterval(function(){
        if(e<n){
            image.src=arr[e];
            e++
        }
        if(e==n){
            e=0;
        }
    },1000)
}

let x= document.querySelector("search", search)
function search(){
let q= document.querySelector("input").value;

let nd= bag.filter(function(el){
    return el.title.toLowereCase().includes(q.toLowerCase())
})
displaycard(nd)
}