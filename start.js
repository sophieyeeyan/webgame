var abtnextTexture = PIXI.Texture.from('img/abtnext1.png');
var abtnextTextureDown = PIXI.Texture.from('img/abtnext3.png');
var abtnextTextureOver = PIXI.Texture.from('img/abtnext2.png');

var starttexture = PIXI.Texture.fromVideo('vid/cover.mov');



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
        this.cover = new PIXI.Sprite(starttexture);
        this.cover.width = 1300;
        this.cover.height = 800;
        this.addChild(this.cover);

animate();

//function animate(){

    // render the stage
    //renderer.render(stage);

    //requestAnimationFrame(animate);
}

  }






    	