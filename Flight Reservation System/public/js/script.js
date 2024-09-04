// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-07-2024
// Reviewed By :
// Review Date : 




function register(event){
    event.preventDefault();
    var Firstname = document.getElementById("Firstname").value;
    var Lastname = document.getElementById("Lastname").value;
    var newpassword = document.getElementById("newpassword").value;
    var currentpassword= document.getElementById("currentpassword").value;
    if (Firstname && Lastname && newpassword && currentpassword && newpassword === currentpassword){
        window.location.href = "login.html";
    } else {
        alert("INCORRECT PASSWORD OR FILL ALL THE DETAILS");
    }
}

// Retrieve data from local storage
const fromLocation = localStorage.getItem("fromLocation");
const toLocation = localStorage.getItem("toLocation");
const departuredate = localStorage.getItem("departuredate");
const returndate = localStorage.getItem("returndate");
const classValue = localStorage.getItem("classValue");

// Log retrieved data 
console.log("fromLocation:", fromLocation);
console.log("toLocation:", toLocation);
console.log("departuredate:", departuredate);
console.log("returndate:", returndate);
console.log("classValue:", classValue);


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("new_from").textContent = fromLocation;
    document.getElementById("new_to").textContent = toLocation;
    document.getElementById("new_departure").textContent = departuredate;
    document.getElementById("new_return").textContent = returndate;
    // document.getElementById("modify_from").textContent = fromLocation;
    // document.getElementById("modify_to").textContent = toLocation;
    const classArray = ["Business", "Economy", "First"];
    document.getElementById("Economy").textContent = classArray[classValue];

    // Random flight name
    // const arr = ["EMIRATES", "SPICEJET", "INDIGO", "AIR INDIA"];
    // const departTimes = ["07:20", "08:45", "10:15", "12:30"];
    // const arriveTimes = ["09:35", "11:00", "12:45", "15:00"];
    // const prices = ["2000", "2500", "1500", "1800"];
    // const randomDepartTime = departTimes[Math.floor(Math.random() * departTimes.length)];
    // const randomArriveTime = arriveTimes[Math.floor(Math.random() * arriveTimes.length)];
    // const randomValue = arr[Math.floor(Math.random() * arr.length)];
    // const randomPrice = prices[Math.floor(Math.random() * prices.length)];
    
    // document.getElementById("flight_name").textContent = randomValue;
    // document.getElementById("depart_time").textContent = randomDepartTime;
    // document.getElementById("arrive_time").textContent = randomArriveTime;
    // document.getElementById("flight_price").textContent = "Rs. " + randomPrice;
    
    // localStorage.setItem("randomPrice", randomPrice);
});

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



function classType(count){
    let clsType =0;
    
    if (count==0){
        document.getElementsByClassName("cbnt")[count].style.backgroundColor="#3d5cb8";
        document.getElementsByClassName("cbnt")[count].style.color="#ffffff";
        document.getElementsByClassName("cbnt")[1].style.color="#64748b";
        document.getElementsByClassName("cbnt")[2].style.color="#64748b";
        document.getElementsByClassName("cbnt")[1].style.backgroundColor="";
        document.getElementsByClassName("cbnt")[2].style.backgroundColor="";
        clsType = 0;
        console.log(clsType);
        
        
    }
    else if (count==1){
        document.getElementsByClassName("cbnt")[count].style.backgroundColor="#3d5cb8";
        document.getElementsByClassName("cbnt")[count].style.color="#ffffff";
        document.getElementsByClassName("cbnt")[0].style.color="#64748b";
        document.getElementsByClassName("cbnt")[2].style.color="#64748b";
        document.getElementsByClassName("cbnt")[0].style.backgroundColor="";
        document.getElementsByClassName("cbnt")[2].style.backgroundColor="";
        clsType = 1;
        
    }
    else if (count==2){
        document.getElementsByClassName("cbnt")[count].style.backgroundColor="#3d5cb8";
        document.getElementsByClassName("cbnt")[count].style.color="#ffffff";
        document.getElementsByClassName("cbnt")[1].style.color="#64748b";
        document.getElementsByClassName("cbnt")[0].style.color="#64748b";
        document.getElementsByClassName("cbnt")[1].style.backgroundColor="";
        document.getElementsByClassName("cbnt")[0].style.backgroundColor="";
        clsType = 2;
    }
    localStorage.setItem("classValue", clsType);
    const classArray = ["Business", "Economy", "First"];
    document.getElementById("classInput").value = classArray[clsType];
    // document.getElementById("Economy").textContent = classArray[clsType];
    
}

// document.addEventListener("DOMContentLoaded", function() {
//     const flightPrice = localStorage.getItem("flightPrice");
//     document.getElementById("tp").textContent = flightPrice || "Rs.1000";
// });
