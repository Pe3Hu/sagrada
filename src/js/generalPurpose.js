//
class generalPurpose{
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
    this.initVitrums();
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

  initVitrums(){
    let center, hue, brightness;
    let grid = false;
    let weight = 0.05;
    this.array.vitrum = [];

    switch ( this.const.index ) {
      case 1:
      case 2:
      case 4:
      case 5:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
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

    switch ( this.const.index ) {
        case 0:
          center = this.var.center.copy();
          center.x -= 1.5 * squareSize;
          center.y -= 1.25 * squareSize;
          hue = null;
          brightness = 1;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          center = this.var.center.copy();
          center.y -= 1.25 * squareSize;
          brightness = 3;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          center = this.var.center.copy();
          center.x += 1.5 * squareSize;
          center.y -= 1.25 * squareSize;
          brightness = 5;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          center = this.var.center.copy();
          center.x -= 0.75 * squareSize;
          brightness = 2;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          center = this.var.center.copy();
          center.x += 0.75 * squareSize;
          brightness = 4;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          center = this.var.center.copy();
          center.y += 1.25 * squareSize;
          brightness = 6;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          break;
        case 1:
          this.array.vitrum[2][0].setHSB( null, 3 );
          this.array.vitrum[2][1].setHSB( null, 6 );
          this.array.vitrum[2][2].setHSB( null, 1 );
          this.array.vitrum[2][3].setHSB( null, 2 );
          this.array.vitrum[2][4].setHSB( null, 4 );
          break;
        case 2:
          this.array.vitrum[0][2].setHSB( null, 6 );
          this.array.vitrum[1][2].setHSB( null, 1 );
          this.array.vitrum[2][2].setHSB( null, 4 );
          this.array.vitrum[3][2].setHSB( null, 2 );
          break;
        case 3:
          center = this.var.center.copy();
          center.x -= 1.75 * squareSize;
          center.y -= 0.75 * squareSize;
          brightness = null;
          hue = 0;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          center = this.var.center.copy();
          center.y -= 0.75 * squareSize;
          hue = 2;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          center = this.var.center.copy();
          center.x += 1.75 * squareSize;
          center.y -= 0.75 * squareSize;
          hue = 4;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          center = this.var.center.copy();
          center.x -= 1 * squareSize;
          center.y += 0.75 * squareSize;
          hue = 1;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          center = this.var.center.copy();
          center.x += 1 * squareSize;
          center.y += 0.75 * squareSize;
          hue = 3;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          break;
        case 4:
          this.array.vitrum[1][0].setHSB( 4, null );
          this.array.vitrum[1][1].setHSB( 0, null );
          this.array.vitrum[1][2].setHSB( 1, null );
          this.array.vitrum[1][3].setHSB( 2, null );
          this.array.vitrum[1][4].setHSB( 3, null );
          break;
        case 5:
          this.array.vitrum[0][2].setHSB( 1, null );
          this.array.vitrum[1][2].setHSB( 3, null );
          this.array.vitrum[2][2].setHSB( 0, null );
          this.array.vitrum[3][2].setHSB( 2, null );
          break;
        case 6:
          center = this.var.center.copy();
          center.x -= 0.75 * squareSize;
          hue = null;
          brightness = 5;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          center = this.var.center.copy();
          center.x += 0.75 * squareSize;
          brightness = 6;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          break;
        case 7:
          center = this.var.center.copy();
          center.x -= 0.75 * squareSize;
          hue = null;
          brightness = 3;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          center = this.var.center.copy();
          center.x += 0.75 * squareSize;
          brightness = 4;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          break;
        case 8:
          center = this.var.center.copy();
          center.x -= 0.75 * squareSize;
          hue = null;
          brightness = 1;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          center = this.var.center.copy();
          center.x += 0.75 * squareSize;
          brightness = 2;
          this.array.vitrum.push( new vitrum( center.copy(), hue, brightness ) );
          break;
        case 9:
          this.array.vitrum[1][1].setHSB( 2, null );
          this.array.vitrum[1][4].setHSB( 0, null );
          this.array.vitrum[2][0].setHSB( 2, null );
          this.array.vitrum[2][2].setHSB( 2, null );
          this.array.vitrum[2][3].setHSB( 0, null );
          this.array.vitrum[3][2].setHSB( 0, null );
          this.array.vitrum[3][3].setHSB( 2, null );
          break;
        case 10:
          this.array.vitrum[1][1].setHSB( 0, 6 );
          this.array.vitrum[1][3].setHSB( 0, 6 );
          this.array.vitrum[2][0].setHSB( 4, 5 );
          this.array.vitrum[2][4].setHSB( 4, 5 );
          break;
        case 11:
          this.array.vitrum[1][1].setHSB( 0, null );
          this.array.vitrum[1][3].setHSB( 0, null );
          this.array.vitrum[2][0].setHSB( 3, null );
          this.array.vitrum[2][4].setHSB( 3, null );
          break;
        case 12:
          this.array.vitrum[1][0].setHSB( null, 2 );
          this.array.vitrum[1][4].setHSB( null, 2 );
          this.array.vitrum[2][1].setHSB( null, 5 );
          this.array.vitrum[2][3].setHSB( null, 5 );
          break;
        case 13:
          this.array.vitrum[0][1].setHSB( 4, null );
          this.array.vitrum[0][3].setHSB( 4, null );
          this.array.vitrum[1][0].setHSB( 4, null );
          this.array.vitrum[1][2].setHSB( 4, null );
          this.array.vitrum[2][3].setHSB( 4, null );
          this.array.vitrum[3][4].setHSB( 4, null );
          break;
        case 14:
          this.array.vitrum[1][2].setHSB( 4, null );
          this.array.vitrum[1][3].setHSB( 2, null );
          this.array.vitrum[2][3].setHSB( 4, null );
          this.array.vitrum[2][2].setHSB( 2, null );
          break;
        case 15:
          this.array.vitrum[0][2].setHSB( null, 1 );
          this.array.vitrum[1][1].setHSB( null, 6 );
          this.array.vitrum[1][3].setHSB( null, 2 );
          this.array.vitrum[2][2].setHSB( null, 1 );
          this.array.vitrum[3][1].setHSB( null, 6 );
          this.array.vitrum[3][3].setHSB( null, 2 );
          break;
        case 16:
          this.array.vitrum[0][1].setHSB( 2, null );
          this.array.vitrum[0][3].setHSB( 1, null );
          this.array.vitrum[1][2].setHSB( 4, null );
          this.array.vitrum[2][1].setHSB( 2, null );
          this.array.vitrum[2][3].setHSB( 1, null );
          this.array.vitrum[3][2].setHSB( 4, null );
          break;
      };
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
