var bot = document.querySelector(".bottom2") 
var scene =  document.querySelector(".scene2")
var top =  document.querySelector(".a")
var img = document.querySelector(".cir")
var cab =  document.querySelector(".c")

var flag=0;
function open(){
    if(flag == 0){
    cab.style.transform ="translateY(-250px) translateZ(110px) rotateX(45deg)"
    cab.style.opacity = "0.2"
    img.style.top="-20%"
    flag++}
    // else{
    //     cab.style.transform ="rotateX(45deg) "
    //     // cab.style.transform ="translate(none)"
    //     cab.style.opacity = "0.2"
    //     img.style.top="50%"
    //     flag--;
    // }

}

scene.addEventListener("click", open )


// function zack(det){
//     var z = det;
//     scene.style.left= z.x-130 + "px"
//     scene.style.top= z.y-170 + "px"
// }
// bot.addEventListener("mousemove",zack)


