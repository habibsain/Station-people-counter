let countEl = document.getElementById("count-el")
let count = 0
let num;

function increment() {
    count = count + 1

    countEl.innerText = count
}

function save() {
    num = countEl.innerText
    console.log(num)
}