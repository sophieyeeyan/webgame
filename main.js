var scenesManager = new ScenesManager();
 
scenesManager.create(1300, 800);

var game = scenesManager.createScene('game', GameScene);

scenesManager.goToScene('game');

game.spawn();