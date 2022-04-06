

var val = parseInt(prompt("Enter Number: "));
console.log(typeof val);

let ele = document.getElementById('js_val');

if(val%2 == 0){
    ele.innerHTML = val+" is Even";
    ele.style.color = 'green';
}
else{
    ele.innerHTML = val+" is Odd";
    ele.style.color = 'red';
}