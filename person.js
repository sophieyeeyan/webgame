class Person {

	constructor(x, y, type, i, character, w, h) {
		this.x = x;
		this.y = y;
		this.i = i;
		this.w = w;
		this.h = h;
		this.type = type;
		this.sprite;
		this.character = character;
	}

	create() {
		//const texture = PIXI.Texture.from('img/character_n2.png');
		
		if(this.character ==  "a"){
			console.log("grrr");
			const texture = PIXI.Texture.from('img/character_r.png');
			this.sprite = new PIXI.Sprite(texture);
		this.sprite.x = this.x;
    	this.sprite.y = this.y;
    	this.sprite.width = this.w;
    	this.sprite.height = this.h;
    	return this.sprite;
		}
		if(this.character ==  "b"){
			const texture = PIXI.Texture.from('img/character_n3.png');
				console.log("geeeeee");
			this.sprite = new PIXI.Sprite(texture);
		this.sprite.x = this.x;
    	this.sprite.y = this.y;
    	this.sprite.width = this.w;
    	this.sprite.height = this.h;
    	return this.sprite;
		}

		if(this.character ==  "c"){
			const texture = PIXI.Texture.from('img/character_n3.png');
				console.log("geeeeee");
			this.sprite = new PIXI.Sprite(texture);
		this.sprite.x = this.x;
    	this.sprite.y = this.y;
    	this.sprite.width = this.w;
    	this.sprite.height = this.h;
    	return this.sprite;
		}

		if(this.character ==  "d"){
			const texture = PIXI.Texture.from('img/character_n3.png');
				console.log("geeeeee");
			this.sprite = new PIXI.Sprite(texture);
		this.sprite.x = this.x;
    	this.sprite.y = this.y;
    	this.sprite.width = this.w;
    	this.sprite.height = this.h;
    	return this.sprite;
		}

		
	}

}