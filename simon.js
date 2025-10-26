let gameSeq=[] ; 
let userSeq=[];

let btns=["yellow","red","green","purple"];

let started = false;
let level=0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});
/**
 * Flashes a button by adding and then removing a CSS class to create a visual effect.
 * @param {HTMLElement} btn - The HTML element of the button to be flashed.
 * @returns {void} This function does not return a value.
 */
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },1000);
}
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },200);
}


function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level: ${level}`;
    let randIndx=Math.floor(Math.random()*3);
    let randColor= btns[randIndx];
    let randbtn= document.querySelector(`.${randColor}`);
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    

    btnFlash(randbtn);
}
function checkAns(idx) {
    console.log("curr level", level);
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML=`Game Over! <b>your score is ${level}</b> <br>Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=> {
            document.querySelector("body").style.backgroundColor="black";
        },200);
        reset();
    
}
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset() {
    level = 0;
    gameSeq = [];
    started = false;
    userSeq=[];
}