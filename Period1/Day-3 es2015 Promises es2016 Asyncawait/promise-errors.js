// Error handling
new Promise((resolve, reject) => {
  resolve('ok');
})
  .then((result) => {
    throw new Error('Whoops!'); // rejects the promise
  })
  .catch((err) => {
    console.log(err);
  }); // Error: Whoops!

new Promise((resolve, reject) => {
  resolve('ok');
})
  .then((result) => {
    blabla(); // no such function
  })
  .catch((err) => {
    console.log(err);
  }); // ReferenceError: blabla is not defined

// TRY CATCH
let authorized = false;

function getUserById(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      throw new Error('Unauthorized access to the user data');
    }

    resolve({
      id: id,
      username: 'admin',
    });
  });
}

const getMyUser = async () => {
  getUserById(10)
    .then((user) => console.log('username:', user.username))
    .catch((err) => console.log(`Caught by .catch ${err}`));
};
getMyUser();

//^^ same as below but with async await

const getMyUserAsyncAwait = async () => {
  try {
    const user = await getUserById(10);
    console.log('username:', user.username);
  } catch (error) {
    console.log(`Caught by try/catch ${error}`);
  }
};
getMyUserAsyncAwait();
