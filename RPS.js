

// main function 
// links html with javaScript
//contains all the other functions  

function rpsGame(yourChoice){
    
    console.log(yourChoice.id)
    
    // Crearing variables

    var humanChoice,botChoice;
    
    // storing user id to our variable
    humanChoice=yourChoice.id

    // calling numberTochoice function
    //soring in botchoice varialble
    
    botChoice=numberTochoice(randTorps());
    console.log(botChoice)
    
    // calling decideWinner function
    // storing return into winner variable 
    
    winner=decideWinner(humanChoice,botChoice);
    console.log(winner);

    // calling MessagePrint function
    // storing return into results variable 

    results=messagePrint(winner);
    console.log(results);

    // calling rpsFrontend  function


    finalEnd=rpsFrontEnd(humanChoice,botChoice,results);
    console.log(finalEnd);

}
    
// Generating random number between [0,1,2]
function randTorps(){

    //math.random generate raqndom number bt 0 & 1
    // math.floor round inton an integer

    return Math.floor(Math.random() *3);
}

// getting desired option from number generated above

function numberTochoice(number){
    return ['rock','paper','scissor'][number];
}


// Creating winner function which decides the winner
// rock & paper =paper won
// rock & scissor= rock won
//paper & scissor = scissor won
 
function decideWinner(yourChoice,computerChoice){
    
    // creating an object for comparison 
    var rpsDatabase = {
        'rock':{'rock':0.5, 'paper': 0 ,'scissor':1},
        'paper' :{'rock':1, 'paper': 0.5 ,'scissor':0},
        'scissor' :{'rock':0, 'paper': 1 ,'scissor':0.5}
    };
    
    var yourScore= rpsDatabase[yourChoice] [computerChoice]; // yourScore=0.5
    
    var computerScore= rpsDatabase[computerChoice]  [ yourChoice];// computerScore= 0.5
    

    return [ yourScore, computerScore]; // return array
 
}

// Creating function to print result

function messagePrint([yourScore,computerScore]){
    if (yourScore===0){
        return {'message' :'you Lost !','color':'red'};
    }else if(yourScore===0.5){
        return {'message':'DRAW','color':'Blue'};
    }else{
        return {'message':'You Won !' ,'color':'Green'}
    }
}

//creating rps function 

function rpsFrontEnd(humanImageChoice,botImageChoice,messagePrint){
    // creating object which stores address of image
    
    var imageDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }

    // removing all the images from the screen

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();``
    document.getElementById('scissor').remove();

    //creating a div tag 

    var humanDiv= document.createElement('div')
    var messageDiv= document.createElement('div')
    var botDiv= document.createElement('div')

    //DOM manipulation
    //manipulating html with the help of java script


    humanDiv.innerHTML="<img src='"+imageDatabase[humanImageChoice]+"' style= 'box-shadow: 0px 10px 50px rgba(35 ,50,233,1);'>";
    messageDiv.innerHTML="<h1 style='color:"+messagePrint['color']+ ";font-size:60px; padding:30px; '>"+messagePrint['message']+"</h1>";
    botDiv.innerHTML="<img src='"+imageDatabase[botImageChoice]+"'style= 'box-shadow: 0px 10px 50px rgba(243,38,21,1);'>";
    
    // appending all the html in flex box
    document.getElementById('FlexBox').appendChild(humanDiv);
    document.getElementById('FlexBox').appendChild(messageDiv);
    document.getElementById('FlexBox').appendChild(botDiv);
   
}
