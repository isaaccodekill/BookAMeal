const closed = document.querySelector(".close")
const Overlay = document.querySelector(".show-card")
const innerShrink = document.querySelector(".card-expanded")
const card = document.querySelectorAll(".card")
const input = document.querySelector("#targetInput")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const cardlist = document.querySelector(".cardlist")

let cards = Array.from(card)


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


// handling checkout

const checkoutButton = document.querySelector(".cart-icon")
const scaleUp = document.querySelector(".checkout")
const checkoutPage = document.querySelector(".checkout-page")
const checkoutList = document.querySelector(".item-list") // target = 
const checkoutRealPage = document.querySelector(".item-list-holder");
const body = document.querySelector("body")

checkoutButton.addEventListener("click", function () {
    let image = this.lastElementChild
    let icon = this.firstElementChild
    image.classList.toggle("imghide")
    icon.classList.toggle("iconShow")
    checkoutRealPage.classList.toggle("checkout-display")
    this.classList.toggle("changeColor")
    scaleUp.classList.toggle("growCheckout")
    checkoutPage.classList.toggle("showCheckpage")
    body.classList.toggle("removeScroll")

})



checkoutList.addEventListener("click", function (e) {
    if (e.target.matches("i")) {
        e.target.parentElement.parentElement.remove()
    }
})