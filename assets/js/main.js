let a = 16 // gradi di rotazione
let random
const inv = -1
document.addEventListener('DOMContentLoaded', function() {

  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('Home').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-Home').style.transform = `rotate(${inv*(random)}deg)`

  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('Works').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-Works').style.transform = `rotate(${inv*(random)}deg)`

  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('Photos').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-Photos').style.transform = `rotate(${inv*(random)}deg)`

  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('About').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-About').style.transform = `rotate(${inv*(random)}deg)`

  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('Contact').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-Contact').style.transform = `rotate(${inv*(random)}deg)`



const btnAll = document.getElementById('All')

const btn3D = document.getElementById('3D')

const btnicons = document.getElementById('icons')

const btnbrand = document.getElementById('brand identity')

const btnlogos = document.getElementById('logos')

const btnillustrations = document.getElementById('illustrations')


function handleRadioClick() {


if (btnAll.checked) {
  document.getElementById('groupAll').classList.remove('hidden');
}
else {
  document.getElementById('groupAll').classList.add('hidden');
}


if (btn3D.checked) {
  document.getElementById('group3D').classList.remove('hidden');
}
else {
  document.getElementById('group3D').classList.add('hidden');
}


if (btnicons.checked) {
  document.getElementById('groupicons').classList.remove('hidden');
}
else {
  document.getElementById('groupicons').classList.add('hidden');
}


if (btnbrand.checked) {
  document.getElementById('groupbrand identity').classList.remove('hidden');
}
else {
  document.getElementById('groupbrand identity').classList.add('hidden');
}


if (btnlogos.checked) {
  document.getElementById('grouplogos').classList.remove('hidden');
}
else {
  document.getElementById('grouplogos').classList.add('hidden');
}


if (btnillustrations.checked) {
  document.getElementById('groupillustrations').classList.remove('hidden');
}
else {
  document.getElementById('groupillustrations').classList.add('hidden');
}



}

const radioButtons = document.querySelectorAll(
  'input[name="radio"]',
);

radioButtons.forEach(radio => {
  radio.addEventListener('click', handleRadioClick);
});
});

