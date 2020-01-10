//
class instrument{
  constructor(){
    this.const = {
      n: 4,
      m: 5
    };
    this.var = {
      visiable: false,
      reserve: false,
      counter: false,
      center: null,
      rose: false,
      bag: false,
    };
    this.array = {
      vertex: [],
      round: [],
      line: [],
      dot: []
    };
    this.data = {
      bgColor: null,
      squreColor: null
    };

    this.var.center = createVector( squareSize * 5, squareSize * 7 );
    this.init();
  }

  init(){
    this.initVertexs();
    this.initColors();
    this.initRounds();
    this.initLines();
    this.initDots();
  }

  initVertexs(){
    let vec = this.var.center.copy();
    let weight = 0.05;
    vec.x += ( this.const.m * ( 1 + weight ) / 2 ) * squareSize;
    vec.y -= ( this.const.n * ( 1 + weight ) / 2 ) * squareSize;
    this.array.vertex.push( vec.copy() );
    vec = this.var.center.copy();
    vec.x += ( this.const.m * ( 1 + weight ) / 2 ) * squareSize;
    vec.y += ( this.const.n * ( 1 + weight ) / 2 ) * squareSize;
    this.array.vertex.push( vec.copy() );
    vec = this.var.center.copy();
    vec.x -= ( this.const.m * ( 1 + weight ) / 2 ) * squareSize;
    vec.y += ( this.const.n * ( 1 + weight ) / 2 ) * squareSize;
    this.array.vertex.push( vec.copy() );
    vec = this.var.center.copy();
    vec.x -= ( this.const.m * ( 1 + weight ) / 2 ) * squareSize;
    vec.y -= ( this.const.n * ( 1 + weight ) / 2 ) * squareSize;
    this.array.vertex.push( vec.copy() );
  }

  initDots(){
  }

  initLines(){
    /*for( let i = 0; i < this.const.n; i++ ){
      this.array.vitrum.push( [] );
      for( let j = 0; j < this.const.m; j++ ){
        center = this.var.center.copy();
        center.x += ( -( this.const.m - 1 ) / 2 + j * ( 1 + weight ) ) * squareSize;
        center.y += ( -( this.const.n - 1 ) / 2 + i * ( 1 + weight ) ) * squareSize;
        hue = null;
        brightness = null;
        this.array.vitrum[i].push( new vitrum( center.copy(), hue, brightness ) );
      }
    }*/
  }

  initRounds(){
    let count = 5;
    for( let i = 0; i < count; i++ ){
      let value = i + 4;
      let center = createVector(
        this.var.center.x + squareSize * ( i + 0.5 - count / 2) * 1.4 ,
        this.var.center.y - squareSize * 2.5 );
      this.array.round.push( new round( center, value ) );
    }
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

  setVisiable( visiable ){
    this.var.visiable = visiable;
  }

  draw(){
    if( this.var.visiable ){
      let weight = 0.15;
      strokeWeight( weight );
      fill( this.data.bgColor );
      stroke( this.data.bgColor );
    /*  triangle( this.array.vertex[0].x, this.array.vertex[0].y,
        this.array.vertex[1].x, this.array.vertex[1].y,
        this.array.vertex[2].x, this.array.vertex[2].y );
      triangle( this.array.vertex[0].x, this.array.vertex[0].y,
        this.array.vertex[3].x, this.array.vertex[3].y,
        this.array.vertex[2].x, this.array.vertex[2].y );*/

      for( let i = 0; i < this.array.round.length; i++ )
        this.array.round[i].draw();

      fill( 'black' );
      ellipse( this.var.center.x, this.var.center.y, 5, 5 );

    }
  }
}
