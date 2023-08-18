const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const count = document.getElementById('cnt');

plus.addEventListener('click' , function(){
    count.textContent = parseInt(count.innerText)+1;
})

minus.addEventListener('click' , function(){
    count.textContent = parseInt(count.innerText)-1;
})