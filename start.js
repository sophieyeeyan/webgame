var yellowTexture = PIXI.Texture.from('imgstart/startbutton1.png');
var yellowTextureDown = PIXI.Texture.from('imgstart/startbutton2.png');
var yellowTextureOver = PIXI.Texture.from('imgstart/startbutton3.png');

var enterTexture = PIXI.Texture.from('imgstart/enter1.png');
var enterTextureDown = PIXI.Texture.from('imgstart/enter2.png');
var enterTextureOver = PIXI.Texture.from('imgstart/enter3.png');

var arrowTexture = PIXI.Texture.from('imgstart/arrow1.png');
var arrowTextureDown = PIXI.Texture.from('imgstart/arrow2.png');
var arrowTextureOver = PIXI.Texture.from('imgstart/arrow2.png');

var infoTexture = PIXI.Texture.from('imgstart/about1.png');
var infoTextureDown = PIXI.Texture.from('imgstart/about3.png');
var infoTextureOver = PIXI.Texture.from('imgstart/about2.png');

var rTexture = PIXI.Texture.from('imgstart/research1.png');
var rTextureDown = PIXI.Texture.from('imgstart/research3.png');
var rTextureOver = PIXI.Texture.from('imgstart/research2.png');

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
        const $this = this;

        this.thumb = new PIXI.Sprite.from('imgstart/thumbnail.png');
        this.thumb.x = 0;
        this.thumb.y = 0;
        this.thumb.width = 1300;
        this.thumb.height = 800;
        this.autoresize = true;
        this.addChild(this.thumb);



        this.entergameButton = new PIXI.Sprite(enterTexture);
        this.entergameButton.anchor.set(0.5);
        this.entergameButton.x = 650;
        this.entergameButton.y = 650;
        this.entergameButton.interactive = true;
        this.entergameButton.buttonMode = true;
        this.entergameButton.normal = enterTexture;
        this.entergameButton.over = enterTextureOver;
        this.entergameButton.down = enterTextureDown;
        this.entergameButton.on('pointerdown', this.onButtonDown);
        this.entergameButton.on('pointerup', this.onButtonUp);
        this.entergameButton.on('pointerover', this.onButtonOver);
        this.entergameButton.on('pointerout', this.onButtonOut);
        this.addChild(this.entergameButton);
        this.entergameButton.on('pointerdown', function() {
            $this.onPlayVideo1();
            $this.removeChild($this.entergameButton);
        });

        this.infoButton = new PIXI.Sprite(infoTexture);
        this.infoButton.anchor.set(0.5);
        this.infoButton.x = 920;
        this.infoButton.y = 450;
        this.infoButton.interactive = true;
        this.infoButton.buttonMode = true;
        this.infoButton.normal = infoTexture;
        this.infoButton.over = infoTextureOver;
        this.infoButton.down = infoTextureDown;
        this.infoButton.on('pointerdown', this.onButtonDown);
        this.infoButton.on('pointerup', this.onButtonUp);
        this.infoButton.on('pointerover', this.onButtonOver);
        this.infoButton.on('pointerout', this.onButtonOut);
        this.addChild(this.infoButton);
        this.infoButton.on('pointerdown', function() {
            //$this.onPlayVideo1();
            //$this.removeChild($this.entergameButton);
        });

        this.reButton = new PIXI.Sprite(rTexture);
        this.reButton.anchor.set(0.5);
        this.reButton.x = 1100;
        this.reButton.y = 450;
        this.reButton.interactive = true;
        this.reButton.buttonMode = true;
        this.reButton.normal = rTexture;
        this.reButton.over = rTextureOver;
        this.reButton.down = rTextureDown;
        this.reButton.on('pointerdown', this.onButtonDown);
        this.reButton.on('pointerup', this.onButtonUp);
        this.reButton.on('pointerover', this.onButtonOver);
        this.reButton.on('pointerout', this.onButtonOut);
        this.addChild(this.reButton);
        this.reButton.on('pointerdown', function() {
            //$this.onPlayVideo1();
            //$this.removeChild($this.entergameButton);
        });
    
        this.startgameButton = new PIXI.Sprite(yellowTexture);
        this.startgameButton.anchor.set(0.5);
        this.startgameButton.x = 650;
        this.startgameButton.y = 725;
        this.startgameButton.interactive = true;
        this.startgameButton.buttonMode = true;
        this.startgameButton.normal = yellowTexture;
        this.startgameButton.over = yellowTextureOver;
        this.startgameButton.down = yellowTextureDown;
        this.startgameButton.on('pointerdown', this.onButtonDown);
        this.startgameButton.on('pointerup', this.onButtonUp);
        this.startgameButton.on('pointerover', this.onButtonOver);
        this.startgameButton.on('pointerout', this.onButtonOut);
        this.startgameButton.on('pointerdown', function() {
            $this.onPlayVideo3();
            $this.removeChild($this.startgameButton);

        });

        this.storyButton = new PIXI.Sprite(arrowTexture);
        this.storyButton.anchor.set(0.5);
        this.storyButton.x = 1200;
        this.storyButton.y = 700;
        this.storyButton.interactive = true;
        this.storyButton.buttonMode = true;
        this.storyButton.normal = arrowTexture;
        this.storyButton.over = arrowTextureOver;
        this.storyButton.down = arrowTextureDown;
        this.storyButton.on('pointerdown', this.onButtonDown);
        this.storyButton.on('pointerup', this.onButtonUp);
        this.storyButton.on('pointerover', this.onButtonOver);
        this.storyButton.on('pointerout', this.onButtonOut);
        this.storyButton.on('pointerdown', function() {
            $this.removeChild($this.storyButton);
            $this.removeChild($this.onPlayVideo4);
            scenesManager.goToScene('game');

        });


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

    onPlayVideo1() {
        const $this = this;
        const covertexture = PIXI.Texture.from('vid/credit.mp4');

        
        const videoSprite = new PIXI.Sprite(covertexture);

        videoSprite.width = 1300;
        videoSprite.height = 800;
        videoSprite.preload = "auto";


        this.addChild(videoSprite);

        setTimeout(function() {
                    $this.removeChild($this.onPlayVideo1);
                    $this.onPlayVideo2();
                    $this.addChild($this.startgameButton);
                },6014)

    }


     onPlayVideo2() {
            const nexttexture = PIXI.Texture.from('vid/cover2.mp4');

            var video = nexttexture.baseTexture.resource.source; 
            video.loop = 'loop';
            // create a new Sprite using the video texture (yes it's that easy)
            const videoSprite2 = new PIXI.Sprite(nexttexture);

            videoSprite2.width = 1300;
            videoSprite2.height = 800;
            videoSprite2.preload = "auto";

            this.addChild(videoSprite2);


        }

     onPlayVideo3() {
            const $this = this;
            const cover3texture = PIXI.Texture.from('vid/cover3.mp4');

   
            const videoSprite3 = new PIXI.Sprite(cover3texture);

            videoSprite3.width = 1300;
            videoSprite3.height = 800;
            videoSprite3.preload = "auto";

            this.addChild(videoSprite3);

            setTimeout(function() {
                    $this.removeChild($this.onPlayVideo3);
                    $this.onPlayVideo4();
                },8050)


        }

        onPlayVideo4() {
            const $this = this;
            const onetexture = PIXI.Texture.from('vid/lv1.mp4');

            var video2 = onetexture.baseTexture.resource.source; 
            //video.loop = 'loop';
            // create a new Sprite using the video texture (yes it's that easy)
            var videoSprite4 = new PIXI.Sprite(onetexture);

            videoSprite4.width = 1300;
            videoSprite4.height = 800;
            videoSprite4.preload = "auto";

            this.addChild(videoSprite4);

            setTimeout(function() {
                     $this.addChild($this.storyButton);
                     $video2.pause()
                },1000)

        }






    //addToPIXI() {
        //PIXI.Texture.fromVideo('vid/cover.mp4');
        // continue from here ...
    //}

    
}









        