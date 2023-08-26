var timer = 60;
var hitnum=0;
var score=0;
function bubleCreater () {
var clutter=" ";
for(var i=1;i<103;i++){
    var num = Math.floor(Math.random()*10);
    clutter+=`<div id="buble">${num}</div>`
}
      document.querySelector("#bottompan").innerHTML = clutter;
}
function calScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function setTimer(){
    var time = setInterval(function(){
        if(timer>0){
        timer --;
        document.querySelector("#timeval").textContent = timer;
        }
        else{
            clearInterval(time);
            document.querySelector("#bottompan").innerHTML =`<h1>Game Over !!!! Your Score is ${score}</h1>`;

        }
    },1000)
}
function getNumber(){
    hitnum=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= hitnum;

}
document.querySelector("#bottompan").addEventListener("click",function(detais){
    var checkNum=Number(detais.target.textContent);
    if(checkNum===hitnum){
        calScore();
        getNumber();
        bubleCreater();
    }
})
getNumber();
setTimer();
bubleCreater();

