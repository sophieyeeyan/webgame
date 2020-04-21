var startTexture = PIXI.Texture.from('img/start1.png');
var startTextureDown = PIXI.Texture.from('img/start3.png');
var startTextureOver = PIXI.Texture.from('img/start2.png');

var covertexture = PIXI.Texture.fromVideo('vid/cover.mov');



const styleXXX = new PIXI.TextStyle({
    fontSize: 40,
    fontFamily: 'Courier',
    fill: 0x4A4879
});

const styleXXXX = new PIXI.TextStyle({
    fontSize: 20,
    fontFamily: 'Courier',
    fill: 0x4A4879
});

class StartScene extends Scene {

    constructor() {
    	super();

        var stage = new PIXI.Container();
        this.startButton = new PIXI.Sprite(startTexture);
        this.startButton.anchor.set(0.5);
        this.startButton.x = 1100;
        this.startButton.y = 27;
        this.startButton.interactive = true;
        this.startButton.buttonMode = true;
        this.startButton.normal = startTexture;
        this.startButton.over = startTextureOver;
        this.startButton.down = startTextureDown;
        this.startButton.on('pointerdown', this.onButtonDown);
        this.startButton.on('pointerup', this.onButtonUp);
        this.startButton.on('pointerover', this.onButtonOver);
        this.startButton.on('pointerout', this.onButtonOut);
        this.addChild(this.startButton);
        this.startButton.on('pointerdown', function() {
            $this.scenesManager.goToScene('game')

            });


        this.cover = new PIXI.Sprite(covertexture);
        this.cover.width = 1300;
        this.cover.height = 800;
        this.addChild(this.cover);


    }

     onButtonDown() {
        this.isdown = true;
        this.texture = this.down;
        this.alpha = 1;
    }

    onButtonUp() {
        this.isdown = false;
        if (this.isOver) {
            this.texture = this.over;
        }
        else {
            this.texture = this.normal;
        }
    }

    onButtonOver() {
        this.isOver = true;
        if (this.isdown) {
            return;
        }
        this.texture = this.over;
    }

    onButtonOut() {
        this.isOver = false;
        if (this.isdown) {
            return;
        }
        this.texture = this.normal;
    }

    
}







    	