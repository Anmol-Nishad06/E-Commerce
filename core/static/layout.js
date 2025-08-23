const menubar =document.querySelector(".menubar");
const menu=document.getElementById("menu");

console.log("works");


function slide(){
     menu.style.width="15rem";
}

function closeNav() {
  menu.style.width = "0";
}

// menubar.addEventListener("toggle",()=>{
//     console.log("clicked");
//     // menu.classList.toggle("menu1");
//     menu.style.width="15rem";
// })