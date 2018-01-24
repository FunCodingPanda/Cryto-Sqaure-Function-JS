function cryptoSquare(message) {
  var cleaned = message.toLowerCase().match(/[a-z]/g).join("");
  var c = Math.ceil(Math.sqrt(cleaned.length));
  var r = Math.floor(Math.sqrt(cleaned.length));
  var square = [];
  for (var i = 0; i < r; i++) {
    square.push([]);
    for (var j = 0; j < c; j++) {
      square[i][j] = cleaned[i*c + j];
    }
  }
  var coded = "";
  for (var i = 0; i < c; i++) {
    for (var j = 0; j < r; j++) {
      coded += square[j][i] || "";
    }
  }
  var numSpaces = c * r - coded.length;
  var result = "";
  var pos = 0;
  for (var i = 0; i < c; i++) {
    var diff = c - i - 1;
    if (diff >= numSpaces) {
      result += coded.slice(pos, pos + c - 1) + " ";
      pos += c - 1;
    } else {
      result += coded.slice(pos, pos + c - 2) + "  ";
      pos += c - 1;
    }
  }
  return result.slice(0, -1);
}

console.log("'" + cryptoSquare("If man was meant to stay on the ground, god would have given us roots.") + "'")

