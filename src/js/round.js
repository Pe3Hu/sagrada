//
class round{
  constructor( center, value ){
    this.const = {
      value: value
    };
    this.var = {
      center: center
    };
    this.array = {
      vertex: []
    };
    this.data = {
      bgColor: null,
      squreColor: null
    };

    this.init();
  }

  init(){
    this.initVertexs();
    this.initColors();
  }

  initVertexs(){
    let a = createVector( this.var.center.x + squareSize * 0.5, this.var.center.y - squareSize * 0.5 );
    let b = createVector( this.var.center.x + squareSize * 0.5, this.var.center.y + squareSize * 0.5 );
    let c = createVector( this.var.center.x - squareSize * 0.5, this.var.center.y + squareSize * 0.5 );
    let d = createVector( this.var.center.x - squareSize * 0.5, this.var.center.y - squareSize * 0.5 );
    this.array.vertex.push( a );
    this.array.vertex.push( b );
    this.array.vertex.push( c );
    this.array.vertex.push( d );

    let e = createVector( this.var.center.x + squareSize * 0.6, this.var.center.y - squareSize * 0.6 );
    let f = createVector( this.var.center.x + squareSize * 0.6, this.var.center.y + squareSize * 0.6 );
    let g = createVector( this.var.center.x - squareSize * 0.6, this.var.center.y + squareSize * 0.6 );
    let h = createVector( this.var.center.x - squareSize * 0.6, this.var.center.y - squareSize * 0.6 );
    this.array.vertex.push( e );
    this.array.vertex.push( f );
    this.array.vertex.push( g );
    this.array.vertex.push( h );
  }

  initColors(){
    let bgH = 35;
    let bgS = colorMax * 0.5;
    let bgB = colorMax;
    let squreH = 0;
    let squreS = 0;
    let squreB = colorMax;
    let bgColor, squreColor;

    this.data.squreColor = color( squreH, squreS, squreB );
    this.data.bgColor = color( bgH, bgS, bgB );
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

    line( this.array.vertex[4].x, this.array.vertex[4].y - weight,
      this.array.vertex[5].x, this.array.vertex[5].y );
    line( this.array.vertex[5].x, this.array.vertex[5].y,
     this.array.vertex[6].x - weight, this.array.vertex[6].y );
    line( this.array.vertex[6].x - weight, this.array.vertex[6].y,
      this.array.vertex[7].x - weight, this.array.vertex[7].y - weight );
    line( this.array.vertex[7].x - weight, this.array.vertex[7].y - weight,
      this.array.vertex[4].x, this.array.vertex[4].y - weight );

    fill( colorBG );
    stroke( colorBG );
    text( this.const.value, this.var.center.x, this.var.center.y + fontSize / 3 );
  }
}
