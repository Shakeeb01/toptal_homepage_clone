let NavBar = document.querySelector(".custom-nav");
window.addEventListener("scroll",function(){
    if(window.scrollY > 20){
        NavBar.classList.add("navbar-scroll");
    }else{
        NavBar.classList.remove("navbar-scroll");
    };
});