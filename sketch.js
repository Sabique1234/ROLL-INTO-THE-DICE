//BLUE PRINT FOR SNAKE AND LADDER GAME:-

//100-95-90-85-80-75-70-65-60-55
// 5 -10-15-20-25-30-35-40-45-50

//WAY TO THE TOP :-

//(RIGHT TO LEFT)
//(LEFT TO RIGHT)

//<=<=<=<=<=<=<=<=<=<=
//=>=>=>=>=>=>=>=>=>=>


//VARIABLES FOR SANKE AND LADDER GAME
var  board,board_img;

//PLAYER VARIABLE
var player, player_img;

//RANDOM NUMBER FOR DICE
var magic;

//DICE 
var dice1,dice2,dice3,dice4,dice5,dice6;
var dice

//LOADS THE IMAGES
function preload()
{
//DICE IMAGES
 dice1=loadImage("images/dice1.jpg");
 dice2=loadImage("images/dice2.jpg");
 dice3=loadImage("images/dice3.jpg");
 dice4=loadImage("images/dice4.jpg");
 dice5=loadImage("images/dice5.jpg");
 dice6=loadImage("images/dice6.jpg");

 board_img=loadImage("images/board.png");

 player_img=loadImage("images/player.jpg");
}

//SPRITES SETUP
function setup(){

//CAMERA ALIGNMENT
 canvas= createCanvas(windowWidth,windowHeight);

/*board=createSprite(280,280);
board.addImage(board_img);
board.scale=1;
*/

dice=createSprite(windowWidth/2+10,360,1,1);
magic=Math.round(random(1,6));

 //PLAYER
 
 //player=createSprite(75,480,30,30);
 //player.addImage(player_img);
 //player.scale=0.5;
 
 
 //ASSIGNING RANDOM NUMBER
 //A DICE HAS 6 FACES

}
//INSTRUCTIONS
function draw(){
  background("red"); 

//ROLLS THE DICE AFTER PRESSING UP KEY
if(keyDown("enter")||keyDown("space")||mouseWentUp("leftButton")||mouseWentUp("rightButton")){
  //diceRoll();
  
   magic=Math.round(random(1,6));
  switch(magic){
    case 1:dice.addImage(dice1);
           break;
    case 2:dice.addImage(dice2);
           break;
    case 3:dice.addImage(dice3);
           break;
    case 4:dice.addImage(dice4);
           break;
    case 5:dice.addImage(dice5);
           break;
    case 6:dice.addImage(dice6);   
    default: break;                  
  }
  dice.scale=1.5;
}

console.log(magic);

//SHOWS TEXT, ASKING FOR PRESSING THE UP KEY
fill("black");
textSize(30);
text("LET ME GUESS! YOU LOST YOUR DICE, I AM HERE TO HELP :)",windowWidth/2-450,70);
 
 

  drawSprites();
}

//function diceRoll(){

//}