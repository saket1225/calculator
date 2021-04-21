let calkeys = document.querySelectorAll(".calkey")
let displayText = document.querySelector(".displayText")

for (const calkey of calkeys){
    calkey.addEventListener('click', () => {
        displayText.value += calkey.innerText
    })
}
