var NumberOfDrumButtom = document.querySelectorAll('.drum').length

// play sound when a button was click
for( i = 0 ; i < NumberOfDrumButtom ; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function (){
       // alert('I got a cliked');
        
       var buttonInnerHtml = this.innerHTML
       makeSound(buttonInnerHtml); 
        

    });//making eventlistened to the button
}
// play sound when a button was click

// play sound when a key was pressed on a keyboard
document.addEventListener("keypress",function(event) {
     makeSound(event.key);
}); 
   
// play sound when a key was pressed on a keyboard
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();  
        break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();  
        break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();  
        break;

        case "d":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();  
        break;

        case "j":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();  
        break;

        case "k":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();  
        break;

        case "l":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();  
        break;
    
        default: console.log(buttonInnerHtml);
    }

}
 