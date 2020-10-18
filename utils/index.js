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

const getPostData = (req) => {
  try {
    return new Promise((resolve, reject) => {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });

      req.on('end', async () => {
        resolve(body);
      });
    });
  } catch (error) {
    reject(error);
  }
};

module.exports = {
  writeDataToFile,
  getPostData,
};
