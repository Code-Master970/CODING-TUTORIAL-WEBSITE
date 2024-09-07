//typing text code:-

var typed = new Typed('.multiple-text', {
    strings: ['C Tutorial','C++ Tutorial','Python Tutorial', 'Java Tutorial','HTML Tutorial','CSS Tutorial'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    
});

var icon = document.getElementById("icon")

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.src= "images/sun.png";
    }
    else{
        icon.src="images/moon.png";
    }
}