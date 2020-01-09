//playing field displayed on screen
class board{
  constructor ( offset ){
    this.const = {
    };
    this.var = {
      generalPurposeID: 0,
      personalPurpose: 0,
      border: 0
    };
    this.array = {
      personalPurpose: [],
      generalPurpose: [],
      border: [],
      vitrum: []
    };

    this.init();
  }

  init(){
    this.initGeneralPurposes();
    this.initPersonalPurposes();
    this.initBorders();
    this.demo();

    this.array.personalPurpose[10].setVisiable( true );
  }

  demo(){
    let center, hue, brightness;
    center = createVector( squareSize * 1.5, squareSize );
    hue = null;
    brightness = null;
    this.array.vitrum.push( new vitrum( center, hue, brightness ) );

    for( let i = 1; i < 7; i++ ){
      center = createVector( squareSize * ( i + 1 ) * 1.5 , squareSize );
      hue = null;
      brightness = i;
      this.array.vitrum.push( new vitrum( center, hue, brightness ) );
    }

    for( let i = 0; i < 5; i++ ){
      center = createVector( squareSize * ( 10.5 + i * 1.5 ), squareSize );
      hue = i;
      brightness = null;
      this.array.vitrum.push( new vitrum( center, hue, brightness ) );
    }
  }

  addGeneralPurpose( title, description, price ){
    this.array.generalPurpose.push( new generalPurpose( this.var.generalPurposeID, title, description, price ));
    this.var.generalPurposeID++;
  }

  initGeneralPurposes(){
    let title, description, price;
    title = 'Многообразие оттенков';
    description = 'Набор из 1 кубика каждой яркости на всём витраже';
    price = 5;
    this.addGeneralPurpose( title, description, price );

    title = 'Богатство оттенков в рядах';
    description = 'Ряды без повторяющейся яркости';
    price = 5;
    this.addGeneralPurpose( title, description, price );

    title = 'Богатство оттенков в колонках';
    description = 'Колонки без повторяющейся яркости';
    price = 4;
    this.addGeneralPurpose( title, description, price );

    title = 'Многообразие красок';
    description = 'Набор из 1 кубика каждого цвета на всём витраже';
    price = 4;
    this.addGeneralPurpose( title, description, price );


    title = 'Разноцветные ряды';
    description = 'Ряды без повторяющихся цветов';
    price = 6;
    this.addGeneralPurpose( title, description, price );


    title = 'Разноцветные колонки';
    description = 'Колонки без повторяющихся цветов';
    price = 5;
    this.addGeneralPurpose( title, description, price );

    title = 'Тёмные стёкла';
    description = 'Набор из 5 и 6 на всём витраже';
    price = 2;
    this.addGeneralPurpose( title, description, price );

    title = 'Затемнёмные стёкла';
    description = 'Набор из 3 и 4 на всём витраже';
    price = 2;
    this.addGeneralPurpose( title, description, price );

    title = 'Светлые стёкла';
    description = 'Набор из 1 и 2 на всём витраже';
    price = 2;
    this.addGeneralPurpose( title, description, price );

    title = 'Красочные диагноали';
    description = 'Число кубиков одного цвета, соседних по диагноали';
    price = null;
    this.addGeneralPurpose( title, description, price );

    title = 'Горизонтальная симметрия';
    description = 'Пары, одинаковые по цвету и яркости, отраженныые по горизонтали';
    price = 7;
    this.addGeneralPurpose( title, description, price );


    title = 'Симметрия красок (горизонталь)';
    description = 'Пары одинакового цвета, отражённые по горизонтале';
    price = 3;
    this.addGeneralPurpose( title, description, price );

    title = 'Симметрия оттенков (горизонталь)';
    description = 'Пары одинаковой яркости, отражённые по горизонтали';
    price = 3;
    this.addGeneralPurpose( title, description, price );

    title = 'Красочные соединении';
    description = 'Кубики одного цвета, соседние по диагноали в одной области';
    price = 2;
    this.addGeneralPurpose( title, description, price );

    title = 'Сплетение красок';
    description = 'Наборы сплетенных пар цветов. Каждый кубик считается 1 раз';
    price = 4;
    this.addGeneralPurpose( title, description, price );

    title = 'Баланс оттенков (вертикаль)';
    description = 'Пары одинаковой яркости на одинаковых местах в верхней и нищней половинах';
    price = 3;
    this.addGeneralPurpose( title, description, price );

    title = 'Баланс красок (вертикаль)';
    description = 'Пары одинакового цвета на одинаковых местах в верхней и нижнией половинах';
    price = 3;
    this.addGeneralPurpose( title, description, price );
  }

  addPersonalPurpose( title, description, price ){
    this.array.personalPurpose.push( new personalPurpose( this.var.personalPurpose, title, description, price ));
    this.var.personalPurpose++;
  }

  initPersonalPurposes(){
    let title, description, price;
    title = 'Оттенки жёлтого';
    description = 'Сумматрая яроксть жёлтых кубиков';
    price = null;
    this.addPersonalPurpose( title, description, price );

    title = 'Оттенки красного';
    description = 'Сумматрая яроксть красных кубиков';
    this.addPersonalPurpose( title, description, price );

    title = 'Оттенки фиолетого';
    description = 'Сумматрая яроксть фиолетовых кубиков';
    this.addPersonalPurpose( title, description, price );

    title = 'Оттенки зелёного';
    description = 'Сумматрая яроксть зеленых кубиков';
    this.addPersonalPurpose( title, description, price );

    title = 'Оттенки синего';
    description = 'Сумматрая яроксть синих кубиков';
    this.addPersonalPurpose( title, description, price );

    title = 'Раскопка';
    description = 'Суммарная яркость кубиков в указанных зонах';
    this.addPersonalPurpose( title, description, price );

    title = 'Скобы';
    this.addPersonalPurpose( title, description, price );

    title = 'Забор';
    this.addPersonalPurpose( title, description, price );

    title = 'Проём';
    this.addPersonalPurpose( title, description, price );

    title = 'Тоннель';
    this.addPersonalPurpose( title, description, price );

    title = 'Стена';
    this.addPersonalPurpose( title, description, price );
  }

  initBorders(){
  }

  addBorder( name, offset, size ){
    this.array.border.push( new border( this.var.borderID, name, offset, size ));
    this.var.borderID++;
  }

  buttonClickCheck(){
    let x = mouseX;// - this.offset.x;
    let y = mouseY;// - this.offset.y;
    let vec = createVector( x, y );
    let minDist = infinity;
    let buttonID = null;

    for( let i = 0; i < this.array.button.length; i++ )
      if ( vec.dist( this.array.button[i].center ) < minDist ){
        minDist = vec.dist( this.array.button[i].center );
        buttonID = i;
      }
    if ( minDist > cellSize / 2 || !this.array.button[buttonID].onScreen )
        return;
    this.update();
  }

  click(){
    this.buttonClickCheck();
  }


  //drawing game frame
  draw(){
    //draw borders
    for( let i = 0; i < this.array.border.length; i++ )
      this.array.border[i].draw();

    for( let i = 0; i < this.array.vitrum.length; i++ )
      this.array.vitrum[i].draw();

    for( let i = 0; i < this.array.generalPurpose.length; i++ )
      this.array.generalPurpose[i].draw();

    for( let i = 0; i < this.array.personalPurpose.length; i++ )
      this.array.personalPurpose[i].draw();
  }
}
