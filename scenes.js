const b_gap = 10;
const buttons = [

    {img:'img/button1.png', w:134, h:72, x:b_gap, y:0, speechImg:'img/speech21.png'},
    {img:'img/button2.png', w:72, h:72, x:134+b_gap, y:0, speechImg:'img/speech2.png'},
    {img:'img/button3.png', w:72, h:72, x:134+72+b_gap, y:0, speechImg:'img/speech3.png'},
    {img:'img/button4.png', w:72, h:72, x:134+72+72+b_gap, y:0, speechImg:'img/speech4.png'},
    {img:'img/button5.png', w:72, h:72, x:b_gap, y:60+b_gap, speechImg:'img/speech5.png'},
    {img:'img/button6.png', w:72, h:72, x:72+b_gap, y:60+b_gap, speechImg:'img/speech6.png'},
    {img:'img/button7.png', w:72, h:72, x:(72*2)+b_gap, y:60+b_gap, speechImg:'img/speech7.png'},
    {img:'img/button8.png', w:72, h:72, x:(72*3)+b_gap, y:60+b_gap, speechImg:'img/speech8.png'},
    {img:'img/button9.png', w:72, h:72, x:(72*4)+b_gap, y:60+b_gap, speechImg:'img/speech9.png'},
    {img:'img/button10.png', w:72, h:72, x:b_gap, y:(65*2)+b_gap, speechImg:'img/speech10.png'},
    {img:'img/button11.png', w:72, h:72, x:72+b_gap, y:(65*2)+b_gap, speechImg:'img/speech11.png'},
    {img:'img/button12.png', w:72, h:72, x:(72*2)+b_gap, y:(65*2)+b_gap, speechImg:'img/speech12.png'},
    {img:'img/button13.png', w:72, h:72, x:(72*3)+b_gap, y:(65*2)+b_gap, speechImg:'img/speech13.png'},
    {img:'img/button14.png', w:72, h:72, x:(72*4)+b_gap, y:(65*2)+b_gap, speechImg:'img/speech14.png'},
    {img:'img/button15.png', w:72, h:72, x:(72*4)+b_gap, y:(70*3)+b_gap, speechImg:'img/speech15.png'},
    {img:'img/button16.png', w:72, h:72, x:b_gap, y:(70*3)+b_gap, speechImg:'img/speech16.png'},
    {img:'img/button17.png', w:72, h:72, x:72+b_gap, y:(70*3)+b_gap, speechImg:'img/speech17.png'},
    {img:'img/button18.png', w:72, h:72, x:(72*2)+b_gap, y:(70*3)+b_gap, speechImg:'img/speech18.png'},
    {img:'img/button19.png', w:72, h:72, x:(72*3)+b_gap, y:(70*3)+b_gap, speechImg:'img/speech19.png'},
    {img:'img/button20.png', w:72, h:72, x:(72*4)+b_gap, y:(70*3)+b_gap, speechImg:'img/speech20.png'},
];

let imageMode = PIXI.SCALE_MODES.LINEAR;
 //let imageMode = PIXI.SCALE_MODES.NEAREST;
//PIXI.settings.RESOLUTION = window.devicePixelRatio;
//PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const style40 = new PIXI.TextStyle({
    fontSize: 40,
    fontFamily: 'Courier',
    fill: 0x4A4879
});

const style20 = new PIXI.TextStyle({
    fontSize: 20,
    fontFamily: 'Courier',
    fill: 0x4A4879
});


var startTexture = PIXI.Texture.from('img/start1.png');
var startTextureDown = PIXI.Texture.from('img/start3.png');
var startTextureOver = PIXI.Texture.from('img/start2.png');

var pauseTexture = PIXI.Texture.from('img/pause1.png');
var pauseTextureDown = PIXI.Texture.from('img/pause3.png');
var pauseTextureOver = PIXI.Texture.from('img/pause2.png');

var aboutTexture = PIXI.Texture.from('img/about1.png');
var aboutTextureDown = PIXI.Texture.from('img/about3.png');
var aboutTextureOver = PIXI.Texture.from('img/about2.png');

var okTexture = PIXI.Texture.from('img/ok1.png');
var okTextureDown = PIXI.Texture.from('img/ok2.png');
var okTextureOver = PIXI.Texture.from('img/ok3.png');

var startgameTexture = PIXI.Texture.from('img/startpurple1.png');
var startgameTextureDown = PIXI.Texture.from('img/startpurple2.png');
var startgameTextureOver = PIXI.Texture.from('img/startpurple2.png');

var cancelTexture = PIXI.Texture.from('img/cancel1.png');
var cancelTextureDown = PIXI.Texture.from('img/cancel2.png');
var cancelTextureOver = PIXI.Texture.from('img/cancel2.png');

var abtnextTexture = PIXI.Texture.from('img/abtnext1.png');
var abtnextTextureDown = PIXI.Texture.from('img/abtnext3.png');
var abtnextTextureOver = PIXI.Texture.from('img/abtnext2.png');


PIXI.sound.add('fail', 'sound/fail.mp3');
PIXI.sound.add('correct', 'sound/correct.mp3');




class Scene extends PIXI.Container {
   
    constructor() {
    	super();
        this.paused = false;
        this.updateCB = function () { };
    }
    onUpdate(updateCB) {
        this.updateCB = updateCB;
    }
    update() {
        this.updateCB();
    }
    pause() {
        this.paused = true;
        if(this.bgmPausing){
            this.bgmPausing();
        }
         if(this.storybgmPausing){
            this.storybgmPausing();
        }
    }
    resume() {
        this.paused = false;
        if(this.onPlayVideo){
            this.onPlayVideo();
        }
        if(this.bgmPlaying){
            this.bgmPlaying();
        }
        if(this.storybgmPlaying){
            this.storybgmPlaying();
        }

    }
    isPaused() {
        return this.paused;
    }
  

}







