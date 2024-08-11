---
---



let a = 16 // gradi di rotazione
let random
const inv = -1
let inscroll = false
document.addEventListener('DOMContentLoaded', function() {
{% for item in site.data.nav%}
  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('{{item.name}}').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-{{item.name}}').style.transform = `rotate(${inv*(random)}deg)`
{% endfor %}

// {% for category in site.data.categories %}
// const {{category.name | split: " " | first | prepend: 'btn'}} = document.getElementById('{{category.name}}')
// {% endfor %}

// function handleRadioClick() {

// {% for category in site.data.categories %}
// if ({{category.name | split: " " | first | prepend: 'btn'}}.checked) {
//   document.getElementById('group{{category.name}}').classList.remove('hidden');
// }
// else {
//   document.getElementById('group{{category.name}}').classList.add('hidden');
// }

// {% endfor %}

// }

// const radioButtons = document.querySelectorAll(
//   'input[name="radio"]',
// );

// radioButtons.forEach(radio => {
//   radio.addEventListener('click', handleRadioClick);
// });
});

