const closed = document.querySelector(".close")
const Overlay = document.querySelector(".show-card")
const innerShrink = document.querySelector(".card-expanded")
const card = document.querySelectorAll(".card")
const cardlist = document.querySelector(".card-list")
const navItem = document.querySelectorAll(".nav-item")
const mealOptionPage = document.querySelector(".Meal-options")
const menuPage = document.querySelector(".Menu")
const orderPage = document.querySelector(".order-history")
const orderTodayPage = document.querySelector(".order-today")

const menuList = document.querySelector(".card-list-menu")
const noItems = document.querySelector(".no-items")
const body = document.querySelector("body")


const mealOptions = document.querySelector(".a")
const todayMenu = document.querySelector(".b")
const orderHistory = document.querySelector(".c")
const orderToday = document.querySelector(".d")

cardlist.addEventListener("click", function (e) {
    if (e.target.matches(".text-cover")) {
        let cardElement = e.target.parentElement
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


// slide in the nav bar

const menu = document.querySelector(".hamburger")
const overlay = document.querySelector(".overlay")
const sidebar = document.querySelector(".sidebar")
const closed2 = document.querySelector(".closed")

menu.addEventListener("click", () => {
    overlay.style.display = "block"
    sidebar.style.display = "block"
    sidebar.classList.add("animated")
    sidebar.classList.add("slideInLeft")
})

closed2.addEventListener("click", () => {
    sidebar.classList.remove("slideInLeft")
    sidebar.classList.add("slideOutLeft")
    let me = setTimeout(() => {
        sidebar.style.display = "none"
        sidebar.classList.remove("slideOutLeft")
        overlay.style.display = "none"
        clearTimeout(me)
    }, 700)
})



navItem.forEach(nav => {
    nav.addEventListener("click", function () {
        sidebar.classList.remove("slideInLeft")
        sidebar.classList.add("slideOutLeft")
        let me = setTimeout(() => {
            sidebar.style.display = "none"
            sidebar.classList.remove("slideOutLeft")
            overlay.style.display = "none"
            clearTimeout(me)
        }, 700)
    })
})

mealOptions.addEventListener("click", function () {
    mealOptionPage.style.display = "block"
    menuPage.style.display = "none"
    orderPage.style.display = "none" 
    orderTodayPage.style.display = "none"
})


todayMenu.addEventListener("click", function () {
    mealOptionPage.style.display = "none"
    menuPage.style.display = "block"
    orderPage.style.display = "none" 
    orderTodayPage.style.display = "none"
})



orderHistory.addEventListener("click", function () {
    mealOptionPage.style.display = "none"
    menuPage.style.display = "none"
    orderPage.style.display = "block" 
    orderTodayPage.style.display = "none"
})

orderToday.addEventListener("click", function () {
    mealOptionPage.style.display = "none"
    menuPage.style.display = "none"
    orderPage.style.display = "none" 
    orderTodayPage.style.display = "block"
})


if (menuList.innerHTML === "") {
    noItems.style.display = "block"
}