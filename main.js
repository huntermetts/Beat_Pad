window.addEventListener('keydown', playSound)


function playSound(keyNumberPressed){
    const audio = document.querySelector(`audio[data-key="${keyNumberPressed.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${keyNumberPressed.keyCode}"]`)
    if(!audio) return
    // Rewinds to start
    audio.currentTime = 0; 
    audio.play();
    key.classList.add("playing")
}


function removeTransition(e){
    if (e.propertyName !== 'transform') return 
    this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

