let img = document.querySelector(".slides");
let sliders = [2, 3, 4];
let start = 0;

function slider(){
    if(start<sliders.length){
        start++;

    }else{
        start=1;
    }
    console.log(img);
    img.innerHTML='<img src="./images/phone'+sliders[start-1]+'.png">';
}
setInterval(slider, 5000);