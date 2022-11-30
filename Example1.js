class Example1 extends Phaser.Scene {
    constructor() {
        super({ key: "Example1" })
    }
    preload() {
        this.preload.image('') //'GFS','imageName/location.jpg'(tbd after image known)
    }
    create() {
        this.image = this.sdd.image(400, 300, 'GFS')

        this.input.keyboard.on('keyup_D', function(event) {
            this.image.x += 10;

        }, this);

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        this.input.on('pointerdown', function(event) {
            this.image.x = event.x
            this.image.y = event.y
        })

    }
    update(delta) {
        if (this.key_A.isDown)
            this.image.x--;
    };

}