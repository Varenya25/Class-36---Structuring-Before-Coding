class Game{
    constructor(){

        
    }

    // function getGameState .. reads the gameState from DB
    getGameState () {
        //refer to gameState location in DB
        var gameStateRef = database.ref ("/gameState");
        // listen to gameState changes in DB
        gameStateRef.on ("value", 
                        function(data){
                            gameState = data.val ();
                        }
        );
    }

    // function updateGameState .. updates gameState in the DB
    updateGameState () {
        var gameStateRef = database.ref ("/gameState");
        gameStateRef.set ({"gameState" : state}) ;
    }

    // function start
    start () {
        if (gameState == 0) {
            player = new Player ();
            var startCount = player.getPlayerCount ();
            
            form = new Form () ;
            form.display () ;
        }
    }
}