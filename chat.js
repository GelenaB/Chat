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


//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    createBubble();
    timer();
  }});

function createBubble() {

  //creates a new div, appends paragraph and time. Applies classes.
  let newMsg = document.createElement("div");
  newMsg.classList.add("msgBubble");

  let para = document.createElement("p");
  let input = document.getElementById("input").value;
  let msgContent = document.createTextNode(input);
  para.appendChild(msgContent);
  newMsg.appendChild(para);


  let currentTime = document.createElement("span");
  currentTime.classList.add("timeLeft");
  let fullTime = new Date().toTimeString().split(" ")[0].split(":");
  let hoursMins = document.createTextNode(`${fullTime[0]}:${fullTime[1]}`);
  currentTime.appendChild(hoursMins);
  newMsg.appendChild(currentTime);

  let currentDiv = document.getElementById("chatBox");
  currentDiv.appendChild(newMsg);
};

  function timer() {
    setTimeout (function() {

    let newMsg = document.createElement("div");
    let botName = document.createElement("span");
    botName.classList.add("nameRight");
    let name = document.createTextNode(`Mr Chatty Bot`);
    botName.appendChild(name);
    newMsg.appendChild(botName);

    let para = document.createElement("p");
    newMsg.appendChild(para);
    newMsg.classList.add("msgBubble");
    let msgContent = botMsg();
    para.appendChild(msgContent);

    let currentTime = document.createElement("span");
    currentTime.classList.add("timeRight");
    let fullTime = new Date().toTimeString().split(" ")[0].split(":");
    let hoursMins = document.createTextNode(`${fullTime[0]}:${fullTime[1]}`);
    currentTime.appendChild(hoursMins);
    newMsg.appendChild(currentTime);

    let currentDiv = document.getElementById("chatBox");
    currentDiv.appendChild(newMsg);
    document.getElementById("input").value = "";
    }, 1000);
  }

let botMsgCounter = 0;
function botMsg() {
  botMsgCounter ++;
  let input = document.getElementById("input").value;
  let msgContent = document.createTextNode(input);
  if (botMsgCounter === 1) {
    return document.createTextNode(`Nice to meet you ${input}. Where are you from?`);
  } else if (botMsgCounter === 2) {
    return document.createTextNode(`Lovely. What's you favourite food?`);
  } else if (botMsgCounter === 2) {
    return document.createTextNode(`Oh, ${input} is my favourite too!`);
  } else if (botMsgCounter === 3) {
    return document.createTextNode(`bla`);
  }
}

//check if this is actually scrolling
let element = document.getElementById('chatBox');
element.scrollTop = element.scrollHeight;

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
