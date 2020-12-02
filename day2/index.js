var fs = require('fs');

fs.readFile('./data.txt', function (err, data) {
  data = data.toString();
  data = data.split('\r\n');
  count = 0;
  for (i = 0; i < data.length; i++) {
    puzzle = data[i].split(' ');
    nums = puzzle[0].split('-').map((string) => parseInt(string));
    letter = puzzle[1][0];
    lettercount = 0;
    for (j = 0; j < puzzle[2].length; j++) {
      if (puzzle[2][j] == letter) {
        lettercount++;
      }
    }
    if (lettercount >= nums[0] && lettercount <= nums[1]) {
      count++;
    }
  }
  console.log(count);
  return;
});
