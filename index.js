
let count = 0;
let btton = document.getElementById('count-el');
let savee = document.getElementById('save-el');

function increment() {
 count += 1;
btton.textContent = count;
}
document.document.getElementById('count-el').addEventListener('click', function () {
increment();

})
function save(){
 let countTr = count + '-'
 savee.innerText += countTr;
 btton.innerText = 0;
 count = 0;
}
document.document.getElementById('count-el').addEventListener('click', function () {
save();

})



