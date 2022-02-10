let indexSwap = 0;
function left(){
    mainSwap(indexSwap-=1);
}
function right(){
    mainSwap(indexSwap+=1);
}
function mainSwap (n){
    let swap = document.querySelectorAll(".image");
    console.log(swap)
        if (n> swap.length-1){
            indexSwap=0; 
        }
    if (n<0){
        indexSwap=swap.length-1;  
    }
    for (let i=0; i<swap.length; i++){
        swap[i].style.display = "none";
    }
    swap[indexSwap].style.display= "block";
}
mainSwap(indexSwap);
document.querySelector(".button-left").addEventListener("click",left);
document.querySelector(".button-right").addEventListener("click",right);