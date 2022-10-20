import "./style.css";


//  SCROLL IN OPACITY ANIMATION
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
reveal();


//  collapsiblessss
const mediaQueryFull = window.matchMedia("(min-width:1024px)");
var coll = document.getElementsByClassName("collapsible");
var i;

if (mediaQueryFull.matches) { 
    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
  }

//   cursor 

const cursor = document.getElementById("cursor");

document.addEventListener('mousemove', e => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
  
  
});

// move images along w cursor 
// const ul = document.getElementById("ul")

// for(const li of ul.getElementsByTagName("li")) {
//     li.onmousemove = e => {
//         const rect = li.getBoundingClientRect(),
//         img = li.querySelector("img");

//         img.style.left =`${e.clientX - rect.left}px`;
//         img.style.top = `${e.clientY - rect.top}px`;
//     }
// }

// window.onmousemove = e => {
//     const percent = e.clientY / window.innerHeight,
//     y = percent * ul.offsetHeight * -1;

//   ul.animate({
//         transform: `translateY(${y}px)`
//     }, {
//         fill: "forwards",
//         duration: 4000
//     })
// }



