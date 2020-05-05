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
    }
    resume() {
        this.paused = false;
    }
    isPaused() {
        return this.paused;
    }

  

}


