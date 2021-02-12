class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
   //put sprites here for trex/ground object
   ground = createSprite(400,600,800,800)
   ground.addImage("ground1",groundImg)
   ground.scale= 5.5
   ground.velocityX = -5
   trex1 = createSprite(200,500)
   trex1.addImage("trex1",trex1I)
   trex2 = createSprite(150,400)
   trex2.addImage("trex2",trex2I)
   trex = [trex1,trex2]
   trex1.collide(ground)
   trex2.collide(ground)
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(ground.x<=0){
      ground.x = ground.width/2
    }
    //console.log(player.index)
    if(player.index === 1 ){
      if(keyDown("space")){

      console.log("inside jump if block")
      trex[player.index-1].y=trex[player.index-1].y-175;
      }
      }
      if(player.index === 2 ){
        if(keyDown("space")){
  
        console.log("inside jump if block")
        trex[player.index-1].y=trex[player.index-1].y-200;
        }
        }
        drawSprites()
  }
    end(){
      console.log("Game Over");
    //  console.log("Your rank is :"+ player.rank);
      form.restart();
    //  alert("game over")
    //  swal
    }
}