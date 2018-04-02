var sr = window.devicePixelRatio;

class Preloader {
    
    preload() {
        
         this.wait = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "wait.");

         this.wait.anchor.set(0.5);
         this.wait.font = 'Arial';
         this.wait.fontSize = 50*sr;
         this.wait.align = 'center';
         this.wait.fill = '#FFFFFF';
         this.wait.stroke = '#FFFFFF';
        
		this.load.image('heart', 'assets/images/Heart.png');
        this.load.image('circle', 'assets/images/Circle.png');
        this.load.image('download', 'assets/images/Download.png');
        
        this.load.audio('weightless', 'assets/audio/Weightless.mp3')
        this.load.audio('clickSound', 'assets/audio/heartClick.wav');

    }
    
    create() {
        
        
        
        
        this.state.start('Game');
    }
     
}

RocketMaze.Preloader = new Preloader();
