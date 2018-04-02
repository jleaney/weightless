var RocketMaze = {};

class Boot {

    constructor() {}
    
    init() {
        
        // increase to add multi touch support
        this.input.maxPointers = 1;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.forceLandscape = false;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

    }
    
    preload() {}
    
    create() {

        // starts preloader state
        this.state.start('Preloader');
        this.game.scale.onOrientationChange.add(() => {
            if(this.state.current === "Preloader")
            {
                console.log(this.scale.screenOrientation);
                this.game.scale.setGameSize(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);
                this.state.restart();
            }
        });
    }

}

RocketMaze.Boot = new Boot();

