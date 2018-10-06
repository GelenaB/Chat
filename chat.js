
function timeNow(i) {
  var d = new Date(),
      h = (d.getHours()<10?'0':'') + d.getHours(),
      m = (d.getMinutes()<10?'0':'') + d.getMinutes();
  i.value = h + ':' + m;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {

    //this is always right

  var newContainer = document.createElement("div");
  newContainer.classList.add("container");
  // and give it some content
  var input = document.getElementById("input").value;
  var newContent = document.createTextNode(input);
  // add the text node to the newly created div
  newContainer.appendChild(newContent);

  var newTime = document.createElement("span");
  newTime.classList.add("time-left");
  fullTime = new Date().toTimeString().split(" ")[0].split(":");
  var timeContent = document.createTextNode(`${fullTime[0]}:${fullTime[1]}`);
  // add the text node to the newly created div
  newTime.appendChild(timeContent);
  newContainer.appendChild(newTime);

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("output");
  document.body.insertBefore(newContainer, currentDiv);
}
});
