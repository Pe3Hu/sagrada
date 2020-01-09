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
      center: createVector()
    };
    this.array = {
      vitrum: [],
      dot: []
    };

    this.var.center = createVector( squareSize * 3.5, squareSize * 4 );
    this.init();
  }

  init(){
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
        grid = true;
        break;
    };

    if( grid )
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
      };



  }

  setVisiable( visiable ){
    this.var.visiable = visiable;
  }


  draw(){
    if( this.var.visiable )
      for( let i = 0; i < this.array.vitrum.length; i++ )
        for( let j = 0; j < this.array.vitrum[i].length; j++ )
          this.array.vitrum[i][j].draw();
  }
}
