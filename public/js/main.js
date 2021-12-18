// navbar 

let navUl = document.querySelector("ul");
let menuBtn = document.querySelector(".fas");
console.log(menuBtn);
let btnNav = document.querySelector(".close-nav");
let ulNav = document.querySelector(".ul-nav")




menuBtn.addEventListener("click",()=>{
    menuBtn.classList.add("active")
    navUl.classList.toggle("active");
    buttonNuit.addEventListener("click",()=>{
        // nav.style.backgroundColor="black"
        navUl.classList.toggle("bg-black")
    })
    buttonJour.addEventListener("click",()=>{
        navUl.classList.toggle("bg-white")

    })
   
    btnNav.addEventListener("click",()=>{
        navUl.classList.remove("active")
    })
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
  
   
    
})
//bouttons connexion

let buttonConnexion = document.querySelector(".but-connect");
console.log(buttonConnexion);
let closeBtn = document.querySelector(".close-btn")
let section = document.querySelector("section-one");
let banniere = document.querySelector(".banniere");
let section2 = document.querySelector(".section-two");
let flou = document.querySelector(".flou")
console.log(section2);
let popup = document.querySelector(".popup")
console.log(popup);



buttonConnexion.addEventListener("click",()=>{
    popup.classList.toggle("active")
    document.querySelector("body").classList.toggle("stop-scrolling")
    flou.style.display="Block"

})

closeBtn.addEventListener("click",()=>{
    let popup = document.querySelector(".popup")
    popup.classList.remove("active")
    document.querySelector("body").classList.remove("stop-scrolling")
    flou.style.display="none"


})

let connect = document.querySelector(".first-bout");
let inscriptionBtn = document.querySelector(".two-bout");
let inscription = document.querySelector(".inscription2");
console.log(inscription);
let modal = document.querySelector(".popup");
console.log(modal);

inscriptionBtn.addEventListener("click",()=>{
    modal.classList.add("active")
    inscription.classList.add("active")
})
connect.addEventListener("click",()=>{
    modal.classList.add("active");
    inscription.classList.remove("active");
})


// carrousel
     
let indicator = document.getElementsByClassName('indic');

// je recupere toutes mes images
let img = document.querySelectorAll('.img');
console.log(img);
// premier button
    indicator[0].addEventListener('click',()=>{
        // ici je change la position de mes image
        // translateX = horizontal de gauche a droite
        
    img[0].style.transform = "translateX(0%)"
    img[1].style.transform = "translateX(120%)"
    // img[1].style.transform = "translateX(150%)"
    img[2].style.transform = "translateX(240%)"
    // img[2].style.transform = "translateX(300%)"
    img[3].style.transform = "translateX(360%)"
    // img[3].style.transform = "translateX(450%)"
    img[4].style.transform = "translateX(480%)"
    img[5].style.transform = "translateX(600%)"
    img[6].style.transform = "translateX(720%)"
})
indicator[1].addEventListener("click",() =>{
    // pareil je dois jouer avec les pourcentage
    img[0].style.transform = "translateX(-120%)"
    img[1].style.transform = "translateX(0%)"
    img[2].style.transform = "translateX(120%)"
    img[3].style.transform = "translateX(240%)"
    img[4].style.transform = "translateX(360%)"
    img[5].style.transform = "translateX(480%)"
    img[6].style.transform = "translateX(600%)"

})
indicator[2].addEventListener("click",() =>{
    img[0].style.transform = "translateX(-240%)"
    img[1].style.transform = "translateX(-120%)"
    img[2].style.transform = "translateX(0%)"
    img[3].style.transform = "translateX(120%)"
    img[4].style.transform = "translateX(240%)"
    img[5].style.transform = "translateX(360%)"
    img[6].style.transform = "translateX(480%)"

}
)
indicator[3].addEventListener("click",() =>{
    img[0].style.transform = "translateX(-360%)"
    img[1].style.transform = "translateX(-240%)"
    img[2].style.transform = "translateX(-120%)"
    img[3].style.transform = "translateX(0%)"
    img[4].style.transform = "translateX(120%)"
    img[5].style.transform = "translateX(240%)"
    img[6].style.transform = "translateX(360%)"

}
)
indicator[4].addEventListener("click",() =>{
    img[0].style.transform = "translateX(-480%)"
    img[1].style.transform = "translateX(-360%)"
    img[2].style.transform = "translateX(-240%)"
    img[3].style.transform = "translateX(-120%)"
    img[4].style.transform = "translateX(0%)"
    img[5].style.transform = "translateX(120%)"
    img[6].style.transform = "translateX(360%)"

}
)
