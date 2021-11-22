// navbar 

let navUl = document.querySelector("ul");
let menuBtn = document.querySelector(".menuBtn");
let btnNav = document.querySelector(".close-nav");


menuBtn.addEventListener("click",()=>{
    navUl.classList.toggle("active");
   
})
btnNav.addEventListener("click",()=>{
    navUl.classList.remove("active")
})


// boutton

let buttonJour = document.querySelector(".butt-jour");
let buttonNuit = document.querySelector(".butt-nuit");
let titrePrincipale = document.querySelector(".titre");
let nav = document.querySelector("nav");
let myUl =document.querySelector("ul");
let myLi = document.querySelectorAll("li");
let myA =document.querySelectorAll("a");
let firstSection = document.querySelector(".section-one");
let secondSection = document.querySelector(".section-two");
let fourSection = document.querySelector(".section-four");
let fiveSection = document.querySelector(".section-five");
let body = document.querySelector("body");
let navbar = document.querySelector("nav");


buttonNuit.addEventListener("click",()=>{
   
    body.style.backgroundColor ="black"
    titrePrincipale.style.color ="white"
    nav.classList.toggle("bg-black")
    navbar.classList.toggle("bg-black",window.scrollY>200);
    myA.forEach(el => {
        el.style.color ="white"
        
    });
        
})

buttonJour.addEventListener("click",()=>{
    body.style.backgroundColor ="white"
    titrePrincipale.style.color ="black"
    nav.classList.add("bg-white")
    navbar.classList.toggle("bg-white",window.scrollY>200);

    myA.forEach(el => {
        el.style.color ="black"
        
    });
       
})
// le schroll

window.addEventListener("scroll",()=>{
    let navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky",window.scrollY>200);
    // nav.forEach(el => {
    //     el.classList.toggle("bg-black",window.scrollY>200)
        
    // });
   
    
})
//bouttons connexion

let buttonConnexion = document.querySelector(".but-connect");
let closeBtn = document.querySelector(".close-btn")


buttonConnexion.addEventListener("click",()=>{
    let popup = document.querySelector(".popup")
    popup.classList.toggle("active")
    

})
closeBtn.addEventListener("click",()=>{
    let popup = document.querySelector(".popup")
    popup.classList.remove("active")

})

let connect = document.querySelector(".first-bout");
let inscriptionBtn = document.querySelector(".two-bout");



// carrousel

const imgs = document.querySelectorAll(".rowe img");
console.log(imgs);
const cercles = document.querySelectorAll(".bouton-vide");
console.log(cercles);
let index = 0

cercles.forEach(el => {
    el.addEventListener("click",()=>{
        for (let i = 0; i < cercles.length; i++) {
            cercles[i].classList.remove("active-all");

            
        }
        this.classList.add("active-all")
        imgs[index].classList.remove("active")
        index = this.getAttribute("data-clic")-1;
        imgs[index].classList.add("active")

    })
    
});



       

