var number1 = Math.floor(Math.random() * 10 + 1);
var number2 = Math.floor(Math.random() * 10 + 1);

var Element1 = document.getElementById("qs");
Element1.innerText = ` The value of ${number1} * ${number2} = ? ` ;

const correctAnswer = number1 * number2;
const formElement=document.getElementById("form");
const inputElement=document.getElementById("inp");
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
const scoreElement=document.getElementById("score");
scoreElement.innerText = `score : ${score}` ;

formElement.addEventListener("submit", () => {
   const userAns = +inputElement.value;
   if(userAns === correctAnswer){
    score++;
    updateLocalStorage();
   }else{
    score--;
    updateLocalStorage();
   }

});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}