var scenesManager = new ScenesManager();
 
scenesManager.create(1300, 800);
//antialias: true

var start = scenesManager.createScene('start', StartScene);
var game = scenesManager.createScene('game', GameScene);
//var game2 = scenesManager.createScene('game2', Game2Scene);
//var game3 = scenesManager.createScene('game3', Game3Scene);


scenesManager.goToScene('start');
// scenesManager.goToScene('game');

