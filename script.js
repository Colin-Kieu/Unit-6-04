let num1 = 0
let num2 = 0
let num3 = 0
let sum = 0
let area = 0
/*set base values for my variables*/
document.getElementById('button').addEventListener('click', solve)
/*this will do everything under the function solve area when the button is clicked*/ 
function solve () {
  num1 = document.getElementById('input-1').value
  num2 = document.getElementById('input-2').value
  num3 = document.getElementById('input-3').value
  /*this will store the values that are put into the textboxes*/ 
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  /*parseInt converts the numbers into integers*/ 
  sum = (num1 + num2) / 2
  area = sum * num3
  /*this is the actual math part*/
  document.getElementById('answer').innerHTML = area
  /*this will display the answer onto the webpage and not like an alert*/
}
