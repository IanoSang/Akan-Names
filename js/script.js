
function formRefresh(){
    document.getElementById("form_data").reset();
}

// Event function on button
function akanNames() {

    let birthDate = document.getElementById("birthdate").value;
    let dateEntered = birthDate.split("-");
    let day = parseInt(dateEntered[2]);
    let month = parseInt(dateEntered[1]);
    let year = parseInt(dateEntered[0]);

    //Centuary calculation
    let centry = (year - 1) / 100 + 1;

    let dayOfTheWeek = (centry / 4 - 2 * centry - 1 + 5 * year / 4 + 26 * (month + 1) / 10 + day) % 7;

    document.getElementById("display").innerHTML = Math.round(dayOfTheWeek);
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let maleNames = ["Kwasi", " Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let gender = document.getElementById("gender").value;
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dOfWeek = Math.round(dayOfTheWeek)

    //form validation and output
    if (!isNaN(dOfWeek)) {
        if (gender == "Male") {
            document.getElementById("display").innerHTML = "Your akan names is " + maleNames[Math.round(dayOfTheWeek)] + " and you were born on " + daysOfWeek[dOfWeek];
        } else if (gender === "Female") {
            document.getElementById("display").innerHTML = "You were born on " + daysOfWeek[dOfWeek] + " and Your akan name is " + femaleNames[Math.round(dayOfTheWeek)];
        } else {
            alert("Enter valid dates and choose your gender");
            document.getElementById("display").innerHTML = "";
        }
    } else {
        alert("Enter valid birthday and choose your gender");
        document.getElementById("display").innerHTML = "";
    }


    //call to the reFresh function
    formRefresh();
}