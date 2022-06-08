
let countTr = 0;
let btton = document.getElementById('count-el');
let savee = document.getElementById('save-el');
let sevish = document.getElementById('save');

function increment() {
 countTr += 1;
btton.innerText = countTr;

}
document.getElementById('increase').addEventListener('click', () => {
    increment();
})

function saveIt(){
console.log(countTr);
}

document.getElementById('save').addEventListener("click", () => {

    saveIt();
    savee.innerHTML += " " + countTr + " - ";
    let countTr = 0;
})


