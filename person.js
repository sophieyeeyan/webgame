//const outlineFilterBlue = new PIXI.filters.OutlineFilter(2, 0x99ff99);
//const outlineFilterRed = new PIXI.filters.GlowFilter(15, 2, 1, 0xff9999, 0.5);

//function filterOn() {
  //  this.filters = [outlineFilterRed];
//}

//function filterOff() {
 //   this.filters = [outlineFilterBlue];
//}

class Person {


	constructor(x, y, i, character, w, h) {
		this.x = x;
		this.y = y;
		this.i = i;
		this.w = w;
		this.h = h;
		this.type;
		this.sprite;
		this.character = character;
	}



	create() {
		//const texture = PIXI.Texture.from('img/character_n2.png');
		
		if(this.character ==  "a"){
			console.log("grrr");
			const texture = PIXI.Texture.from('img/character1a.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	    	this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = '012';
		}
		if(this.character ==  "b"){
			const texture = PIXI.Texture.from('img/character1b.png');
			console.log("geeeeee");
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = '012';
		}

		if(this.character ==  "c"){
			const texture = PIXI.Texture.from('img/character1c.png');
			console.log("geeeeee");
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = '0445';
		}

		if(this.character ==  "d"){
			const texture = PIXI.Texture.from('img/character1d.png');
			console.log("geeeeee");
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = '0112';
		}

		this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        //this.sprite.on('pointerover', filterOn)
        //this.sprite.on('pointerout', filterOff);
        //this.filterOff.call(sprite);

        return this.sprite;
		
	}

}