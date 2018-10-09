// TODO:
// Keep chat in one place - DONE
// Time out function for the bot - DONE
// Set time out for the first message
// Set current time for the first message
// Set current time for all other messages - DONE
// Scroll to newer messages
// In case name/city is not lower case, make it uppercase
// Remove text after enter - DONE
// Add names to differentiate messages - done for the bot
// Narrow the chat box and center the input - DONE
// End chat or have random messages appear


//when enter is pressed, bubbles will get added
$(document).keypress(function(e) {
  if (e.which == 13) {
    createUserBubble();
    createBotBubble();
  }});

function createUserBubble() {
  //creates a new div, appends paragraph and time. Applies classes.
  let newBubble = document.createElement("div");
  newBubble.classList.add("msgBubble");

  let newParagraph = document.createElement("p");
  let input = document.getElementById("input").value;
  let msgContent = document.createTextNode(input);
  newParagraph.appendChild(msgContent);
  newBubble.appendChild(newParagraph);

  let currentTime = document.createElement("span");
  currentTime.classList.add("timeLeft");
  let fullTime = new Date().toTimeString().split(" ")[0].split(":");
  let hoursMins = document.createTextNode(`${fullTime[0]}:${fullTime[1]}`);
  currentTime.appendChild(hoursMins);
  newBubble.appendChild(currentTime);

  let currentDiv = document.getElementById("chatBox");
  currentDiv.appendChild(newBubble);
};

  function createBotBubble() {

    setTimeout (function() {

    let newBubble = document.createElement("div");
    let botName = document.createElement("span");
    botName.classList.add("nameRight");
    let name = document.createTextNode(`Mr Chatty Bot`);
    botName.appendChild(name);
    newBubble.appendChild(botName);

    let newParagraph = document.createElement("p");
    newBubble.appendChild(newParagraph);
    newBubble.classList.add("msgBubble");
    let msgContent = botMsg();
    newParagraph.appendChild(msgContent);

    let currentTime = document.createElement("span");
    currentTime.classList.add("timeRight");
    let fullTime = new Date().toTimeString().split(" ")[0].split(":");
    let hoursMins = document.createTextNode(`${fullTime[0]}:${fullTime[1]}`);
    currentTime.appendChild(hoursMins);
    newBubble.appendChild(currentTime);

    let currentDiv = document.getElementById("chatBox");
    currentDiv.appendChild(newBubble);
    document.getElementById("input").value = "";
    }, 1000);
  }

let botMsgCounter = 0;

function botMsg() {
  botMsgCounter ++;
  let input = document.getElementById("input").value;
  //let upperCaseInput = capitaliseInput();
  let msgContent = document.createTextNode(input);
  if (botMsgCounter === 1) {
    return document.createTextNode(`Nice to meet you ${input}. Where are you from?`);
  } else if (botMsgCounter === 2) {
    return document.createTextNode(`${input} sounds great! How's your week going?`);
  } else if (botMsgCounter === 3) {
    return document.createTextNode(`Mine's quite busy. Lots of chatting!`);
  } else if (botMsgCounter === 3) {
    return document.createTextNode(`And speaking of chatting...`);
  } else if (botMsgCounter === 3) {
    return document.createTextNode(`I gotta run. Speak soon`);
  } else if (botMsgCounter => 4) {
    return document.createTextNode(`*not available*`);
  }
};

/*function letterCapitalise() {
    let input = document.getElementById("input").value;
    var words = input.split(' '); //we get an array of words
    //var finalString = ''; //store final result here
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1);
    }
    return words.join(' '); //join array back into a string
} */

$('#chatBox').animate({
 scrollTop: $(".msgBubble:last-child").offset().top
}, 400);

/*
$('#chatBox').animate({
 scrollTop: $(".timeRight:last-child").offset().top
}, 400); */

//check if this is actually scrolling
//let element = document.getElementById('chatBox');
//element.scrollTop = element.scrollHeight;

//var scroll = document.getElementsByClassName('msgBubble');
  // scroll.scrollTop = scroll.scrollHeight;
   //scroll.animate({scrollTop: scroll.scrollHeight});


//$("#mydiv").scrollTop($("#mydiv")[0].scrollHeight);


//$('input[id=input').val('');

//document.getElementById('chatBox').scrollTop = 9999999;

/*function scrollSmoothToBottom (id) {
   var div = document.getElementsByClassName('msgBubble');
   $('.msgBubble').animate({
      scrollTop: div.scrollHeight - div.clientHeight
   }, 500);
} */
