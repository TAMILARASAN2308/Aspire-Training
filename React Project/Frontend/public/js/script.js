// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
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

// Log retrieved data to the console for debugging
console.log("fromLocation:", fromLocation);
console.log("toLocation:", toLocation);
console.log("departuredate:", departuredate);
console.log("returndate:", returndate);
console.log("classValue:", classValue);

// Update text on the second page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("new_from").textContent = fromLocation;
    document.getElementById("new_to").textContent = toLocation;
    document.getElementById("new_departure").textContent = departuredate;
    document.getElementById("new_return").textContent = returndate;
    const classArray = ["Business", "Economy", "First"];
    document.getElementById("Economy").textContent = classArray[classValue];
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
    
}
