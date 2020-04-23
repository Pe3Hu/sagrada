//possible route
class trail{
  constructor ( index, begin, end, b_id, e_id, type ){
    this.const = {
      index: index,
      add: cellSize * 0.25
    };
    this.data = {
      begin: begin,
      end: end,
      type: type,
      b: b_id,
      e: e_id,
      hue: null
    };
    this.vertex = {
      a: null,
      b: null,
      c: null,
      d: null
    };
    this.init();
  }

  //define the intersection points for the inscribed circles
  init(){
    this.vertex.a = this.data.begin.copy();
    this.vertex.b = this.data.begin.copy();
    this.vertex.c = this.data.end.copy();
    this.vertex.d = this.data.end.copy();
    this.vertex.e = this.data.begin.copy();
    this.vertex.f = this.data.begin.copy();
    this.vertex.g = this.data.end.copy();
    this.vertex.h = this.data.end.copy();

    this.vertex.a.x += this.const.add;
    this.vertex.b.x -= this.const.add;
    this.vertex.c.x += this.const.add;
    this.vertex.d.x -= this.const.add;
    this.vertex.e.y += this.const.add;
    this.vertex.f.y -= this.const.add;
    this.vertex.g.y += this.const.add;
    this.vertex.h.y -= this.const.add;

    this.initHue();
  }

  initHue(){
    switch (this.data.type) {
      case 0:
        this.data.hue = 120;
        break;
      case 1:
        this.data.hue = 60;
        break;
      case 2:
        this.data.hue = 270;
        break;
      case 3:
        this.data.hue = 200;
        break;
    }
  }

  check(){
    let flag = true;
    if( this.data.type == 3 )
      if( this.data.b == 4 && this.data.e == 5 )
        flag = false;
      else if ( this.data.b == 13 && this.data.e == 12 )
        flag = false;
      else if ( this.data.b == 0 && this.data.e == 3 )
        flag = false;
      else if ( this.data.b == 0 && this.data.e == 15 )
        flag = false;
      else if ( this.data.b == 3 && this.data.e == 18 )
        flag = false;
      else if ( this.data.b == 15 && this.data.e == 18 )
        flag = false;

    if( this.data.type == 2 )
      if( this.data.b == 0 && this.data.e == 3 )
        flag = false;
      else if ( this.data.b == 6 && this.data.e == 15 )
        flag = false;
    return flag;
  }

  //drawing trail
  draw(){
    let offset = createVector();
    stroke( this.data.hue, colorMax , colorMax * 0.9 );
    fill( this.data.hue, colorMax, colorMax * 0.9 );

    if( this.check() ){
      triangle( offset.x + this.vertex.a.x, offset.y + this.vertex.a.y,
        offset.x + this.vertex.b.x, offset.y + this.vertex.b.y,
        offset.x + this.vertex.c.x, offset.y + this.vertex.c.y );
      triangle( offset.x + this.vertex.d.x, offset.y + this.vertex.d.y,
        offset.x + this.vertex.b.x, offset.y + this.vertex.b.y,
        offset.x + this.vertex.c.x, offset.y + this.vertex.c.y );
      triangle( offset.x + this.vertex.e.x, offset.y + this.vertex.e.y,
        offset.x + this.vertex.f.x, offset.y + this.vertex.f.y,
        offset.x + this.vertex.g.x, offset.y + this.vertex.g.y );
      triangle( offset.x + this.vertex.h.x, offset.y + this.vertex.h.y,
        offset.x + this.vertex.f.x, offset.y + this.vertex.f.y,
        offset.x + this.vertex.g.x, offset.y + this.vertex.g.y );
    }
  }
}
