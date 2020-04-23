//
class caravan{
  constructor (place, center){
    this.const = {
      a: cellSize
    }
    this.array = {
      vertex: []
    };
    this.data = {
      center: center,
      place: place,
      speed: null,
      h: 310,
      s: 0.2*colorMax,
      v: colorMax
    };

    this.init();
  }

  init(){
  }

  setTarget( speed, index, end ){
    this.data.speed = speed;
    this.data.index = index;
    this.data.end = end;
  }

  checkTarget(){
    if( this.data.speed != null ){
      this.data.center.add( this.data.speed );
      let d = dist( this.data.center.x, this.data.center.y, this.data.end.x, this.data.end.y );

      if( d < this.data.speed.mag() ){
          this.data.center = this.data.end.copy();
          this.data.place = this.data.index;
          this.data.speed = null;
          this.data.end = null;
          this.data.index = null;
      }
    }
  }


  draw(){
    this.checkTarget();

    let offset = createVector();
    stroke(this.data.h, this.data.s, this.data.v );
    fill(this.data.h, this.data.s, this.data.v );
    ellipse(this.data.center.x, this.data.center.y, this.const.a);

    let txt = 'C';
    fill(0);
    text( txt,
      offset.x + this.data.center.x,
      offset.y + this.data.center.y + fontSize / 3 );
  }
}
