//
class personalPurpose{
  constructor( index, title, description, price ){
    this.const = {
      index: index,
      description: description,
      title: title,
      price: price,
      n: 4,
      m: 5
    };
    this.var = {
      visiable: false,
      grid: false,
      center: createVector()
    };
    this.array = {
      vitrum: [],
      vertex: [],
      dot: []
    };

    this.var.center = createVector( squareSize * 3.5, squareSize * 4 );
    this.init();
  }

  init(){
    this.initVertexs();
    let center, hue, brightness;
    let grid = false;
    let weight = 0.05;
    this.array.vitrum = [];

    switch ( this.const.index ) {
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        this.var.grid = true;
        break;
    };

    if( this.var.grid )
      for( let i = 0; i < this.const.n; i++ ){
        this.array.vitrum.push( [] );
        for( let j = 0; j < this.const.m; j++ ){
          center = this.var.center.copy();
          center.x += ( -( this.const.m - 1 ) / 2 + j * ( 1 + weight ) ) * squareSize;
          center.y += ( -( this.const.n - 1 ) / 2 + i * ( 1 + weight ) ) * squareSize;
          hue = null;
          brightness = null;
          this.array.vitrum[i].push( new vitrum( center.copy(), hue, brightness ) );
        }
      }

    switch ( this.const.index ){
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        center = this.var.center.copy();
        hue = this.const.index;
        brightness = null;
        this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
        break;
      case 5:
        this.array.vitrum[0][1].setHSB( 5, null );
        this.array.vitrum[0][3].setHSB( 5, null );
        this.array.vitrum[1][2].setHSB( 5, null );
        this.array.vitrum[2][2].setHSB( 5, null );
        this.array.vitrum[3][1].setHSB( 5, null );
        this.array.vitrum[3][3].setHSB( 5, null );
        break;
      case 6:
        this.array.vitrum[0][0].setHSB( 5, null );
        this.array.vitrum[0][1].setHSB( 5, null );
        this.array.vitrum[0][3].setHSB( 5, null );
        this.array.vitrum[0][4].setHSB( 5, null );
        this.array.vitrum[1][0].setHSB( 5, null );
        this.array.vitrum[1][4].setHSB( 5, null );
        break;
      case 7:
        this.array.vitrum[1][0].setHSB( 5, null );
        this.array.vitrum[2][0].setHSB( 5, null );
        this.array.vitrum[1][2].setHSB( 5, null );
        this.array.vitrum[2][2].setHSB( 5, null );
        this.array.vitrum[1][4].setHSB( 5, null );
        this.array.vitrum[2][4].setHSB( 5, null );
        break;
      case 8:
        this.array.vitrum[0][2].setHSB( 5, null );
        this.array.vitrum[1][1].setHSB( 5, null );
        this.array.vitrum[1][3].setHSB( 5, null );
        this.array.vitrum[2][1].setHSB( 5, null );
        this.array.vitrum[2][3].setHSB( 5, null );
        this.array.vitrum[3][2].setHSB( 5, null );
        break;
      case 9:
        this.array.vitrum[0][1].setHSB( 5, null );
        this.array.vitrum[0][2].setHSB( 5, null );
        this.array.vitrum[0][3].setHSB( 5, null );
        this.array.vitrum[3][1].setHSB( 5, null );
        this.array.vitrum[3][2].setHSB( 5, null );
        this.array.vitrum[3][3].setHSB( 5, null );
        break;
      case 10:
        this.array.vitrum[1][1].setHSB( 5, null );
        this.array.vitrum[1][2].setHSB( 5, null );
        this.array.vitrum[1][3].setHSB( 5, null );
        this.array.vitrum[2][1].setHSB( 5, null );
        this.array.vitrum[2][2].setHSB( 5, null );
        this.array.vitrum[2][3].setHSB( 5, null );
        break;
    }
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

  setVisiable( visiable ){
    this.var.visiable = visiable;
  }

  draw(){
    if( this.var.visiable ){
      if( !this.var.grid ){
        let weight = 1;
        strokeWeight( weight );
        fill( color( 0, 0, colorMax ) );
        stroke( color( 0, 0, colorMax ) );
        triangle( this.array.vertex[0].x, this.array.vertex[0].y,
          this.array.vertex[1].x, this.array.vertex[1].y,
          this.array.vertex[2].x, this.array.vertex[2].y );
        triangle( this.array.vertex[0].x, this.array.vertex[0].y,
          this.array.vertex[3].x, this.array.vertex[3].y,
          this.array.vertex[2].x, this.array.vertex[2].y );

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

        for( let i = 0; i < this.array.vitrum.length; i++ )
          this.array.vitrum[i].draw();
      }
      else
        for( let i = 0; i < this.array.vitrum.length; i++ )
          for( let j = 0; j < this.array.vitrum[i].length; j++ )
            this.array.vitrum[i][j].draw();
    }
  }
}
