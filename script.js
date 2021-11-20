let counter = 2;

const first_radio = document.getElementById('r1');
first_radio.checked = true;
const first_label = document.getElementById('b1')
first_label.style.backgroundColor = 'orangered'

const dark_mode_check = document.getElementById('darkcheck')
const dark_mode_label = document.getElementById('darklabel')


dark_mode_label.addEventListener('click', ()=>{
    setTimeout(()=>{
        if(dark_mode_check.checked){
            dark_mode_label.style.backgroundColor = 'yellow';
            document.body.classList.toggle('darkm');
        } else {
            dark_mode_label.style.backgroundColor = 'black';
            document.body.classList.toggle('darkm');
        }
    },0)    
})

setInterval(()=>{
    const btn = window.document.querySelector('.slider .slides #r'+counter);
    const shown_label = window.document.getElementById('b'+counter)
    btn.checked=true;
    shown_label.style.backgroundColor = 'orangered';

    if(counter==1){
        shown_label.parentElement.lastElementChild.style.backgroundColor='revert';
    } else {
        shown_label.previousElementSibling.style.backgroundColor='revert';
    }
    counter++;
    if(counter > 5) counter = 1;
}, 3000);