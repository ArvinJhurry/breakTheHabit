const habitButton = document.getElementById("btn")


var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];

var n = 1;
var x = 0;

function AddRow(){

var AddRown = document.getElementById('habitTable');
var NewRow = AddRown.insertRow(n);

list1[x] = document.getElementById("habit").value;
list2[x] = document.getElementById("frequency").value;
list3[x] = document.getElementById("units").value;

var cel1 = NewRow.insertCell(0);
var cel2 = NewRow.insertCell(1);
var cel3 = NewRow.insertCell(2);


cel1.innerHTML = list1[x];
cel2.innerHTML = list2[x];
cel3.innerHTML = list3[x];

n++;
x++;
}


btn.addEventListener("click",AddRow);
