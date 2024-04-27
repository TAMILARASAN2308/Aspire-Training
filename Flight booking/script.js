// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-04-2024
// Reviewed By :
// Review Date :
function login(){
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username === "tamil" && password === "123") {
                alert("LOGIN SUCCESSFUL");
            } else {
                alert("INCORRECT USERNAME OR PASSWORD");
            }
}
function register(){
    var Firstname = document.getElementById("Firstname").value;
    var Lastname = document.getElementById("Lastname").value;
    var newpassword = document.getElementById("newpassword").value;
    var currentpassword= document.getElementById("currentpassword").value;
    if (Firstname && Lastname && newpassword && currentpassword && newpassword===currentpassword){
        alert("REGISTERATION SUCCESSFULLY")
    }
    else{
        alert("INCORRECT PASSWORD OR FILL ALL THE DETAILS")
    }
}

// Retrieve data from local storage
const fromLocation = localStorage.getItem("fromLocation");
const toLocation = localStorage.getItem("toLocation");
const departuredate = localStorage.getItem("departuredate");
const returndate = localStorage.getItem("returndate");

// Log retrieved data to the console for debugging
console.log("fromLocation:", fromLocation);
console.log("toLocation:", toLocation);
console.log("departuredate:", departuredate);
console.log("returndate:", returndate);

// Update text on the second page
document.getElementById("new_from").textContent = fromLocation;
document.getElementById("new_to").textContent = toLocation;
document.getElementById("new_departure").textContent = departuredate;
document.getElementById("new_return").textContent = returndate;
document.getElementById("modify_from").textContent = fromLocation;
document.getElementById("modify_to").textContent = toLocation;
//random flight name
document.addEventListener("DOMContentLoaded", function() {
    const arr = ["EMIRATES", "SPICEJET", "INDIGO", "AIR INDIA"];
    const departTimes = ["07:20", "08:45", "10:15", "12:30"];
    const arriveTimes = ["09:35", "11:00", "12:45", "15:00"];
    const prices = ["Rs. 2000", "Rs. 2500", "Rs. 1500", "Rs. 1800"];
    const randomDepartTime = departTimes[Math.floor(Math.random() * departTimes.length)];
    const randomArriveTime = arriveTimes[Math.floor(Math.random() * arriveTimes.length)];
    const randomValue = arr[Math.floor(Math.random() * arr.length)];
    const randomPrice = prices[Math.floor(Math.random() * prices.length)];
    const flightName = document.getElementById("flight_name");
    const depart_time = document.getElementById("depart_time");
    const arrive_time = document.getElementById("arrive_time");
    const flightPrice = document.getElementById("flight_price");
    flightName.textContent = randomValue;
    depart_time.textContent = randomDepartTime;
    arrive_time.textContent = randomArriveTime;
    flightPrice.textContent = randomPrice;

});

// Define function to handle form submission and store data in local storage
function handleSubmit() {
    const fromLocationInput = document.getElementById('fromLocation').value;
    const toLocationInput = document.getElementById('toLocation').value;
    const departuredateInput = document.getElementById('departuredate').value;
    const returndateInput = document.getElementById('returndate').value;

    localStorage.setItem("fromLocation", fromLocationInput);
    localStorage.setItem("toLocation", toLocationInput);
    localStorage.setItem("departuredate", departuredateInput);
    localStorage.setItem("returndate", returndateInput);
}
