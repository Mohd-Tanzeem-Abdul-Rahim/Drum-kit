
for(var i=0;i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
    buttonClick(this.innerHTML);
    buttonanimmation(this.innerHTML);
});
}
document.addEventListener("keydown" , function(event){
    buttonClick(event.key);
    buttonanimmation(event.key); 
});
function buttonClick(button){
   switch (button) {
    case "w":
        var tom1 = new Audio('tom-1.mp3');
        tom1.play()
        break;
    case "a":
        var tom2 = new Audio('tom-2.mp3');
        tom2.play()
        break;
    case "s":
        var tom3 = new Audio('tom-3.mp3');
        tom3.play()
        break;
    case "d":
        var tom4 = new Audio('tom-4.mp3');
        tom4.play()
        break;
    case "j":
        var audio4 = new Audio('crash.mp3');
        audio4.play()
        break;
    case "k":
        var audio5 = new Audio('kick-bass.mp3');
        audio5.play()
        break;
    case "l":
        var audio6 = new Audio('snare.mp3');
        audio6.play()
        break;
    default:
        console.log("sorry");
        break;
   }
}
function buttonanimmation(button){
    var animmation = document.querySelector("."+button);
    animmation.classList.add("pressed");
    setTimeout(function(){
        animmation.classList.remove("pressed");
    }, 100 );
}