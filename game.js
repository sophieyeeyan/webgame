const buttons = [
    {img:'img/button1.png', w:78, h:78},
    {img:'img/button2.png', w:78, h:78},
    {img:'img/button3.png', w:78, h:78},
    {img:'img/button4.png', w:78, h:78},
    {img:'img/button5.png', w:78, h:78},
];

const codes = [
    "012",
    "0334",
    "0112",
]

var textureButton = PIXI.Texture.fromImage('img/start1.png');
var textureButtonDown = PIXI.Texture.fromImage('img/start3.png');
var textureButtonOver = PIXI.Texture.fromImage('img/start2.png');


class GameScene extends Scene {

    constructor() {
       
        super();
        const $this = this;
        this.timer;
        this.playing = true;
        this.c = 0;
        this.people = [];
        this.score = 0;
        this.input = "";
        this.inputContainer = new PIXI.Container();
        this.addChild(this.inputContainer);
        this.buttons();
        this.tweetButton = new Button('img/sendbutton.png');
        this.tweetButton.x = 850;
        this.tweetButton.y = 700;
        this.tweetButton.width = 130;
        this.tweetButton.height = 50;
        this.addChild(this.tweetButton);
        this.tweetButton.on('pointerdown', function() {
            $this.submitCode();
        });
        this.startButton = new PIXI.Sprite(textureButton);
        this.startButton.anchor.set(0.5);
        this.startButton.x = 1080;
        this.startButton.y = 27;
        this.startButton.interactive = true;
        this.startButton.buttonMode = true;
        this.startButton.on('pointerdown', this.onButtonDown);
        this.startButton.on('pointerup', this.onButtonUp);
        this.startButton.on('pointerover', this.onButtonOver);
        this.startButton.on('pointerout', this.onButtonOut);
        this.addChild(this.startButton);

        //testing adding text
        this.timerText = new PIXI.Text('');
        this.timerText.x = 50;
        this.timerText.y = 80;
        this.addChild(this.timerText);

        this.timerText.style.fontFamily = 'Courier';
        this.timerText.style.fontSize = 40;
        this.timerText.style.fill = 0x4A4879;
    
        this.startTimer(60 * 4);


        this.scoreText = new PIXI.Text(this.score);
        this.scoreText.x = 1050;
        this.scoreText.y = 80;
        this.addChild(this.scoreText);
        this.scoreText.style.fontFamily = 'Courier';
        this.scoreText.style.fontSize = 40;
        this.scoreText.style.fill = 0x4A4879;
     

        this.h1 = new PIXI.Text('Time Remaining');
        this.h1.x = 50;
        this.h1.y = 55;
        this.addChild(this.h1);
        this.h1.style.fontFamily = 'Courier';
        this.h1.style.fontSize = 20;
        this.h1.style.fill = 0x4A4879;

        this.h2 = new PIXI.Text('Popularity Score');
        this.h2.x = 1050;
        this.h2.y = 55;
        this.addChild(this.h2);
        this.h2.style.fontFamily = 'Courier';
        this.h2.style.fontSize = 20;
        this.h2.style.fill = 0x4A4879;

        this.line = new PIXI.Graphics(this.line);
        this.line.lineStyle(2, 0x4A4879, 1);
        this.line.position.x = 0;
        this.line.position.y = 450;
        this.line.moveTo(0,5);
        this.line.lineTo(1300, 5);
        this.addChild(this.line);

        this.manual1 = new PIXI.Sprite.from('img/manual1.png');
        this.manual1.anchor.set(0.5);
        this.manual1.x = 1150;
        this.manual1.y = 640;
        this.autoresize = true;
        this.addChild(this.manual1);

        this.cyber = new PIXI.Sprite.from('img/cyber.png');
        this.cyber.anchor.set(0.5);
        this.cyber.x = this.width/2;
        this.cyber.y = 200;
        this.autoresize = true;
        this.addChild(this.cyber);

        this.side = new PIXI.Sprite.from('img/side.png');
        this.side.anchor.set(0.5);
        this.side.width = 30;
        this.side.height = 300;
        this.side.x = 1285;
        this.side.y = 150;
        this.autoresize = true;
        this.addChild(this.side);

       
    }

    onButtonDown() {
    this.isdown = true;
    this.texture = textureButtonDown;
    this.alpha = 1;
    }

 onButtonUp() {
    this.isdown = false;
    if (this.isOver) {
        this.texture = textureButtonOver;
    }
    else {
        this.texture = textureButton;
    }
}

 onButtonOver() {
    this.isOver = true;
    if (this.isdown) {
        return;
    }
    this.texture = textureButtonOver;
}

 onButtonOut() {
    this.isOver = false;
    if (this.isdown) {
        return;
    }
    this.texture = textureButton;
}


    submitCode() {
        for(var p of this.people) {
            if(this.input == p.type) {
                // alert('cool');
                console.log(p)
                this.removeChild(p.sprite);
                this.people.splice(p.i, 1);
                this.score += 8;
                this.scoreText.text = this.score;
                this.spawn();
                break;
            } else {
                alert('nope');
            }
        }
        while(this.inputContainer.children[0]) { 
            this.inputContainer.removeChild(this.inputContainer.children[0]); 
        }
        this.input = "";
    }

    startTimer(duration) {
        const $this = this;
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            $this.timerText.text = minutes + ":" + seconds;
            //display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }


    buttons() {
        const $this = this;
        for(var i=0; i<buttons.length; i++) {
            var button = new Button(buttons[i].img);
            button.x = 10+(i * buttons[i].w);
            button.y = 500;
            button.number = i;
            this.addChild(button);
            button.on('pointerdown', function() {
                if(!$this.playing) return;
                $this.typeCode(this);
            });
        }
    }

    typeCode(button) {
        if(this.input.length > 4) return;
        const b = new PIXI.Sprite.from(buttons[button.number].img);
        b.x = 30+(this.input.length * buttons[button.number].w);
        b.y = 0;
        this.inputContainer.addChild(b);
        this.input+=button.number;
        console.log(this.input);
    }

    spawn() {
        var width = 30;
        var height = 30;
        var coordinates = [
            [730,215],
            [782, 143],
            [794, 207],
            [669, 274],
            [583, 230],
            [750, 155],
            [794, 234],
            [830, 294],
            [760, 169],
            [859,366]];
            var c = coordinates[Math.floor(Math.random() * 8)];
        var p = new Person(c[0],c[1], codes[Math.floor(Math.random()*codes.length)], this.people.length, width, height);
        



    
        console.log(p);
        var s = p.create();
        this.addChild(s);
        this.people.push(p);
    }

    update() {
        super.update();
        this.c +=1;
    }

}