//Order elements from HTML file
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsuis = document.getElementById("toCelsuis");
const result = document.getElementById("result");

//Create convert function

function convert(){

    if(toFahrenheit.checked){

        //Cast user input to Number
        temp = Number(textBox.value);

        //Convert degree to Fahrenhiet
        temp = temp * 9/5 + 32;

        //Display result
        result.innerHTML = temp.toFixed(2) + "°F"
    }
    else if(toCelsuis.checked){

        //Cast user input to Number
        temp = Number(textBox.value);

        //Convert degree to Celsuis
        temp = (temp-32) * (5/9);

        //Display result
        result.innerHTML = temp.toFixed(2) + "°C"
    }
    else {

        //In case user didn't chose any unit
        result.innerHTML = "Select a unit"
    }

}
