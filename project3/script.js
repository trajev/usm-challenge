let bulb = document.querySelector("#bulb");

let flag = true;

bulb.addEventListener( "click" , ()=>{
    if( flag ){
        bulb.src = "./assets/OFFbulb.jpg";
        flag = false;
    }
    else {
        bulb.src = "./assets/ONbulb.jpg";
        flag = true;
    }
} )