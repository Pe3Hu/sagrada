//
class vitrum{
  constructor( center, hue, brightness ){
    this.const = {
    };
    this.var = {
      brightness: brightness,
      saturation: null,
      center: center,
      hue: hue
    };
    this.array = {
      vertex: [],
      dot: []
    };
    this.data = {
      bgColor: null,
      circleColor: null
    };

    this.init();
  }

  init(){
    this.initVertexs();
    this.initDots();
    this.initColors();
  }

  initVertexs(){
    let a = createVector( this.var.center.x + squareSize / 2, this.var.center.y - squareSize / 2 );
    let b = createVector( this.var.center.x + squareSize / 2, this.var.center.y + squareSize / 2 );
    let c = createVector( this.var.center.x - squareSize / 2, this.var.center.y + squareSize / 2 );
    let d = createVector( this.var.center.x - squareSize / 2, this.var.center.y - squareSize / 2 );
    this.array.vertex.push( a );
    this.array.vertex.push( b );
    this.array.vertex.push( c );
    this.array.vertex.push( d );
  }

  initDots(){
    this.array.dot.push( createVector( this.var.center.x - circleSize, this.var.center.y - circleSize ) );
    this.array.dot.push( createVector( this.var.center.x - circleSize, this.var.center.y  ) );
    this.array.dot.push( createVector( this.var.center.x + circleSize, this.var.center.y - circleSize ) );
    this.array.dot.push( createVector( this.var.center.x, this.var.center.y ) );
    this.array.dot.push( createVector( this.var.center.x - circleSize, this.var.center.y + circleSize ) );
    this.array.dot.push( createVector( this.var.center.x + circleSize, this.var.center.y ) );
    this.array.dot.push( createVector( this.var.center.x + circleSize, this.var.center.y + circleSize ) );
  }

  initColors(){
    let bgH = null;
    let bgS = colorMax;
    let bgB = 300;
    let circleH = 0;
    let circleS = 0;
    let circleB = colorMax;
    let bgColor, circleColor;

    switch( this.var.hue ) {
      case 0:
        bgH = 55;
        bgB = colorMax;
        break;
      case 1:
        bgH = 120;
        break;
      case 2:
        bgH = 200;
        break;
      case 3:
        bgH = 300;
        bgB = colorMax;
        break;
      case 4:
        bgH = colorMax;
        bgB = colorMax;
        break;
      case 5:
        bgH = 240;
        break;
      case null:
        bgH = 0;
        bgS = 0;
        bgB = colorMax * ( 8 - this.var.brightness ) / 8;
        if( this.var.brightness > 3 )
          circleB = colorMax * 5 / 6;
        else
          circleB = colorMax / 6;
        break;
    };

    this.data.circleColor = color( circleH, circleS, circleB );
    this.data.bgColor = color( bgH, bgS, bgB );
  }

  setHSB( h, b ){
    this.var.brightness = b;
    this.var.hue = h;
    this.initColors();
  }

  draw(){
    //draw square
    stroke( this.data.bgColor );
    fill( this.data.bgColor );
    triangle( this.array.vertex[0].x, this.array.vertex[0].y,
      this.array.vertex[1].x, this.array.vertex[1].y,
      this.array.vertex[2].x, this.array.vertex[2].y );
    triangle( this.array.vertex[0].x, this.array.vertex[0].y,
      this.array.vertex[3].x, this.array.vertex[3].y,
      this.array.vertex[2].x, this.array.vertex[2].y );

    let weight = 1;
    strokeWeight( weight );
    stroke( 'black' );
    line( this.array.vertex[0].x, this.array.vertex[0].y - weight,
      this.array.vertex[1].x, this.array.vertex[1].y );
    line( this.array.vertex[1].x, this.array.vertex[1].y,
     this.array.vertex[2].x - weight, this.array.vertex[2].y );
    line( this.array.vertex[2].x - weight, this.array.vertex[2].y,
      this.array.vertex[3].x - weight, this.array.vertex[3].y - weight );
    line( this.array.vertex[3].x - weight, this.array.vertex[3].y - weight,
      this.array.vertex[0].x, this.array.vertex[0].y - weight );

    //draw number
    noStroke();
    fill( this.data.circleColor );
    switch( this.var.brightness ) {
      case 1:
        ellipse( this.array.dot[3].x, this.array.dot[3].y, circleSize * 0.9, circleSize * 0.9 );
        break;
      case 2:
        ellipse( this.array.dot[0].x, this.array.dot[0].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[6].x, this.array.dot[6].y, circleSize * 0.9, circleSize * 0.9 );
        break;
      case 3:
        ellipse( this.array.dot[2].x, this.array.dot[2].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[3].x, this.array.dot[3].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[4].x, this.array.dot[4].y, circleSize * 0.9, circleSize * 0.9 );
        break;
      case 4:
        ellipse( this.array.dot[0].x, this.array.dot[0].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[2].x, this.array.dot[2].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[4].x, this.array.dot[4].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[6].x, this.array.dot[6].y, circleSize * 0.9, circleSize * 0.9 );
        break;
      case 5:
        ellipse( this.array.dot[0].x, this.array.dot[0].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[2].x, this.array.dot[2].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[3].x, this.array.dot[3].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[4].x, this.array.dot[4].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[6].x, this.array.dot[6].y, circleSize * 0.9, circleSize * 0.9 );
        break;
      case 6:
        ellipse( this.array.dot[0].x, this.array.dot[0].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[1].x, this.array.dot[1].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[2].x, this.array.dot[2].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[4].x, this.array.dot[4].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[5].x, this.array.dot[5].y, circleSize * 0.9, circleSize * 0.9 );
        ellipse( this.array.dot[6].x, this.array.dot[6].y, circleSize * 0.9, circleSize * 0.9 );
        break;
    };
  }
}
