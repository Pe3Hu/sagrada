//
class place{
  constructor ( index, center ){
    this.const = {
      index: index,
      a: cellSize
    }
    this.array = {
    };
    this.data = {
      name: null,
      visited: 0,
      center: center
    };

    this.init();
  }

  init(){
    this.initName();
    this.setColor();
  }

  initName(){
    switch (this.const.index) {
      case 0:
        this.data.name = 'Hora-Pena';
        break;
      case 1:
        this.data.name = 'Septris';
        break;
      case 2:
        this.data.name = 'Methritis';
        break;
      case 3:
        this.data.name = 'Rhobanis';
        break;
      case 4:
        this.data.name = 'Bulo-Mapo';
        break;
      case 5:
        this.data.name = 'Wahi-Wana';
        break;
      case 6:
        this.data.name = 'Mana-Hatu';
        break;
      case 7:
        this.data.name = 'Kamoptis';
        break;
      case 8:
        this.data.name = 'Joztakitl';
        break;
      case 9:
        this.data.name = 'Kakotapl';
        break;
      case 10:
        this.data.name = 'Vanu-Tabu';
        break;
      case 11:
        this.data.name = 'Balabatung';
        break;
      case 12:
        this.data.name = 'Base';
        break;
      case 13:
        this.data.name = 'Qualtops';
        break;
      case 14:
        this.data.name = 'Etintaklop';
        break;
      case 15:
        this.data.name = 'Aminadang';
        break;
      case 16:
        this.data.name = 'Taratarong';
        break;
      case 15:
        this.data.name = 'Kilitiping';
        break;
      case 16:
        this.data.name = 'Teltoqlut';
        break;
    }
  }

  setColor(){
    switch ( this.data.visited ) {
      case 0:
        this.data.h = 37;
        this.data.s = 0.64*colorMax;
        this.data.v = 0.95*colorMax;
        break;
      case 1:
        this.data.h = 11;
        this.data.s = 0.85*colorMax;
        this.data.v = colorMax;
        break;
    }
  }

  draw(){
    let offset = createVector();
    stroke(this.data.h, this.data.s, this.data.v );
    fill(this.data.h, this.data.s, this.data.v );
    ellipse(this.data.center.x, this.data.center.y, this.const.a);

    let txt = (this.const.index+1).toString();
    fill(0);
    text( txt,
      offset.x + this.data.center.x,
      offset.y + this.data.center.y + fontSize / 3 );
  }
}
