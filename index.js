let num1=document.getElementById("num1-el");
let num2=document.getElementById("num2-el");
let sumEl = document.getElementById("sum-el");
 

 function add()
 {
    sumEl.textContent = Number(num1.value)+ Number(num2.value);
 }

  function sub()
 {
    sumEl.textContent = Number(num1.value)- Number(num2.value);
 }
  function div()
 {
    if(Number(num2.value)==0)
    {
        sumEl.textContent="Cannot divide by zero";
        return;
    }
    sumEl.textContent = Number(num1.value)/ Number(num2.value);
 }
  function mul()
 {
    sumEl.textContent = Number(num1.value)*Number(num2.value);
 }

 function clearDisplay() {
    display.value = "";
}
function deleteNumber() {
    display.value = display.value.slice(0, -1);
}
