
let count = 0;
const btton = document.getElementById('count-el');
const savee = document.getElementById('save-el');
const sevish = document.getElementById('save');

function increment() {
 countTr += 1;
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
    let countTr = 0;
})


