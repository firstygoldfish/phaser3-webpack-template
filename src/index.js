import Phaser from 'phaser';

const config = {
    // WebGL (Web Graphics Library) JS API for rendering 2d and 3d graphics
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        // Arcade physics plugin, manages physics simulation (Arcade simple physics)
        default: 'arcade'
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

function preload() {
    this.load.image('background', 'assets/bg.jpg');
    this.load.image('character', 'assets/player.png');
}

let player = null;
let alien = null;

function create() {
    // x, y, key of image
    this.add.image(config.width / 2, config.height / 2, 'background').setOrigin(0.5,0.5);
    player = this.add.sprite(150, 380, 'character').setOrigin(0.5,0.5);
    alien = this.add.sprite(620, 194, 'character').setOrigin(0.5,0.5);
    //debugger;
}

function update(time, delta) {
    player.angle += 1;
    alien.angle -= 2;
}

new Phaser.Game(config);

