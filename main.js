var scenesManager = new ScenesManager();
 
scenesManager.create(1300, 800);
//antialias: true

var start = scenesManager.createScene('start', StartScene);
var cut = scenesManager.createScene('cut', CutScene);

var gameLevels = []
var GameScene = [GameScene1, GameScene2, GameScene3, GameScene4, GameScene5]
for (var i = 0; i < GameScene.length; i++) {
	gameLevels[i] = scenesManager.createScene('game' + (i+1), GameScene[i]);
}

//gameLevels[1] = scenesManager.createScene('game' + 2, TwoScene);

console.log('game' + 1)
console.log('game' + 2)

//var game3 = scenesManager.createScene('game3', Game3Scene);


scenesManager.goToScene('start');
// scenesManager.goToScene('game');

