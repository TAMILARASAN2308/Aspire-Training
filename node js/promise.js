// Title : NODE JS
// Author : TAMILARASAN M
// Created At : 27-04-2024
// Last Modified Date : 27-04-2024
// Reviewed By :
// Review Date : 
const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
        resolve(randomNumber); 
    } else {
        reject(randomNumber); 
    }
});

promise.then((randomNumber) => console.log(randomNumber + ' success')).catch((randomNumber) => console.log(randomNumber + ' failed'));
