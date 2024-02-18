function slowTime(){
    if (screen.availWidth < 400) {
        clock1 = document.querySelector('.London .arrow3')
        // clock1.style.animationDuration = '120s'
        clock1.classList.remove('normalTime')
        clock1.classList.add('slowly')
        

    } 
    else{
        clock1 = document.querySelector('.Sydney .arrow5')
        // clock1.style.animationDuration = '120s'
        clock1.classList.remove('normalTime')
        clock1.classList.add('slowly')
        clock2 = document.querySelector('.NewYork .arrow7')
        // clock1.style.animationDuration = '120s'
        clock2.classList.remove('normalTime')
        clock2.classList.add('slowly')

    }
}
function fastTime(){
    if (screen.availWidth < 400) {
        clock1 = document.querySelector('.Moscow .arrow1')
        clock1.classList.remove('normalTime')
        clock1.classList.add('fastly')
        

    } 
    else{
    clock1 = document.querySelector('.Moscow .arrow1')
    clock1.classList.remove('normalTime')
    clock1.classList.add('fastly')
    clock2 = document.querySelector('.London .arrow3')
    clock2.classList.remove('normalTime')
    clock2.classList.add('fastly')
    }
}

function work(){
    line1 = document.querySelector(".line1")
    line2 = document.querySelector(".line2")
    line3 = document.querySelector(".line3")
    if (getComputedStyle(line3, null).display == 'none') {
        workBack()
        return true
    }
    line3.style.display = 'none'
    line1.style.top = 'calc(50% - 1.5px)'
    line1.style.transform = 'rotate(45deg)'
    line2.style.transform = 'rotate(-45deg)'
    line1.style.width = '70%'
    line2.style.width = '70%'
    line1.style.left = '15%'
    line2.style.left = '15%'
    document.querySelector("nav").style.display = 'flex'
}

function workBack (){
    line1 = document.querySelector(".line1")
    line2 = document.querySelector(".line2")
    line3 = document.querySelector(".line3")
    line3.style.display = 'block'
    line1.style.top = '23%'
    line1.style.transform = 'rotate(0)'
    line2.style.transform = 'rotate(0)'
    line1.style.width = '60%'
    line2.style.width = '60%'
    line1.style.left = '20%'
    line2.style.left = '20%'
    document.querySelector("nav").style.display = 'none'
}

let nav = document.querySelector('nav')
nav.style.opacity = '1'
setTimeout('nav.style.opacity = "0"', 3000)

document.getElementById('home').addEventListener('click', function(){
    window.scrollTo(0,0)
})