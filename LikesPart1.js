var count=3;
var countElement= document.querySelector("#numLike");

console.log(countElement);

function add1(){
    count ++;
    countElement.innerText = count+ " like(s)"
    console.log(count);
}

