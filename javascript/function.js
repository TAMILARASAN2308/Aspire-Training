let passengers = [];
const totalSeats = 150;
// Add passengers
function addPassenger(passengerName) {
    passengers.push(passengerName);
    console.log(passengerName + " added to the list of passengers.");
}
// Remove passengers
function removePassenger(passengerName) {
    const index = passengers.indexOf(passengerName);
    passengers.splice(index, 1);
    console.log(passengerName + " removed from the list of passengers.");
}
// Display passengers' names
function displayPassengers() {
    console.log("Passengers:");
    console.log(passengers);
}
// Adding passengers
addPassenger("krish");
addPassenger("afru");
addPassenger("sugu");
addPassenger("naresh");
displayPassengers();
// Remove passenger
removePassenger("sugu");
displayPassengers();

// Arrow Function
const calculateRefund = (percentage) => totalSeats * (percentage / 100);

console.log("Refund for all: " + calculateRefund(10));

// Callback Functions

function thankYouMessage(passengerName, callback) {
    const message = "Thank you, " + passengerName + ", for booking your flight with us.";
    callback(message);
}

function displayThankYouMessage(message) {
    console.log(message);
}

thankYouMessage("afru", displayThankYouMessage);
