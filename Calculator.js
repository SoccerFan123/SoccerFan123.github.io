function calculate() {
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    let operator = document.getElementById("select")
    let result = document.getElementById("result")
    //console.log(num1.value)
    //console.log(num1)
    //console.log(num2.value)
    //console.log(operator.value)
    if (operator.value === "+") {
        result.innerHTML = parseFloat(num1.value) + parseFloat(num2.value)
    }
    else if (operator.value === "-") {
        result.innerHTML = num1.value - num2.value
    }
    else if (operator.value === "*") {
        result.innerHTML = num1.value * num2.value
    }
    else if (operator.value === "/") {
        result.innerHTML = num1.value / num2.value
    }
    //result.innerHTML = res

}