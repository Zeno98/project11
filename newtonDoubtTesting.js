var num1=document.getElementById('num1');
var num2=document.getElementById('num2');
let inc=document.getElementById('inc');
let dec=document.getElementById('dec');
var output=document.getElementById('output');
var output1=document.getElementById('output1');

var count=0;

function add(){
let res1=parseInt(num1.value);
let res2=parseInt(num2.value);
let res=res1+res2
output.innerHTML=res;
}

function multiply(){
    console.log('hello')
let res3=parseInt(num1.value)
let res4=parseInt(num2.value);
let res1=res3*res4;
output1.innerHTML=res1;
}



