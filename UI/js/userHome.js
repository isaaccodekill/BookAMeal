const closed = document.querySelector(".close")
const Overlay = document.querySelector(".show-card")
const innerShrink = document.querySelector(".card-expanded")
const card = document.querySelectorAll(".card")
const input = document.querySelector("#targetInput")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const cardlist = document.querySelector(".cardlist")
const submit = document.querySelector(".check-submit")
const newCheckout = document.querySelector(".checkout-page-new")
const delivery = document.querySelector(".delivery")
const deliverybody = document.querySelector('.delivery-form-content')
const carryout = document.querySelector(".carryout")
const carryoutBody = document.querySelector(".carryout-content")
const finalOrder = document.querySelector(".delivery-submit")
const popUp = document.querySelector(".success")


finalOrder.addEventListener("click", function (event) {
    event.preventDefault()
    popUp.classList.remove('invisible');
})


let cards = Array.from(card)


submit.addEventListener("click", function(){
    newCheckout.style.display = "block";
    delivery.style.color = "white";
    delivery.style.backgroundColor = "#08090a";
    innerShrink.style.display = "none";
})


delivery.addEventListener("click", function () {
    delivery.style.color = "white";
    delivery.style.backgroundColor = "#08090a";
    carryout.style.color = "#08090a";
    carryout.style.backgroundColor = "white";
    deliverybody.style.display = "block";
    carryoutBody.style.display = "none";
})

carryout.addEventListener("click", function () {
    carryout.style.color = "white";
    carryout.style.backgroundColor = "#08090a";
    delivery.style.color = "#08090a";
    delivery.style.backgroundColor = "white";
    deliverybody.style.display = "none";
    carryoutBody.style.display = "block";
})


// note add an invible overlay to each card and target it.

cardlist.addEventListener("click", function (e) {
    if (e.target.matches(".text-cover")) {
        let cardElement = e.target.parentElement
        input.value = 1;
        Overlay.style.display = "block"
        innerShrink.classList.add("shrink")
        Overlay.style.opacity = "1"
        setTimeout(() => {
            innerShrink.classList.remove("shrink")
        }, 500)
    }
})


closed.addEventListener("click", () => {
    Overlay.style.opacity = "0";
    innerShrink.classList.add("shrink")
    setTimeout(() => {
        Overlay.style.display = "none"
    }, 500)
})

minus.addEventListener("click", () => {
    if (input.value >= 2) {
        input.value = input.value - 1
    }
})

plus.addEventListener("click", () => {
    input.value = input.value - (-1)
})


