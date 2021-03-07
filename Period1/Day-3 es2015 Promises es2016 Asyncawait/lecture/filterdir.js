const fs = require('fs');

//Omskriv denne til promisese
function filterDir(path, ext, cb) {
  fs.readdir(path, (err, b) => {
    if (err) {
      cb(err);
    }
    const filtered = b.filter((f) => f.endsWith(ext));
    cb(null, filtered);
  });
}

//This is what you have to com
function filterDirMyPromise(path, ext) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, b) => {
      if (err) {
        reject(err);
      }
      const filtered = b.filter((f) => f.endsWith(ext));
      resolve(filtered);
    });
  });
}

module.exports.filterDirMyPromise = filterDirMyPromise;
