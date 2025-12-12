var menuopen=document.getElementById("menuopen");
var menuclose=document.getElementById("menuclose");
var menuitems=document.getElementById("menuitems")
menuopen.addEventListener("click",function(){
    menuitems.style.left="50%";
})
menuclose.addEventListener("click",function(){
    menuitems.style.left="200%";
})