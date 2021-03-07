const { filterDirMyPromise } = require('./filterdir');

async function tester() {
  try {
    const files = await filterDirMyPromise(__dirname + 1, '.js');
    console.log(files);
  } catch (error) {
    console.log(error);
  }
}
tester();
