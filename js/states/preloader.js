var sr = window.devicePixelRatio;

class Preloader {
    
    preload() {
        
		this.load.image('heart', 'assets/images/Heart.png');
        this.load.image('circle', 'assets/images/Circle.png');
        this.load.audio('weightless', 'assets/audio/Weightless.mp3')

    }
    
    create() {
        
        this.state.start('Game');
    }
     
}

RocketMaze.Preloader = new Preloader();
