window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var navBtns = document.querySelectorAll("#navbar>a");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

navBtns.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    btn.classList.add("active");
    navBtns.forEach((m)=>{
      if (m != btn){
        m.classList.remove("active");
      }
    });
  });
})
