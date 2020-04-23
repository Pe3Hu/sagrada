let cellSize = 24;
let daoNum = 9;
let colorMax = 360;
let colorBG = colorMax * 2 / 3;
let colorButton = colorMax / 2;
let infinity = 999999999;
let fr = 60;
let font;
let fontSize = 12;//18
let canvasSize;
let canvasGrid;
let interfaceBoundaries;
let gameBoard;
let offset;
let gameMap;
let deltaTime = 1/fr;


function preload() {
  font = loadFont('src/fonts/Chunkfive.otf');
}

function setup() {
  canvasSize = createVector( 800, 700 );//800 600
  canvasGrid = createVector(
    Math.floor( canvasSize.x / cellSize ),
    Math.floor( canvasSize.y / cellSize ) );
  createCanvas( canvasSize.x, canvasSize.y );

  textFont( font );
  textSize( fontSize );
  textAlign( CENTER );
  strokeWeight( 5 / cellSize );

  colorMode( HSB, colorMax );
  frameRate( fr );

  gameMap = new map();
  //fow = new fogOfWar();
}


function draw() {
  background( colorBG );
  gameMap.draw();
  //fow.draw();
}
