console.dir(document.body);
console.log(document.body);

//DOM manipulation

let heading=document.querySelector(".header");
console.dir(heading);

let paras=document.getElementsByTagName("p")
console.dir(paras);

let firstel=document.querySelector("#para");
console.dir(firstel);

let btn1=document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn mis clicked");
    alert("mewmew");
}

let modebtn=document.querySelector("#btn");
let currmode="light";

modebtn.addEventListener("click",()=>{
    if(currmode=="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";}
        else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";}
        
        console.log(currmode);
    

})