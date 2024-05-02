// Title : NODE JS
// Author : TAMILARASAN M
// Created At : 27-04-2024
// Last Modified Date : 27-04-2024
// Reviewed By :
// Review Date : 
var event=require('events');
var emitter= new event.EventEmitter();
emitter.on('flightbooking',()=>{
    console.log("Flight booked");
})

function flightbook(){
    console.log("welcome");
    console.log("search for fight");
    console.log("book a flight");
    emitter.emit('flightbooking');
    console.log("thank you");
}
flightbook();