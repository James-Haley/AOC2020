var fs = require('fs');

fs.readFile('./data.txt', function (err, data) {
  data = data.toString();
  data = data.split('\r\n');
  count = 0;
  for (i = 0; i < data.length; i++) {
    puzzle = data[i].split(' ');
    nums = puzzle[0].split('-').map((string) => parseInt(string));
    letter = puzzle[1][0];
    found = 0;
    if (puzzle[2][nums[0] - 1] == letter) {
      found++;
    }

    if (puzzle[2][nums[1] - 1] == letter) {
      found++;
    }
    if (found == 1) {
      count++;
    }
  }
  console.log(count);
  return count;
});
