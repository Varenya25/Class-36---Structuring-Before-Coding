class Player{
    constructor(){

        
    }

    getPlayerCount () {
        //refer to gameState location in DB
        var playerCountRef = database.ref ('/playerCount');
        // listen to gameState changes in DB
        playerCountRef.on ("value", 
                        function(data){
                            playerCount = data.val ();
                        }
        );        
    }
    updatePlayerCount (count) {
         
    var playerCountRef = database.ref ("/");
        playerCountRef.update ({"playerCount" : count}) ;
    }
    
    updatePlayerName (name) {
        
        var playerIndex = "Players/Player"+playerCount;
        database.ref (playerIndex).set ({Name : name});
    }



}