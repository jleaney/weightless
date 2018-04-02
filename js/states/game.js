
var circleSize = 200;
var circles = [];

var heartScale = 0.35;
var heartThrobAmount = 1.5;

var beautifulCounter = 1;
var textColor;
var clickNum = 1;

var changed = false;

var word = ['WEIGHTLESS', 'BEAUTIFUL', 'AMAZING', 'GORGEOUS', 'RAD', 'FABULOUS', 'COOL', 'AMAZEBALLS', 'STUNNING',
           'PRETTY', 'PERFECT', 'LIT', 'LOVELY', 'POWERFUL', 'VIBRANT', 'UNSTOPPABLE', 'FASHIONABLE', 'READY', 'SPECIAL', 'INCREDIBLE',
           'HANDSOME', 'SMASHING', '10/10'];

var x = 0;

class Game {
    
    Preload() {
        
        //  Load the Google WebFont Loader script
    this. game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        
    }
    
    create() {
        
        this.game.world.setBounds(0, 0, this.game.width, this.game.height);
        this.game.stage.backgroundColor = "#000000";
        
        this.music = this.game.add.audio('weightless');
        this.music.play();
        
        this.box = this.game.add.sprite(this.game.world.centerX, this.game.world.height, 'box');
        this.box.scale.setTo(1, 0);
        this.box.anchor.setTo(0.5, 0);
        
        this.heart = this.game.add.sprite(this.game.world.centerX, this.game.world.height / 4 * 3, 'heart');
        this.heart.anchor.setTo(0.5);
        this.heart.scale.setTo(heartScale)
        
        var heartAnimation = this.game.add.tween(this.heart.scale).to( { x: heartScale * heartThrobAmount, y: heartScale * heartThrobAmount }, 35, Phaser.Linear, false, true, 0, true);
        
        this.heart.inputEnabled = true;
        
        this.heart.events.onInputDown.add(function () {
            
            heartAnimation.start();
            beautifulCounter += 1;
            clickNum += 1;
//            x = Math.floor(Math.random() * word.length);
//            textColor = Math.random() * 0xFFFFFF;
                
            }, this);
        
      this.createText();
    }
    
    update () {
        
        this.beautifulCounterText.text = "I FEEL " + word[x] + "\nx " + beautifulCounter;
        this.beautifulCounterText.color = textColor;
    
        if (clickNum % 10 === 0 && !changed) {
            x += 1;
            changed = true;
        }
        
        if (clickNum % 10 != 0){
            
                changed = false;
            }
        
        if (x > word.length) {
            x = 0;
        }
    }
    
    createText() {
        
         this.beautifulCounterText = this.game.add.text(this.game.world.centerX, this.game.world.height/3, "");

         this.beautifulCounterText.anchor.set(0.5);
         this.beautifulCounterText.font = 'Arial';
         this.beautifulCounterText.fontSize = 25*sr;
         this.beautifulCounterText.align = 'center';
        this.beautifulCounterText.fill = '#FFFFFF';
         this.beautifulCounterText.stroke = '#FFFFFF';
        
    }

}

RocketMaze.Game = new Game();