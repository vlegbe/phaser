class Game extends Phaser.scene {

    preload() {

    }

    create() {

        const ball = this.add.circle(400, 250, 10, 0)
        this.physics.add.existing(ball)

        ball.body.setVelocity(200, 200)
    }
}



var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },

    scene: [Example1]
};

var game = new Phaser.Game(config);
export default Game