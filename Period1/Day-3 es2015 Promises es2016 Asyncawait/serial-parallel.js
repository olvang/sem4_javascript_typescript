//Returns random number after 1 sec
function myPromise(success) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (success) {
        const randNum = Math.floor(Math.random() * Math.floor(100));
        console.log(randNum);
        resolve(randNum);
      } else {
        reject(Error('Failed!'));
      }
    }, 1000);
  });
}

// Serial

async function SerialFlow() {
  let result1 = await myPromise(true);
  let result2 = await myPromise(true);
  let result3 = await myPromise(true);

  let finalResult = result1 + result2 + result3;
  console.log('SerialFlow sum:', finalResult);
  return finalResult;
}

//SerialFlow();

async function ParallelFlow() {
  let result1 = myPromise(true);
  let result2 = myPromise(true);
  let result3 = myPromise(true);

  Promise.all([result1, result2, result3]).then((valueArray) => {
    let finalResult = valueArray[0] + valueArray[1] + valueArray[2];
    console.log('ParallelFlow sum:', finalResult);
    return finalResult;
  });
}

//ParallelFlow();

// With async/await.
async function ParallelFlowAsync() {
  let result1 = myPromise(true);
  let result2 = myPromise(true);
  let result3 = myPromise(true);

  try {
    const valueArray = await Promise.all([result1, result2, result3]);
    let finalResult = valueArray[0] + valueArray[1] + valueArray[2];
    console.log('ParallelFlowAsync sum:', finalResult);
    return finalResult;
  } catch (error) {
    console.log(error);
  }
}

ParallelFlowAsync();
