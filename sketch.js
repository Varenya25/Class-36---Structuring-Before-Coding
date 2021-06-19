var database;
var gameState = 0, playerCount = 0;
var form;
var game;
var player;

function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game = new Game ();
  game.getGameState ();
  game.start ();
}
 

function draw(){
  background("white");
}