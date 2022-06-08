
let count = 0;
let btton = document.getElementById('count-el');
let savee = document.getElementById('save-el');
let sevish = document.getElementById('save');

function increment() {
const countTr += 1;
btton.innerText = countTr;

}
document.getElementById('increase').addEventListener('click', () => {
    increment();
})

function saveIt(){
console.log(count);
}

document.getElementById('save').addEventListener("click", () => {

    saveIt();
    savee.innerHTML += " " + count + " - ";
    countTr = 0;
})


