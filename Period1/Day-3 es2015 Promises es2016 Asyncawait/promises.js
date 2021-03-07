// promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

const myAsyncFuncRunner = async (runThis) => {
  await runThis;
  console.log('1');
  console.log('2');
  console.log('3');
};

myAsyncFuncRunner(myPromise);

myPromise
  .then(() => console.log('1'))
  .then(() => console.log('2'))
  .then(() => console.log('3'))
  .catch((err) => {
    console.log(err);
  });
