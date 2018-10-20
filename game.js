// define variables
var game;
var player;
var platforms;
var badges;
var items;
var cursors;
var jumpButton;
var text;
var winningMessage;
var won = false;
var currentScore = 0;
var winningScore = 80;
var winningScore2 = 105;
var mySound;
var grass;
var cloud;

// add collectable items to the game
function addItems() {
  items = game.add.physicsGroup();
  createItem(375, 400, 'coin');
  createItem(575, 500, 'coin');
  createItem(225, 500, 'coin');
  createItem(100, 250, 'coin');
  createItem(575, 150, 'coin');
  createItem(525, 300, 'coin');
  createItem(650, 250, 'coin');
  createItem(225, 200, 'coin');
  createItem(375, 100, 'onion');
  createItem(370, 500, 'onion');
  createItem(100, 375, 'onion');
  createItem(710, 5, 'onion');
  createItem(230, 15, 'star');
  createItem(760, 5, 'star');
}

// add platforms to the game
function addPlatforms() {
  platforms = game.add.physicsGroup();
  platforms.create(450, 550, 'platform');
  platforms.create(100, 550, 'platform');
  platforms.create(300, 450, 'platform');
  platforms.create(250, 150, 'platform');
  platforms.create(50, 300, 'platform');
  platforms.create(150, 250, 'platform');
  platforms.create(650, 300, 'platform');
  platforms.create(550, 200, 'platform2');
  platforms.create(300, 450, 'platform2');
  platforms.create(400, 350, 'platform2');
  platforms.create(100, 75, 'platform2');
  platforms.setAll('body.immovable', true);
}

// add grass to the game
function addGrass() {
  grass = game.add.physicsGroup();
  grass.create(0, 575, 'grass');
  grass.create(30, 575, 'grass');
  grass.create(60, 575, 'grass');
  grass.create(90, 575, 'grass');
  grass.create(120, 575, 'grass');
  grass.create(150, 575, 'grass');
  grass.create(180, 575, 'grass');
  grass.create(210, 575, 'grass');
  grass.create(240, 575, 'grass');
  grass.create(270, 575, 'grass');
  grass.create(300, 575, 'grass');
  grass.create(330, 575, 'grass');
  grass.create(360, 575, 'grass');
  grass.create(390, 575, 'grass');
  grass.create(420, 575, 'grass');
  grass.create(450, 575, 'grass');
  grass.create(480, 575, 'grass');
  grass.create(510, 575, 'grass');
  grass.create(540, 575, 'grass');
  grass.create(570, 575, 'grass');
  grass.create(600, 575, 'grass');
  grass.create(630, 575, 'grass');
  grass.create(660, 575, 'grass');
  grass.create(690, 575, 'grass');
  grass.create(720, 575, 'grass');
  grass.create(750, 575, 'grass');
  grass.create(780, 575, 'grass');
  grass.create(570, -75, 'cloud');
}

// create a single animated item and add to screen
function createItem(left, top, image) {
  var item = items.create(left, top, image);
  item.animations.add('spin');
  item.animations.play('spin', 10, true);
}

// create the winning badge and add to screen
function createBadge() {
  badges = game.add.physicsGroup();
  var badge = badges.create(750, 400, 'badge');
  badge.animations.add('spin');
  badge.animations.play('spin', 10, true);
}

// when the player collects an item on the screen
function itemHandler(player, item) {
  item.kill();
  if (item.key === 'coin') {
    currentScore = currentScore + 10;
  } else if (item.key === 'onion') {
     currentScore = currentScore - 25;
  } else if (item.key === 'star') {
     currentScore = currentScore + 25;
  }
  if (currentScore === winningScore) {
      createBadge();
  } else if (currentScore === winningScore2) {
      createBadge();
  } else if (currentScore >= 80) {
      createBadge();
  }
}

// when the player collects the badge at the end of the game
function badgeHandler(player, badge) {
  badge.kill();
  won = true;
}

// setup game when the web page loads
window.onload = function () {
  game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

  // before the game begins
  function preload() {

    game.stage.backgroundColor = '#00bfff';

    //Load images
    game.load.image('platform', 'platform_1.png');
    game.load.image('platform2', 'platform_2.png');

    //Load spritesheets
    game.load.spritesheet('player', 'shrek.png', 50, 61);
    game.load.spritesheet('coin', 'shrekspin.png', 50, 38);
    game.load.spritesheet('badge', 'badge.png', 42, 54);
    game.load.spritesheet('onion', 'onion.png', 36, 36);
    game.load.spritesheet('star', 'donkey.png', 34, 60);
    game.load.spritesheet('grass', 'grass2.png', 30, 30);
    game.load.spritesheet('cloud', 'cloud.png', 275, 275);
  }

  // initial game set up
  function create() {
    player = game.add.sprite(0, 590, 'player');
    player.animations.add('walk');
    player.anchor.setTo(0.5, 1);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;


    addItems();
    addPlatforms();
    addGrass();

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    text = game.add.text(16, 16, "SCORE: " + currentScore, { font: "bold 24px Arial", fill: "white" });
    winningMessage = game.add.text(game.world.centerX, 275, "", { font: "bold 48px Arial", fill: "white" });
    winningMessage.anchor.setTo(0.5, 1);
  }

  // while the game is running
  function update() {
    text.text = "SCORE: " + currentScore;
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.overlap(player, items, itemHandler);
    game.physics.arcade.overlap(player, badges, badgeHandler);
    player.body.velocity.x = 0;

    // is the left cursor key presssed?
    if (cursors.left.isDown) {
      player.animations.play('walk', 10, true);
      player.body.velocity.x = -300;
      player.scale.x = - 1;
    }
    // is the right cursor key pressed?
    else if (cursors.right.isDown) {
      player.animations.play('walk', 10, true);
      player.body.velocity.x = 300;
      player.scale.x = 1;
    }
    // player doesn't move
    else {
      player.animations.stop();
    }

    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
      player.body.velocity.y = -400;
    }
    // when the player winw the game
    if (won) {
      winningMessage.text = "You're Winner !";
      winningMessage.link("http://www.roberthemfelt.com/game2");
    }
  }

  function render() {

  }

};
