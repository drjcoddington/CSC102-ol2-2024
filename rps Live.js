function RPS()
{
    var player1 = Math.ceil(Math.random() *3);
    // generates a random # between 1 and 3.
    var player2 = Math.ceil(Math.random() *3);

    /* this is a 
    multi line comment
*/

var rockImage = "rock_image.png";
var paperImage = "paper_image.png";
var scissorImage = "scissor_image.png";

if (player1 == 1)
    {
        document.getElementById("player1Img").src = rockImage;
    }
else if (player1 == 2)

    {
        document.getElementById("player1Img").src = paperImage;
    }
else 

    {
        document.getElementById("player1Img").src = scissorImage;
    }



if (player2 == 1)
    {
        document.getElementById("player2Img").src = rockImage;
    }
    else if (player2 == 2)
    
        {
            document.getElementById("player2Img").src = paperImage;
        }
    else 
    
        {
            document.getElementById("player2Img").src = scissorImage;
        }
    

    if (player1 == player2)
    {
        document.getElementById("finalResult").innerHTML = "DRAW";
    }
    //player1 wins
    // && means AND (2 conditions must be true)
    //  || means OR (only 1 condition needs to be true)
    else if ((player1 == 1 &&  player2 == 3) || (player1 ==2 && player2 == 1)|| (player1 == 3 && player2 == 2))
    {
        document.getElementById("finalResult").innerHTML = "Player 1 wins";
    }
    else
    {
        document.getElementById("finalResult").innerHTML = "Player 2 wins";
    }
}