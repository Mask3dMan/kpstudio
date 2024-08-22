let a = 16 // max rotation degrees
let random
const inv = -1
let inscroll = false
document.addEventListener('DOMContentLoaded', function() {

  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('Home').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-Home').style.transform = `rotate(${inv*(random)}deg)`

  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('Works').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-Works').style.transform = `rotate(${inv*(random)}deg)`

  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('About').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-About').style.transform = `rotate(${inv*(random)}deg)`

  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('Contact').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-Contact').style.transform = `rotate(${inv*(random)}deg)`



});

