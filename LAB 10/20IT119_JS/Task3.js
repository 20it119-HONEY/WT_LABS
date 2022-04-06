

var color=new Array(6);
color[0]="green";
color[1]="#eeeeee";
color[2]="#99CCFF";
color[3]="lavender";
color[4]="pink";
color[5]="#669999";

function changeColor()
{
var ranNum= Math.floor(Math.random()*6);
document.body.style.backgroundColor=color[ranNum];
}

