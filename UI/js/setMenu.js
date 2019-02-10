const listBody = document.querySelector(".listbody")

listBody.addEventListener("click", function (e) {
    if (e.target.matches(".listItem")) {
        if (e.target.lastElementChild.checked === false) {
            e.target.lastElementChild.checked = true   
        } else {
            e.target.lastElementChild.checked = false
        }
    }
})

