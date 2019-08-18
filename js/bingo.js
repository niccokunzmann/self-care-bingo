
/*
 * load all bingo fields
 */
function loadBingos() {
  var bingoElements = document.getElementsByClassName("bingo");
  for (var i = 0; i < bingoElements.length; i++) {
    var bingoElement = bingoElements[i];
    var bingoName = bingoElement.id;
    var bingo = bingos[bingoName];
    if (!bingo) {
      bingoElement.innerText = 
        "Could not load a bingo named \"" + bingoName + "\"";
    } else {
      loadBingoInto(bingo, bingoElement);
    }
  }
}


/*
 * Load a bingo from bingo-source.js into an html element.
 */
function loadBingoInto(bingo, element) {
  // set heading
  var heading = document.createElement("h2");
  element.appendChild(heading);
  heading.innerText = bingo.heading;
  // create table
  var root = document.createElement("table");
  element.appendChild(root);
  for (var x = 0; x < bingo.width; x++) {
    var row = document.createElement("tr");
    root.appendChild(row);
    for (var y = 0; y < bingo.height; y++) {
      var index = x + bingo.width * y;
      var entry = bingo.entries[index];
      var field = document.createElement("td");
      row.appendChild(field);
      field.innerText = entry.text;
    }
  }
}

window.addEventListener("load", function(){
  loadBingos();
});


