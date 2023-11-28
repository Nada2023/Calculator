function calculator(){
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let operations = document.getElementById("operations").value;
    if(operations == "+"){
        document.getElementById("result").innerHTML = number1 + number2;
    }else if (operations == "-"){
        document.getElementById("result").innerHTML = number1 - number2;
    }else if (operations == "*"){
        document.getElementById("result").innerHTML = number1 * number2;
    }else if (operations == "/"){
        document.getElementById("result").innerHTML = number1 / number2;

    }
}