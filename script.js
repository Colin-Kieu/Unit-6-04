let num1 = 0
let num2 = 0
let num3 = 0

document.getElementById('button').addEventListener('click', solve)

function solve () {
  num1 = document.getElementById('input-1').value
  num2 = document.getElementById('input-2').value
  num3 = document.getElementById('input-3').value

  num1 = parseInt(num1)
  num2 = parseInt(num2)

  sum = (num1 + num2) / 2
  area = sum * num3

  document.getElementById('answer').innerHTML = area
}
