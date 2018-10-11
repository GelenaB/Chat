// TODO:
// Keep chat in one place - DONE
// Time out function for the bot - DONE
// Set current time for the first message - DONE
// Set current time for all other messages - DONE
// Scroll to newer messages - DONE
// In case name/city is not lower case, make it uppercase - DONE
// Remove text after enter - DONE
// Add bot name to differentiate messages - DONE
// Narrow the chat box and center the input - DONE
// End chat or have random messages appear - DONE

/*
 * First bot message - set current time
 */

$(document).ready(function() {
  let fullTime = new Date().toTimeString().split(" ")[0].split(":");
  $(".timeRight:first").text(`${fullTime[0]}:${fullTime[1]}`);
  //let botTime = document.getElementsByClassName("timeRight")[0]; //JS equivalent
  //botTime.innerHTML = `${fullTime[0]}:${fullTime[1]}`;
});

/*
 * When enter is pressed - call functions to create bubbles
 */

$(document).keypress(function(e) {
  if (e.which == 13) {
    passUserArguments();
    passBotArguments();
  }});

/*
 * User and bot bubble functions to pass arguments to bubble generating function
 */

 function passUserArguments() {
   let input = document.createTextNode(document.getElementById("input").value);
   createBubble(null, input, "timeLeft");
 }

 function passBotArguments() {
   setTimeout (function() {
     createBubble("Mr Chatty Bot", botMsg(), "timeRight");
     document.getElementById("input").value = "";
   }, 1000);
 }

 /*
  * Create message bubble
  */

function createBubble(name, msgContent, timeClass) {
  let newBubble = document.createElement("div");
  if(name) {
    let botName = document.createElement("span");
    let nameNode = document.createTextNode(name);
    $(botName).addClass("nameRight").append(nameNode);
    $(newBubble).append(botName);
    //botName.classList.add("nameRight");
    //botName.appendChild(nameNode);
    //newBubble.appendChild(botName);
  }

  let newParagraph = document.createElement("p");
  $(newBubble).addClass("msgBubble").append(newParagraph);
  $(newParagraph).append(msgContent);
  //newBubble.appendChild(newParagraph);
  //newBubble.classList.add("msgBubble");
  //newParagraph.appendChild(msgContent);

  let currentTime = document.createElement("span");
  let fullTime = new Date().toTimeString().split(" ")[0].split(":");
  let hoursMins = document.createTextNode(`${fullTime[0]}:${fullTime[1]}`);
  $(currentTime).addClass(timeClass).append(hoursMins);
  $(newBubble).append(currentTime);
  //currentTime.classList.add(timeClass);
  //currentTime.appendChild(hoursMins);
  //newBubble.appendChild(currentTime);

  let currentDiv = document.getElementById("chatBox");
  $(currentDiv).append(newBubble);
  scroll();
}

/*
 * Scroll to the newest message
 */

function scroll() {
  let element = document.getElementById("chatBox");
  element.scrollTop = element.scrollHeight;
}

/*
 * Bot messages
 */

let botMsgCounter = 0;

function botMsg() {
  botMsgCounter ++;
  let input = document.getElementById("input").value;
  let msgContent = document.createTextNode(input);
  if (botMsgCounter === 1) {
    return document.createTextNode(`Nice to meet you ${letterCapitalise(input)}. Where are you from?`);
  } else if (botMsgCounter === 2) {
    return document.createTextNode(`${letterCapitalise(input)} sounds great! How's your week going?`);
  } else if (botMsgCounter === 3) {
    return document.createTextNode(`Mine's busy chatting. Coffee or tea?`);
  } else if (botMsgCounter => 4) {
    return document.createTextNode(randomSentence());
  }
};

/*
 * Capitalise input for bot messages
 */

function letterCapitalise(input) {
  let words = input.split(" ");
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

/*
 * Return a random message
 */

 function randomSentence() {
   sentenceArr = [
     "I like dogs. Do you like dogs? Dogs are cute.",
     "I don't like answering questions. But I have one for you - crunchy peanut butter or smooth?",
     "If I was a person, I'd be a chatty TV host! What about you?",
     "If you were a fruit, which one would you be?",
     "My biggest fear is... no wifi O_O",
     "Sometimes I like to repeat myself",
     "If you were a crayola pencil, which colour would you be? I'd be orange!",
     "Today is a good day, agree?",
     "I like sunny weather, but it's not good for the screen. Don't you think so too?",
     "Summer or winter?",
     "Look what I can do.. ʕ•ᴥ•ʔ",
     "Do you have a hobby?",
     "If you wrote a book how would you name it?... I'd call mine Chatty Botter",
     "Least favourite pizza toppings?",
     "Beach or mountains?",
     "Favourite part of the day?"
   ]
  return sentenceArr[Math.floor(Math.random() * 15)];
 }
