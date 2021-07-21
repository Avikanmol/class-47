var canvas
var ground , groundImage
var mario,marioImage;
var cloudGroup, pipeGroup, enemyGroup, coinGroup
var PLAY=1
var END=0
var gameState=PLAY
var ivGround

function preload(){
    groundImage=loadImage("ground.png")
    marioImage=loadAnimation("mario1.png","mario2.png")
    cloudImage=loadImage("cloud.png")
    pipesImage=loadImage("pipes.png")
    enemyImage=loadImage("enemy.png")
    coinImage=loadImage("coin.png")
}


function setup(){
    canvas=createCanvas(windowWidth,windowHeight)
    ground=createSprite(width/2,height,width,20)
    ground.addImage("ground",groundImage)
    ground.x=ground.width/2 
    mario=createSprite(50,height-100,20,20)

    mario.addAnimation ("mario",marioImage)
    mario.scale=0.6

    ivGround=createSprite(width/2,height-10,width,20)
    ivGround.visible=false
    cloudGroup= new Group()
    pipeGroup= new Group()
    enemyGroup= new Group()
    coinGroup= new Group()

}


function draw(){
    background ("pink");
    if (gameState===PLAY){
        ground.velocityX=-70
        if(ground.x<500){
            ground.x = ground.width/2
        }

    if(keyDown("space")){
        mario.velocityY=-20
    }
    mario.velocityY=mario.velocityY+0.8
    mario.collide(ivGround)
        spawnClouds()
        spawnPipes()
        spawnEnemy()
        spawnCoins()

        if(pipeGroup.isTouching(mario)){
            gameState=END
        }

        if(enemyGroup.isTouching(mario)){
            enemyGroup.destroyEach()
            gameState=END
        }

    }
   

    drawSprites()
}

function spawnClouds(){
    if(frameCount%100===0){
        var cloud = createSprite(width+20,random(30,190),40,10)
        cloud.addImage(cloudImage)
        cloud.velocityX=-3
        cloud.scale=3
        cloudGroup.add(cloud)
    }
}

function spawnPipes(){
    if (frameCount%300===0){
var pipes = createSprite(width+10,height-120,40,60)
        pipes.addImage(pipesImage)
        pipes.velocityX=-4
        pipeGroup.add(pipes)
    }
}

function spawnEnemy(){
    if (frameCount%200===0){
var enemy = createSprite(width+10,height-80,10,10)
        enemy.addImage(enemyImage)
        enemy.velocityX=-4
        enemyGroup.add(enemy)
    }
    
    }

    function spawnCoins(){
        if (frameCount%170===0){
    var coin = createSprite(width+10,random(height-250,height-600),10,10)
            coin.addImage(coinImage)
            coin.velocityX=-4
            coinGroup.add(coin)
        }
        
        }
    