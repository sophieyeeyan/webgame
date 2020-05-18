const outlineFilterBlue = new PIXI.filters.OutlineFilter(2, 0x99ff99);
const outlineFilterRed = new PIXI.filters.GlowFilter(15, 2, 1, 0xff9999, 0.5);


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
		this.messageIfCorrect = this.messageIfCorrect;
	}



	create() {
		//const texture = PIXI.Texture.from('img/character_n2.png');
		if(this.character ==  "a"){
			const texture = PIXI.Texture.from('img/character1a.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	    	this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,1,2];
	    	this.messageIfCorrect = "Unreasonable, foolish gov. Let’s act!"
		}
		if(this.character ==  "b"){
			const texture = PIXI.Texture.from('img/character1b.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,1,2];
	    	this.messageIfCorrect = "Unreasonable, foolish gov. Let’s act!"

		}

		if(this.character ==  "c"){
			const texture = PIXI.Texture.from('img/character1c.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,3,3,4];
	    	this.messageIfCorrect = " Help, friends! Help! Support the team! 🙏"

		}

		if(this.character ==  "d"){
			const texture = PIXI.Texture.from('img/character1d.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,1,1,2];
	    	this.messageIfCorrect = " Help, friends! Help! Support the team! 🙏"

		}

		if(this.character ==  "e"){
			const texture = PIXI.Texture.from('imglv2/character1.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	    	this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,3,5,7];
	    	this.messageIfCorrect = "Unreasonable, foolish gov. Let’s act!"
		}
		if(this.character ==  "f"){
			const texture = PIXI.Texture.from('imglv2/character2.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,3,5,5,7];
	    	this.messageIfCorrect = "Unreasonable, foolish gov. Let’s act!"

		}

		if(this.character ==  "g"){
			const texture = PIXI.Texture.from('imglv2/character3.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,8,6,7];
	    	this.messageIfCorrect = " Help, friends! Help! Support the team! 🙏"

		}

		if(this.character ==  "h"){
			const texture = PIXI.Texture.from('imglv2/character4.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,8,6,6,7];
	    	this.messageIfCorrect = " Help, friends! Help! Support the team! 🙏"

		}

		if(this.character ==  "i"){
			const texture = PIXI.Texture.from('imglv3/character1.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	    	this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,9,8,4];
	    	this.messageIfCorrect = "Unreasonable, foolish gov. Let’s act!"
		}
		if(this.character ==  "j"){
			const texture = PIXI.Texture.from('imglv3/character2.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,9,8,2];
	    	this.messageIfCorrect = "Unreasonable, foolish gov. Let’s act!"

		}

		if(this.character ==  "k"){
			const texture = PIXI.Texture.from('imglv3/character3.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,9,2,19,10];
	    	this.messageIfCorrect = " Help, friends! Help! Support the team! 🙏"

		}

		if(this.character ==  "l"){
			const texture = PIXI.Texture.from('imglv3/character4.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,9,2,19,11,11];
	    	this.messageIfCorrect = " Help, friends! Help! Support the team! 🙏"

		}
		if(this.character ==  "m"){
			const texture = PIXI.Texture.from('imglvfive/character1.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	    	this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,12,10,11];
	    	this.messageIfCorrect = "Unreasonable, foolish gov. Let’s act!"
		}
		if(this.character ==  "n"){
			const texture = PIXI.Texture.from('imglvfive/character2.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,12,10,10];
	    	this.messageIfCorrect = "Unreasonable, foolish gov. Let’s act!"

		}

		if(this.character ==  "o"){
			const texture = PIXI.Texture.from('imglvfive/character3.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,12,13,19,10];
	    	this.messageIfCorrect = " Help, friends! Help! Support the team! 🙏"

		}

		if(this.character ==  "p"){
			const texture = PIXI.Texture.from('imglvfive/character4.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,9,2,19,11,11]
	    	this.messageIfCorrect = " Help, friends! Help! Support the team! 🙏"
		}


		if(this.character ==  "q"){
			const texture = PIXI.Texture.from('imglv6/character1.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	    	this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,9,8,4];
	    	this.messageIfCorrect = "Unreasonable, foolish gov. Let’s act!"
		}
		if(this.character ==  "r"){
			const texture = PIXI.Texture.from('imglv6/character2.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,9,8,2];
	    	this.messageIfCorrect = "Unreasonable, foolish gov. Let’s act!"

		}

		if(this.character ==  "s"){
			const texture = PIXI.Texture.from('imglv6/character3.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,9,2,19,10];
	    	this.messageIfCorrect = " Help, friends! Help! Support the team! 🙏"

		}

		if(this.character ==  "t"){
			const texture = PIXI.Texture.from('imglv6/character4.png');
			this.sprite = new PIXI.Sprite(texture);
			this.sprite.x = this.x;
	    	this.sprite.y = this.y;
	        this.sprite.width = this.w;
	    	this.sprite.height = this.h;
	    	this.type = [0,9,2,19,11,11];
	    	this.messageIfCorrect = " Help, friends! Help! Support the team! 🙏"
	    }



		this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.sprite.on('pointerover', function() {
        	this.filters = [outlineFilterRed];
        })
        this.sprite.on('pointerout', function() {
        	this.filters = [outlineFilterBlue];
        });
        //this.filterOff.call(sprite);

        return this.sprite;

    }
}

