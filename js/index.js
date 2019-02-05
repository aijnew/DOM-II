// Your code goes here

// Step 1: Set up Event to target
const myH1 = document.querySelector('.logo-heading');

console.log(myH1);

myH1.style.color = 'green';

const btn = document.querySelector('.btn');

const mainNav = document.querySelector('.main-navigation')

const navLink = document.querySelector('.nav-link')

const aTag = document.querySelectorAll('a');



// Step 2. Add Event Listener
aTag[0].addEventListener('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    console.log("LAMBDA")
    e.target.style.color = 'green';
})


myH1.addEventListener('wheel', function(event){
    console.log(event);
})



window.addEventListener('scroll', function(event){
    console.log(event);
})


mainNav.addEventListener('click', function(e){
   
    console.log("Main nav was clicked");
})

navLink.addEventListener('click', function(e){
    e.stopPropagation();
    console.log("Nav link was clicked");
})



btn.addEventListener('dblclick', function(event){
    TweenMax.to('.btn', 1, {
        rotation: 180,
        marginLeft: 200,
        backgroundColor: "black",
        ease: Power4.easeOut
    });
    
    btn.style.fontSize = '50px';
})


