function slowTime(){
    // console.log('slow')
    clock1 = document.querySelector('.Sydney .arrow5')
    // clock1.style.animationDuration = '120s'
    clock1.classList.remove('normalTime')
    clock1.classList.add('slowly')
    clock2 = document.querySelector('.NewYork .arrow7')
    // clock1.style.animationDuration = '120s'
    clock2.classList.remove('normalTime')
    clock2.classList.add('slowly')
}
function fastTime(){
    clock1 = document.querySelector('.Moscow .arrow1')
    clock1.classList.remove('normalTime')
    clock1.classList.add('fastly')
    clock2 = document.querySelector('.London .arrow3')
    clock2.classList.remove('normalTime')
    clock2.classList.add('fastly')
}