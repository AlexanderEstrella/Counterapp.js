
let count = 0;
let btton = document.getElementById('count-el');
let savee = document.getElementById('save-el');
let sevish = document.getElementById('save');

function increment() {
count += 1;
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
    savee.innerHTML += " " + count + " - ";
    let count = new count 
     count = 0;
})


