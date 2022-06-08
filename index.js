
let count = 0;
let btton = document.getElementById('count-el');
let savee = document.getElementById('save-el');
let sevish = document.getElementById('save');

function increment() {
 countTr += 1;
btton.innerText = count;

}
document.getElementById('increase').addEventListener('click', () => {
    increment();
})

function saveIt(){
console.log(count);
}

document.getElementById('save').addEventListener("click", () => {

    saveIt();
    let countTr = count + "-"
    savee.textContent += countTr;
     btton.textContent = 0;
      count = 0;
})


