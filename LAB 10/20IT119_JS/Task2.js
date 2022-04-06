

let val = parseInt(prompt());
console.log(typeof val);

let num = "";

for(var i=0;i<=val;i++){
    num += i+"<br>";
    console.log(i);
}

document.getElementById('Number').innerHTML = num;