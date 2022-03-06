// Data Picker Initialization
let month = document.getElementById('month');
let date = document.getElementById('date');
let year = document.getElementById('year');
let generateAkan =  document.getElementById("generateAkan");


function akanName (){
    let CC = year.value.slice(0,2);//Century Digit
    let YY = year.value.slice(2,4);// Year Digit
    let MM = month.value;
    let DD = date.value;
    let d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    return (d);
    console.log(d);



}
generateAkan.addEventListener('click', function (e){
    e.preventDefault()
    if (month.value == "" && year.value =="" && date.value =="") {
        alert("Please Enter you credentials");
        return false;
    }
    else if (year.value <= 0) {
        alert("invalid Year of Birth! ")
    }

    else if ((month.value < 1) || (month.value > 31)) {
        alert(" invalid Month! ")
    }

    else if (date.value < 0 || date.value > 31) {

        alert("invalid Date of Birth! ")
    }





})