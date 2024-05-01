const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
        resolve(randomNumber); 
    } else {
        reject(randomNumber); 
    }
});

promise.then((randomNumber) => console.log(randomNumber + ' success')).catch((randomNumber) => console.log(randomNumber + ' failed'));
