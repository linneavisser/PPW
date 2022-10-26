import "./style.css";


//  SCROLL IN OPACITY ANIMATION
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 120;
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

// gsap text reveal

// const textrev = gsap.timeline();
const textrevH = gsap.timeline();

            // textrev.from(".line span", 1.8, {
            //     y: 200,
            //     ease: "power4.out",
            //     delay: 1,
            //     skewY: 10,
            //     stagger: {
            //         amount: 0.8,
            //     },
            // });

            textrevH.from(".line h1", 1.8, {
              y: 200,
              ease: "power4.out",
              delay: 0.3,
              skewY: 20,
              stagger: {
                  amount: 0.8,
              },
          });

    


          // let section = document.querySelectorAll('section');
          // let menu = document.querySelectorAll('header nav li a');
          // window.onscroll = () => {
          //   section.forEach(i => {
          //     let top = window.scrollY;
          //     let offset = i.offsetTop - 150;
          //     let height = i.offsetHeight;
          //     let id = i.getAttribute('id');
          //     if (top >= offset && top < offset + height) {
          //       menu.forEach(link => {
          //         link.classList.remove('active');
          //         document.querySelector('header nav a[href*=' + id + ']')
          //           .classList.add('active');
          //       });
          //     }
          //   });
          // };