var fs = require('fs');
var http = require('http');

fs.readFile('./data.txt', function (err, data) {
  data = data.toString();
  data = data.split('\n');
  data = data.map((string) => parseInt(string));
  for (i = 0; i < data.length; i++) {
    for (j = 0; j < data.length; j++) {
      for (k = 0; k < data.length; k++) {
        if (i != j && j != k && i != k && data[i] + data[j] + data[k] == 2020) {
          console.log(data[i] * data[j] * data[k]);
          return;
        }
      }
    }
  }
});
