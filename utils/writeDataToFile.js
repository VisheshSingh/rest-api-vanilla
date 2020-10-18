const fs = require('fs');

const writeDataToFile = (filename, content) => {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Data written to the file successfully');
    }
  });
};

module.exports = {
  writeDataToFile,
};
