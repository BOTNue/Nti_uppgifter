let changeheightvalue = 0;

function increaseheight (){
    let imgElement = document.getElementById ("poao");
    changeheightvalue += 100;
    imgElement.style.height = changeheightvalue + "px";
}

function decreaseheight (){
    let imgElement = document.getElementById ("poao");
    changeheightvalue -= 100;
    imgElement.style.height = changeheightvalue + "px";
}

let resetheightvalue = 500;

function resetheight (){
    let imgElement = document.getElementById ("poao");
    resetheightvalue = 500
    imgElement.style.height = resetheightvalue + "px"
}