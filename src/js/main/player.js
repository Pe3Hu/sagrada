//
class player{
  constructor (index, offset){
    this.const = {
      index: index,
      a: cellSize
    }
    this.array = {
      dot: [],
      hand: [ 0,0,0,0 ],
      treasure: [],
      destiny: [],
      curse: []
    };
    this.data = {
      offset: offset
    };
    /*{
      'yak': 0,
      'kamel': 0,
      'gonogo': 0,
      'kayak': 0,
      'drako': 0
    }*/

    this.init();
  }

  init(){
    this.initDots();
  }

  initDots(){
    for ( let i = 0; i < this.array.hand.length; i++) {
      this.array.dot.push( createVector(
        this.data.offset.x + i * this.const.a,
        this.data.offset.y + fontSize / 3 + this.const.a / 2
      ) );
    }
  }

  switchHue(i){
    switch (i) {
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

  draw(){
      fill(0);
      let txt = "Player " + ( this.const.index + 1 ).toString();
      text( txt, this.data.offset.x + this.const.a*2, this.data.offset.y + fontSize / 3 );

      txt = "Destiny";
      text( txt, this.data.offset.x + this.const.a*2, this.data.offset.y + this.const.a*2.5 + fontSize / 3 );

      txt = "Curse";
      text( txt, this.data.offset.x + this.const.a*2, this.data.offset.y + this.const.a*4 + fontSize / 3 );
      
      txt = "Treasure";
      text( txt, this.data.offset.x + this.const.a*2, this.data.offset.y + this.const.a*5.5 + fontSize / 3 );

      for ( let i = 0; i < this.array.dot.length; i++){
        this.switchHue(i);
        stroke( this.data.hue, colorMax , colorMax * 0.9 );
        fill( this.data.hue, colorMax, colorMax * 0.9 );
        rect(this.array.dot[i].x, this.array.dot[i].y, this.const.a, this.const.a);

        txt = this.array.hand[i].toString();
        fill(0);
        text( txt,
          this.array.dot[i].x + this.const.a / 2,
          this.array.dot[i].y + this.const.a / 2 + fontSize / 3 );
      }
  }
}
