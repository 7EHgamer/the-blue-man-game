/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var character = document.getElementById("character");
var enemy = document.getElementById("enemy");
var win = document.getElementById("win");
var interval;
var both = 0;
function moveLeft(){
    var left = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>0){
    character.style.left = left - 2 + "px";
    }
}
function moveRight(){
    var left = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left<1300){
    character.style.left = left + 2 + "px";
    }
}
function jump(){
  if(character.classList.contains("animate"))
    {return;}

      character.classList.add("animate");
  setTimeout(() => {
    character.classList.remove("animate");
  },500);
}
document.addEventListener("keydown", event => {
    if(both===0){
        both++;
   if(event.key==="ArrowLeft"){
       interval = setInterval(moveLeft, 1);
   }
   if(event.key==="ArrowRight"){
       interval = setInterval(moveRight, 1);
   }
   if(event.key===" "){
       interval = setInterval(jump, 1);
   }
    }
});
document.addEventListener("keyup", event =>{
    clearInterval(interval);
    both=0;
});
var checkDead = setInterval(function(){
  var characterTop =
  parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var enemyLeft =
  parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  if(enemyLeft<700 && enemyLeft>600 && characterTop>=300){
    enemy.style.animattion = "none";
    enemy.style.display = "none";
    character.style.animattion = "none";
    character.style.display = "none";
    win.style.animattion = "none";
    win.style.display = "none";
    checkDead.break;
    checkWin.break;
    window.location = "YouLose.html";
  }
  },300);
  var checkWin = setInterval(function(){
  var characterTop2 =
  parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var winLeft =
  parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  if(winLeft<1300 && winLeft>1200 && characterTop2>=130){
    win.style.animattion = "none";
    win.style.display = "none";
    enemy.style.animattion = "none";
    enemy.style.display = "none";
    character.style.animattion = "none";
    character.style.display = "none";
    checkWin.break;
    checkDead.break;
    window.location = "YW.php";
  }
  },100);