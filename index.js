
let count = 0;
let btton = document.getElementById('count-el');
let savee = document.getElementById('save-el');

function increment() {
 countTr += 1;
btton.textContent = count

}
function save(){
 let countTr = count + '-'
 savee.innerText += countTr
 btton.innerText = 0
 count = 0
 
}


