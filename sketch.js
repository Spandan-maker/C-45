var ghost1, ghost2, pac1_img ,pac1, pac2, Background
var database, player, playerCount, allPlayers, game, form

var gameState = 0
var PLAY = 1
var END = 2

var pacs

function preload(){
    pac1_img = loadImage("images/PacMan.png");
    Background = loadImage("images/Background.jpg");
}

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if(playerCount === 2){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
    }

      if(gameState === 2){
        game.end();
      }

    drawSprites();

}