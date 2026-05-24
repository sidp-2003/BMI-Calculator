function calculateBMI() {

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        document.getElementById("result").innerHTML =
            "Please enter all values";
        return;
    }

    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    let message = "";

    if (bmi < 18.5) {
        message = "Underweight";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        message = "Normal";
    }
    else if (bmi >= 25 && bmi < 30) {
        message = "Overweight";
    }
    else {
        message = "Obese";
    }

    document.getElementById("result").innerHTML =
        "Your BMI is " + bmi + "<br>" + message;
}