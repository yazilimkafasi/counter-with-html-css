clicks = 0
ani = ['left', 'right', 'bottom', 'top']

document.querySelector('div').addEventListener('click', function() {
    this.classList.toggle('down')
    clicks++
    this.innerHTML = clicks

    var b = document.createElement('div')
    var a = ani[Math.floor(Math.random() * ani.length)]
    b.className = 'b ' + a

    if (a == 'top' || a == 'bottom') {
        b.style.left = Math.random() * window.innerWidth + 'px'
    } else {
        b.style.top = Math.random() * window.innerHeight + 'px'
    }

    color = 'hsl(' + Math.random() * 360 + 'deg,100%,50%)'
    b.style.borderColor = color
    b.style.boxShadow = '0 0 25px 3px ' + color + ', inset 0 0 15px ' + color

    if (clicks % 10 === 0) {
        b.style.transform = 'scale(5)'
    }
    if (clicks % 50 === 0) {
        b.style.transform = 'scale(10)'
    }

    document.body.appendChild(b)

    if (document.querySelectorAll('.b').length > 20) {
        document.querySelectorAll('.b')[0].remove()
    }
})