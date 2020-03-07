class Person {

	constructor(x, y, type, i, w, h) {
		this.x = x;
		this.y = y;
		this.i = i;
		this.w = w;
		this.h = h;
		this.type = type;
		this.sprite;
	}

	create() {
		const texture = PIXI.Texture.from('img/character_n2.png');
		this.sprite = new PIXI.Sprite(texture);
		this.sprite.x = this.x;
    	this.sprite.y = this.y;
    	this.sprite.width = this.w;
    	this.sprite.height = this.h;
    	return this.sprite;
	}

}