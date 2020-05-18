class CutScene extends Scene {
	constructor() {
		super();
		const $this = this;

		this.videoSource = ["vid/intro2.mp4", "vid/intro3.mp4", "vid/intro4.mp4", "vid/intro6.mp4", "vid/intro7.mp4"]
		this.video2Source = ["vid/lv2story.mp4", "vid/lv3story.mp4", "vid/lv4&5story.mp4", "vid/lv6story.mp4", "vid/lv7story.mp4"]
		this.videoWidth = 1300;
		this.videoHeight = 800;
		this.videoPreload = true;
		this.id = 0

		this.destination = ["game2","game3","game4", "game5"]

	
	}

	setId(id) {
		this.id = id;
	}

	onPlayVideo() {
        const $this = this;
        const introtexture = PIXI.Texture.from(this.videoSource[this.id]);

        
        const videoSprite = new PIXI.Sprite(introtexture);

        videoSprite.width = this.videoWidth;
        videoSprite.height = this.videoHeight;
        videoSprite.preload = this.videoPreload;

        var videoHtmlElement = introtexture.baseTexture.source;
        videoHtmlElement.addEventListener('ended', (event) => {
		  	console.log('video stopped');
		  	this.onPlayVideo2();

		});


        this.addChild(videoSprite);

    }

	onPlayVideo2() {
	    const $this = this;
	    const storytexture = PIXI.Texture.from(this.video2Source[this.id]);

	    
	    const videoSprite = new PIXI.Sprite(storytexture);

	    videoSprite.width = this.videoWidth;
	    videoSprite.height = this.videoHeight;
	    videoSprite.preload = this.videoPreload;

	    var storybgm = PIXI.sound.Sound.from({
                url: 'sound/city.mp3',
               loop: true,
                volume: 0.25
            });

        //storybgm.play();

	    var videoHtmlElement = storytexture.baseTexture.source;
	    videoHtmlElement.addEventListener('ended', (event) => {
		  	console.log('video stopped');
		  	scenesManager.goToScene(this.destination[this.id]);
		  	storybgm.pause();
		  	

		});


    this.addChild(videoSprite);

    }

     storybgmPlaying(){
         this.gamebgm = PIXI.sound.Sound.from({
            url: 'sound/city.mp3',
            loop: true,
            volume: 0.3
                });
         this.gamebgm.play();
    }

    storybgmPausing(){
         this.gamebgm.pause();
         console.log('music end')

    }
   
}



