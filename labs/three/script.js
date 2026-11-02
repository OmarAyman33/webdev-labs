let counter = 0;

const quantityCounter = document.getElementById("Counter")
const show_button = document.getElementById("show_quantity")
const add_to_cart = document.getElementById("add_to_cart")
const plusTwo = document.getElementById("plus_two")
const plusThree = document.getElementById("plus_three")
const reset = document.getElementById("reset")

show_button.addEventListener("click", () => {
    quantityCounter.innerHTML = counter;
})

add_to_cart.addEventListener("click", () => {
    counter++;
    quantityCounter.innerHTML = counter;
})

plusTwo.addEventListener("click", () => {
    counter += 2;
    quantityCounter.innerHTML = counter;
})

plusThree.addEventListener("click", () => {
    counter += 3;
    quantityCounter.innerHTML = counter;
})

reset.addEventListener("click", () => {
    counter = 0;
    quantityCounter.innerHTML = counter;
})