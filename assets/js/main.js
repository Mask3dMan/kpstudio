---
---



const a = 16 // max rotation degrees
let random
const inv = -1
let inscroll = false
document.addEventListener('DOMContentLoaded', function() {
{% for item in site.data.nav%}
  random = a/2 - Math.floor(Math.random()*a)
  document.getElementById('{{item.name}}').style.transform = `rotate(${random}deg)`
  document.getElementById('neg-{{item.name}}').style.transform = `rotate(${inv*(random)}deg)`
{% endfor %}
});

