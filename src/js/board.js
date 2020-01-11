//playing field displayed on screen
class board{
  constructor ( offset ){
    this.const = {
    };
    this.var = {
      generalPurposeID: 0,
      personalPurpose: 0,
      instrument: 0,
      border: 0,
      sgw: 0
    };
    this.array = {
      personalPurpose: [],
      generalPurpose: [],
      instrument: [],
      border: [],
      vitrum: [],
      round: [],
      sgw: []
    };

    this.init();
  }

  init(){
    this.initGeneralPurposes();
    this.initPersonalPurposes();
    this.initInstruments();
    this.initBorders();
    this.initSGWs();
    this.demo();

    this.array.sgw[5].setVisiable( true );
  }

  demo(){
    let center, hue, brightness;
    center = createVector( squareSize * 1.5, squareSize );
    hue = null;
    brightness = null;
    this.array.vitrum.push( new vitrum( center, hue, brightness ) );

    for( let i = 1; i < 7; i++ ){
      center = createVector( squareSize * ( i ) * 1.5 , squareSize * 2.5  );
      hue = null;
      brightness = i;
      this.array.vitrum.push( new vitrum( center, hue, brightness ) );
    }

    for( let i = 0; i < 5; i++ ){
      center = createVector( squareSize * ( i + 1 ) * 1.5, squareSize );
      hue = i;
      brightness = null;
      this.array.vitrum.push( new vitrum( center, hue, brightness ) );
    }

    for( let i = 1; i < 10; i++ ){
      center = createVector( squareSize * ( i ) * 1.5 , squareSize * 4 );
      this.array.round.push( new round( center, i ) );
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

  addSGW( titleA, titleB, expansion, complexityA, complexityB ){
    this.array.sgw.push( new sgw( this.var.sgw, titleA, titleB, expansion, complexityA, complexityB ) );
    this.var.sgw++;
  }

  initSGWs(){
    let titleA, titleB, complexityA, complexityB, expansion;
    titleA = 'Цветовая капель';
    titleB = 'Божественный свет';
    complexityA = 3;
    complexityB = null;
    expansion = 'basic';
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Батлью';
    titleB = 'Ловец теней';
    complexityA = 5;
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Благолепие цвета';//
    titleB = 'Священная заря';
    complexityA = 4;
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Учтивость';
    titleB = 'Величие рассвета';
    complexityA = 5;
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Достоинство';
    titleB = 'Доблесть';
    complexityA = 5;
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Небесное сияние';
    titleB = 'Всположи света';
    complexityA = 5;
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Стойкость';
    titleB = 'Усердие';
    complexityA = 5;
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Симфония цвета';
    titleB = 'Живая вода';
    complexityA = 6;
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Пламя свечи';
    titleB = '';
    complexityA = 5;
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Белъесгуард';
    titleB = '';
    complexityA = 3;
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Калейдоскопический сон';
    titleB = '';
    complexityA = 4;
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Аура солнца';
    titleB = '';
    complexityA = 6;
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Свет';
    titleB = 'Шадом';
    complexityA = 3;
    complexityB = 6;
    expansion = 'second';
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Cолнце';
    titleB = 'Природа';
    expansion = 'second';
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Романский стиль';
    titleB = 'Борокко';
    expansion = 'second';
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Надежда';
    titleB = 'Радость';
    expansion = 'second';
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Щедрость';
    titleB = 'Гармония';
    expansion = 'third';
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Солнечный свет';
    titleB = 'Тьма';
    expansion = 'third';
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Komorebi';
    titleB = 'Alpenglow';
    complexityA = 6;
    complexityB = 6;
    expansion = 'third';
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Бальбоа-Бэй';
    titleB = 'Классика витража';
    complexityA = 4;
    complexityB = 5;
    expansion = 'third';
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Game Boy Geek';
    titleB = 'Game Boy Geek';
    complexityA = 6;
    complexityB = 3;
    expansion = 'fourth';
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Game Boy Geek';
    titleB = 'Game Boy Geek';
    expansion = 'fifth';
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Man vs Meeple';
    titleB = 'Man vs Meeple';
    expansion = 'sixth';
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );

    titleA = 'Intertnational Tabletop Day';
    titleB = 'Intertnational Tabletop Day';
    complexityA = 5;
    expansion = 'seventh';
    this.addSGW( titleA, titleB, expansion, complexityA, complexityB );
  }

  addInstrument( title, description, expansion ){
    this.array.instrument.push( new instrument( this.var.instrument, title, description, expansion ));
    this.var.instrument++;
  }

  initInstruments(){
    let title, description, expansion;
    title = 'Кусачки для обрезки кромок';
    description = 'Взяв кубик из резерва уменьшите или увеличьте его яркость на 1 (1 не меняется на 6, а 6 на 1)';
    expansion = 'basic';
    this.addInstrument( title, description, expansion );

    title = 'Кисть для эгломизе';
    description = 'Переместите любой 1 кубик в витраже, игнорируя требования по цвету, но соблюдая все остальные правила размещения кубиков';
    expansion = 'basic';
    this.addInstrument( title, description, expansion );

    title = 'Разглаживатель фольги';
    description = 'Переместите любой 1 кубик в витраже, игнорируя требования по яркости, но соблюдая все остальные правила размещения кубиков';
    expansion = 'basic';
    this.addInstrument( title, description, expansion );

    title = 'Прижим';
    description = 'Переместите ровно 2 кубика, соблюдая все правила размещения кубиков';
    expansion = 'basic';
    this.addInstrument( title, description, expansion );

    title = 'Стеклорез';
    description = 'Взяв кубик из резерва, поменяйте его на любой кубик со счетчика раундов';
    expansion = 'basic';
    this.addInstrument( title, description, expansion );

    title = 'Кисточка для флюкса';
    description = 'Взяв кубик из резерва перебросьте его. Если его нельзя разместить верните его в резерв';
    expansion = 'basic';
    this.addInstrument( title, description, expansion );

    title = 'Стекольный молоток';
    description = 'Перебросьте все кубики в резерве. Можно использовать только на втором ходу текущего раунда перед выбором кубика';
    expansion = 'basic';
    this.addInstrument( title, description, expansion );

    title = 'Щипцы для стекла';
    description = 'После своего первого хода в текущем раунде тут же возьмите кубик из резерва. Пропустите свой второй ход';
    expansion = 'basic';
    this.addInstrument( title, description, expansion );

    title = 'Угольник для резки стекла';
    description = 'Взяв кубик из резерва, поместите его в ячейку, не соседствующую ни с каким другим кубиком, соблюдая все остальные правила размещения кубиков';
    expansion = 'basic';
    this.addInstrument( title, description, expansion );

    title = 'Шлифовальный камень';
    description = 'Взяв кубик из резевра, переверните его на противоположную грань. (6 в 1, 5 в 2, 4 в 3, и т.д.)';
    expansion = 'basic';
    this.addInstrument( title, description, expansion );

    title = 'Растворитель флюкса';
    description = 'Взяв кубик из резерва, верните его в мешочек и достаньте оттуда 1 кубик. Верните его яркость и поместите его на либо на витраж, соблюдая все правила размещения, либо в резерв';
    expansion = 'basic';
    this.addInstrument( title, description, expansion );

    title = 'Режущий ролик';
    description = 'Переместите до 2 одного цвета, совпадающих по цвету с кубиком на счетчике раундов, соблюдая все правила размещения кубиков';
    expansion = 'basic';
    this.addInstrument( title, description, expansion );

    title = 'Стеклорез-циркуль';
    description = 'Взяв кубик из резерва, поменяйте его на любой кубик со своей розы кубиков';
    expansion = 'second';
    this.addInstrument( title, description, expansion );

    title = 'Щипцы для свинца';
    description = 'Перебросьте до 2 кубиков со своей розы кубиков';
    expansion = 'second';
    this.addInstrument( title, description, expansion );

    title = 'Быстрорез';
    description = 'Заберите 1 кубик у любого игрока. Отдайте ему кубик того же цвета или яркости. Он может разместить его, игнорируя требования по цвету и яркости. Можно использовать только до 7-го раунда';
    expansion = 'third';
    this.addInstrument( title, description, expansion );
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

    for( let i = 0; i < this.array.round.length; i++ )
      this.array.round[i].draw();

    for( let i = 0; i < this.array.sgw.length; i++ )
      this.array.sgw[i].draw();

    for( let i = 0; i < this.array.instrument.length; i++ )
      this.array.instrument[i].draw();
  }
}
