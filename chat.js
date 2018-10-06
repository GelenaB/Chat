//need to keep chat input in one place
//time out function for the bot

//set time out for the first message


//push enter key (using jquery), to run bot function.

//on load
$(document).keypress(function(e) {
  if (e.which == 13) {
    createBubble();
    timer();
  }});


function createBubble() {
  let newMsg = document.createElement("div");
  let para = document.createElement("p");
  newMsg.classList.add("parent", "container");
  // and give it some content
  let input = document.getElementById("input").value;
  let msgContent = document.createTextNode(input);
  // add the text node to the newly created div
  newMsg.appendChild(para);
  para.appendChild(msgContent);

  let currentTime = document.createElement("span");
  currentTime.classList.add("timeLeft");
  let fullTime = new Date().toTimeString().split(" ")[0].split(":");
  let hoursMins = document.createTextNode(`${fullTime[0]}:${fullTime[1]}`);
  // add the text node to the newly created div
  currentTime.appendChild(hoursMins);
  newMsg.appendChild(currentTime);
  //let parentDiv = document.getElementById("parent");
  //parent.appendChild(newMsg);

  // add the newly created element and its content into the DOM
  let currentDiv = document.getElementById("parent");
  currentDiv.appendChild(newMsg);
  //document.body.insertBefore(newMsg, currentDiv);
};

  function timer() {
    setTimeout (function() {
    let newMsg = document.createElement("div");
      let para = document.createElement("p");
    newMsg.classList.add("container");
    // and give it some content
    let msgContent = botMsg();
    // add the text node to the newly created div
    newMsg.appendChild(para);
    para.appendChild(msgContent);

    let currentTime = document.createElement("span");
    currentTime.classList.add("timeRight");
    let fullTime = new Date().toTimeString().split(" ")[0].split(":");
    let hoursMins = document.createTextNode(`${fullTime[0]}:${fullTime[1]}`);
    // add the text node to the newly created div
    currentTime.appendChild(hoursMins);
    newMsg.appendChild(currentTime);

    // add the newly created element and its content into the DOM
    let currentDiv = document.getElementById("parent");
    currentDiv.appendChild(newMsg);
    //let currentDiv = document.getElementById("output");
    //document.body.insertBefore(newMsg, currentDiv);
  }, 3000); //create a bot message
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
