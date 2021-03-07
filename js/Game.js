class Game {
    constructor(){
  
    }
  
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
  
      pac1 = createSprite(500,200);
      pac1.addImage("pac1",pac1_img);
      pac1.scale = 0.1;
      
      pac2 = createSprite(200,200);
      pac2.addImage("pac2",pac1_img);
      pac2.scale = 0.1

      pacs = [pac1,pac2]
      
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(Background);

        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 175 ;
        var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        pacs[index-1].x = x;
        pacs[index-1].y = y;
  
      }
    }
  
      if(keyDown(RIGHT_ARROW) && player.index !== null){
        player.x +=10
        player.update();
      }

      if(keyDown(LEFT_ARROW) && player.index !== null){
        player.x -=10
        player.update();
      }
  
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }
  }