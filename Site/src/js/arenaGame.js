window.onload = () => {

    var arenaG = document.getElementById('arena');
    var context = arenaG.getContext("2d") ;
    document.addEventListener("keydown", keyPush);

    document.getElementById('pause').onclick = () => {
        alert('jogo parado')
    }
    
    
    setInterval(game, 70);

    const speed = 1;
    var speedX = 0;
    var speedY = 0;
    var positionX = 5;
    var positionY = 5;
    var lengthPart = 20;
    var quantitP = 30;
    var appleX = 3; 
    var appleY = 3;

    var trail = [];

    let taill = 5;
    
    


    function game(){
       
        positionX += speedX;
        positionY += speedY;

        if(positionX < 0) {
            positionX = quantitP - 1;
        }
        if(positionX > quantitP - 1) {
            positionX = 0
        }
        if(positionY < 0) {
            positionY = quantitP - 1
        }
        if(positionY > quantitP - 1) {
            positionY = 0
        }

        context.fillStyle = "black";
        context.fillRect(0,0, arenaG.width, arenaG.height)

        context.fillStyle = "red";
        context.fillRect((appleX * lengthPart), (appleY * lengthPart), lengthPart, lengthPart);
        
        context.fillStyle = "green";

        for(let i = 0; i< trail.length; i++) {
            context.fillRect(trail[i].x*lengthPart, trail[i].y*lengthPart, lengthPart, lengthPart);
        
            if(trail[i].x == positionX && trail[i].y == positionY) {
                speedX = 0;
                speedY = 0;
                appleX = 3;
                appleY = 3;
                taill = 5;
                positionX = 5;
                positionY = 5; 
            };
        }

        trail.push({
            x: positionX, 
            y: positionY
        })

        while(trail.length > taill) {
            trail.shift();
        }

        if(positionX == appleX && positionY == appleY) {
            taill++;
            appleX = Math.floor(Math.random()*quantitP);
            appleY = Math.floor(Math.random()*quantitP);
            score++;
        }
    }

    function keyPush() {
        switch(event.keyCode) {
            case 37:
                speedX = -speed;
                speedY = 0;
                break;
            case 38:
                speedX = 0;
                speedY = -speed;
                break;
            case 39:
                speedX = speed;
                speedY = 0;
                break;
            case 40:
                speedX = 0;
                speedY = speed;
                break;
        }
    }
}