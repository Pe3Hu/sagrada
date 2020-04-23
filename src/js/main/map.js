//scene for action
class map{
    constructor (){
      this.const = {
        a: cellSize,
        b: 17
      }
      this.array = {
        adjacency: [],
        place: [],
        trail: [],
        player: []
      };

      this.init();
    }

    init(){
      this.initAdjacency();
      this.initPlaces();
      this.initTrails();
      this.initCaravan();
      this.initPlayers();
      //this.moveCaravan();
    }

    initPlayers(){
      let k = 0;
      let offset = createVector( this.const.a, this.const.a );
      this.array.player.push( new player(k, offset) );
    }

    initCaravan(){
      let start = 12;
      this.caravan = new caravan( start, this.array.place[start].data.center.copy() );
    }

    moveCaravan(){
      let adjacency = [];
      let place = this.caravan.data.place;

      for( let i = 0; i < this.array.adjacency.length; i++ ){
        adjacency.push([]);
        if(this.array.adjacency[i][place].length> 0)
          adjacency[i].push(this.array.adjacency[i][place])
      }

      for( let i = 0; i < adjacency.length; i++ )
        for( let j = 0; j < adjacency[i].length; j++ )
          if( adjacency[i][j] == null ){

          }

      let end_index = 6;
      let end_center = this.array.place[end_index].data.center.copy();
      let speed = p5.Vector.sub(
        this.array.place[end_index].data.center,
        this.array.place[place].data.center);
      speed.mult(deltaTime);
      //console.log( adjacency)

      this.caravan.setTarget( speed, end_index, end_center );
    }

    initPlaces(){
      let index = 0;
      let l = 360;
      let offset = createVector(
        canvasSize.x / 2  - l / 2 , canvasSize.y * 0.75 - l / 2
      );
      let ns = [3,5,4,3];

      for( let i = 0; i < ns.length; i++ )
        for( let j = 0; j< ns[i] + 1; j++ ){
          let vec = createVector(
            offset.x + l / ns[i] * j,
            offset.y + l / ns.length * i
          );
          this.array.place.push( new place(index, vec.copy()));
          index++;
        }
    }

    initTrails(){
      let index = 0;
      for( let i = 0; i < this.array.adjacency.length; i++ )
        for( let j = 0; j < this.array.adjacency[i].length; j++ )
          for( let l = 0; l < this.array.adjacency[i][j].length; l++ )
            if(j<this.array.adjacency[i][j][l] ||
              this.check(j,this.array.adjacency[i][j][l])
            ){
              let begin = this.array.place[j].data.center;
              let end = this.array.place[this.array.adjacency[i][j][l]].data.center;
              let b_id = j;
              let e_id = this.array.adjacency[i][j][l];
              this.array.trail.push( new trail ( index, begin, end, b_id, e_id, i ) );
              index++;
            }

        console.log()
    }

    check(a,b){
      let flag = false;
      if( a == 11 && b == 10 )
        flag = true;
      if( a == 13 && b == 12 )
        flag = true;
      if( a == 14 && b == 13 )
        flag = true;
      return flag;
    }

    initAdjacency(){
      for( let i = 0; i < 4; i++ ){
        this.array.adjacency.push([]);
        for( let j = 0; j < 20; j++ ){
          this.array.adjacency[i].push([]);
        }
      }

      this.addAdjacency(0, 1, 5);
      this.addAdjacency(0, 3, 4);
      this.addAdjacency(0, 5, 6);
      this.addAdjacency(0, 7, 8);
      this.addAdjacency(0, 9, 14);
      this.addAdjacency(0, 12, 17);
      this.addAdjacency(0, 12, 18);
      this.addAdjacency(0, 13, 18);
      this.addAdjacency(0, 13, 14);
      this.addAdjacency(0, 16, 17);

      this.addAdjacency(1, 1, 6);
      this.addAdjacency(1, 2, 7);
      this.addAdjacency(1, 2, 8);
      this.addAdjacency(1, 3, 8);
      this.addAdjacency(1, 3, 9);
      this.addAdjacency(1, 8, 9);
      this.addAdjacency(1, 9, 10);
      this.addAdjacency(1, 14, 19);
      this.addAdjacency(1, 15, 19);
      this.addAdjacency(1, 18, 19);
      this.addAdjacency(1, 17, 18);

      this.addAdjacency(2, 1, 2);
      this.addAdjacency(2, 1, 3);
      this.addAdjacency(2, 2, 3);
      this.addAdjacency(2, 4, 10);
      this.addAdjacency(2, 5, 11);
      this.addAdjacency(2, 6, 16);
      this.addAdjacency(2, 7, 16);
      this.addAdjacency(2, 8, 13);
      this.addAdjacency(2, 9, 15);
      this.addAdjacency(2, 10, 15);
      this.addAdjacency(2, 12, 16);

      this.addAdjacency(3, 1, 4);
      this.addAdjacency(3, 1, 16);
      this.addAdjacency(3, 4, 19);
      this.addAdjacency(3, 7, 12);
      this.addAdjacency(3, 7, 13);
      this.addAdjacency(3, 12, 13);
      this.addAdjacency(3, 16, 19);
      this.addAdjacencySmall(3, 5, 6);
      this.addAdjacencySmall(3, 6, 7);
      this.addAdjacencySmall(3, 11, 16);
      this.addAdjacencySmall(3, 12, 11);
      this.addAdjacencySmall(3, 15, 14);
      this.addAdjacencySmall(3, 14, 13);
    }

    addAdjacency(type, a, b){
      this.array.adjacency[type][a-1].push(b-1);
      this.array.adjacency[type][b-1].push(a-1);
    }

    addAdjacencySmall(type, a, b){
      this.array.adjacency[type][a-1].push(b-1);
    }

    draw(){
      for( let i = 0; i < this.array.trail.length; i++ )
        this.array.trail[i].draw();
      for( let i = 0; i < this.array.place.length; i++ )
        this.array.place[i].draw();

      this.caravan.draw();

      for( let i = 0; i < this.array.player.length; i++ )
        this.array.player[i].draw();
    }

}
