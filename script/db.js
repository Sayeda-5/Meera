let arr=[
    "https://logan.nnnow.com/content/dam/nnnow-project/04-nov-2022/Morroccanoil_Homepagebanner_Bodycaredesktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/13-oct-2022/SC_TopBannerdesktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/08-nov-2022/Givenchy_Topbannerdesktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/03-nov-2022/ND_Homepagebannerdesktop.jpg"
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