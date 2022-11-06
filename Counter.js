function IncrementCounter() {
    let counter = document.getElementById("counter")
    if (counter.innerHTML<100) {
        counter.innerHTML = parseInt(counter.innerHTML) + 1
    }
    if (counter.innerHTML%2 === 1) {
        counter.style.color = "green"
    } else{
        counter.style.color = "blue"
    }
}