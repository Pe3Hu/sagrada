let squareSize = 25;
let circleSize = squareSize / 5;
let colorMax = 360;
let colorBG = colorMax * 2 / 3;
let infinity = 999999999;
let fr = 60;
let font;
let fontSize = 16;//18
let canvasSize;
let canvasGrid;
let interfaceBoundaries;
let gameBoard;

function preload() {
  font = loadFont('src/fonts/Chunkfive.otf');
}

function setup() {
  canvasSize = createVector( 800, 700 );//800 600
  canvasGrid = createVector(
    Math.floor( canvasSize.x / squareSize ),
    Math.floor( canvasSize.y / squareSize ) );
  createCanvas( canvasSize.x, canvasSize.y );

  textFont( font );
  textSize( fontSize );
  textAlign( CENTER );
  strokeWeight( 5 / squareSize );

  colorMode( HSB, colorMax );
  frameRate( fr );

  offset = createVector( squareSize * 3, squareSize * 3 );

  gameBoard = new board( offset );
}

function draw() {
  background( colorBG );
  gameBoard.draw();
}

function mouseClicked() {
  gameBoard.click();
}
