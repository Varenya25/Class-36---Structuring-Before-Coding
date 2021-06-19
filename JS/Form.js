class Form{
    constructor(){

        
    }

    display ()  {
        var title = createElement ("h2");
        title.html ("Car Racing Game");
        title.position (130,0);

        var input = createInput("NAME");
        input.position(130,160);
    
        var button = createButton("LOG IN")
        button.position(185,200);
       
        var greeting = createElement ("h3");
       
       button.mousePressed (function () {
        input.hide ();
        button.hide ();

        var name = input.value ();

        playerCount+=1;
        player.updatePlayerName (name);
        player.updatePlayerCount (playerCount);

        greeting.html ("Hello! " + name);
        greeting.position (130,160);
    });

    }

}