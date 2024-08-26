let a = 16 // max rotation degrees
let random
const inv = -1
let inscroll = false
document.addEventListener('DOMContentLoaded', function() {

  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('home').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-home').style.transform = `rotate(${inv*(random)}deg)`

  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('works').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-works').style.transform = `rotate(${inv*(random)}deg)`

  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('about').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-about').style.transform = `rotate(${inv*(random)}deg)`

  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('contact').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-contact').style.transform = `rotate(${inv*(random)}deg)`

});

