const buttonDataStart = document.querySelector("button[data-start]");
const buttonDataStop = document.querySelector("button[data-stop]");

buttonDataStop.disabled=true;
let interwal;

buttonDataStart.addEventListener("click",function(){
    this.disabled=true;
    buttonDataStop.disabled=false;
    
    
    function changeColor(){function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };
    document.body.style.backgroundColor = getRandomHexColor();
    
}
interwal = setInterval(changeColor,1000);
});
 


buttonDataStop.addEventListener("click",function(){
    this.disabled=true;
    buttonDataStart.disabled=false;
    clearInterval(interwal);
    
});
