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

// let boutonAll = Array.from(document.querySelectorAll(".all"));
// console.log(boutonAll);
// let btnOne = boutonAll[0]
// console.log(btnOne);
// let btnTwoo = boutonAll[1]
// console.log(btnTwoo);
// let btnThree = boutonAll[2]
// console.log(btnThree);
// let btnFour = boutonAll[3]
// console.log(btnFour);

// let slides = Array.from(document.querySelectorAll(" .card"));
// console.log(slides);

// let luxSofa = slides[0]
// console.log(luxSofa);
// let lgloves = slides[1]
// console.log(lgloves);
// let bowl =slides[2]
// console.log(bowl);
// let bag = slides[3]
// console.log(bag);
// let tshirt = slides[4]
// console.log(tshirt);
// let plates = slides[5]
// console.log(plates);
// let modernSofa = slides[6]
// console.log(modernSofa);
// let bed = slides[7]
// console.log(bed);
// let shoes = slides[8]
// console.log(shoes);

// btnOne.addEventListener("click",()=>{
//     luxSofa.classList.remove("active")
//     lgloves.classList.remove("active")
//     bowl.classList.remove("active")
//     bag.classList.remove("active")
//     tshirt.classList.add("active")
//     plates.classList.add("active")
//     modernSofa.classList.add("active")
//     bed.classList.add("active")
//     shoes.classList.add("active")
//     btnOne.classList.add("active")
//     btnTwoo.classList.remove("active")
//     btnThree.classList.remove("active")
//     btnFour.classList.remove("active")

    
// })

// btnTwoo.addEventListener("click",()=>{
//     luxSofa.classList.remove("active")
//     tshirt.classList.add("active")
//     btnOne.classList.remove("active")
//     btnThree.classList.remove('active')
//     btnFour.classList.remove('active')
//     btnTwoo.classList.add('active')
// })


// btnThree.addEventListener("click",()=>{
//     luxSofa.classList.remove("active")
//     lgloves.classList.remove("active")
//     plates.classList.add("active")
//     btnThree.classList.add("active")
//     btnOne.classList.remove("active")
//     btnTwoo.classList.remove("active")
//     btnFour.classList.remove("active")
    
// })


// btnFour.addEventListener("click",()=>{
//     luxSofa.classList.remove("active")
//     lgloves.classList.remove("active")
//     bowl.classList.remove("active")
//     modernSofa.classList.add("active")
//     btnThree.classList.remove("active")
//     btnOne.classList.remove("active")
//     btnTwoo.classList.remove("active")
//     btnFour.classList.add("active")


// })



    

   

// btnOne.addEventListener("click",()=>{
//     luxSofa.classList.remove("active")
//     lgloves.classList.remove("active")
//     bowl.classList.remove("active")
//     bag.classList.remove("active")
//     tshirt.classList.add("active")
//     plates.classList.add("active")
//     modernSofa.classList.add("active")
//     bed.classList.add("active")
//     shoes.classList.add("active")
//     btnOne.classList.add("active")
//     btnTwoo.classList.remove("active")
//     btnThree.classList.remove("active")
//     btnFour.classList.remove("active")

    
// })

// btnTwoo.addEventListener("click",()=>{
//     luxSofa.classList.remove("active")
//     tshirt.classList.add("active")
//     btnOne.classList.remove("active")
//     btnThree.classList.remove('active')
//     btnFour.classList.remove('active')
//     btnTwoo.classList.add('active')
// })


// btnThree.addEventListener("click",()=>{
//     luxSofa.classList.remove("active")
//     lgloves.classList.remove("active")
//     plates.classList.add("active")
//     btnThree.classList.add("active")
//     btnOne.classList.remove("active")
//     btnTwoo.classList.remove("active")
//     btnFour.classList.remove("active")
    
// })


// btnFour.addEventListener("click",()=>{
//     luxSofa.classList.remove("active")
//     lgloves.classList.remove("active")
//     bowl.classList.remove("active")
//     modernSofa.classList.add("active")
//     btnThree.classList.remove("active")
//     btnOne.classList.remove("active")
//     btnTwoo.classList.remove("active")
//     btnFour.classList.add("active")


// })



// const imgs = document.querySelectorAll(".rowe img");
// console.log(imgs);
// const cercles = document.querySelectorAll(".bouton-vide");
// console.log(cercles);
// let index = 0

// cercles.forEach(el => {
//     el.addEventListener("click",()=>{
//         for (let i = 0; i < cercles.length; i++) {
//             cercles[i].classList.remove("active-all");

            
//         }
//         this.classList.add("active-all")
//         imgs[index].classList.remove("active")
//         index = this.getAttribute("data-clic")-1;
//         imgs[index].classList.add("active")

//     })
    
// });

       
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
