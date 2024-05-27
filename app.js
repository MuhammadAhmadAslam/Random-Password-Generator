var btn = document.getElementById('Generate')
var para = document.getElementById('Generating')
btn.addEventListener('click',() => {
  var timer = setInterval(() => {
      var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '1', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'N', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var symble = ['@', '#', '$', '%', '&', '*',]
  var abcNumber = Math.round(Math.random() * 24)
    var ABCNumber = Math.round(Math.random() * 24)
    var number = Math.round(Math.random() * 9)
    var symbleNumber = Math.round(Math.random() * 5)
      var pasword = `${abc[abcNumber]}${number}${symble[symbleNumber]}${ABC[ABCNumber]}${abc[abcNumber]}${number}${ABC[ABCNumber]}`
      para.innerText = pasword
      console.log(pasword);
  }, 9000);
})