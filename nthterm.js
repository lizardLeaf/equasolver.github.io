var a = "";
var b = ""; 
var c = ""; 
var d = ""; 
var e = ""; 
var f = ""; 
var g = ""; 
var h = "";

function calculate() {
  a = document.getElementById("a").value;
  b = document.getElementById("b").value;
  c = document.getElementById("c").value;
  d = document.getElementById("d").value;
  e = document.getElementById("e").value;
  if (b - a == e - d) {
     g = 1;
      f = b - a;
      if (a == b - a) {
         h = "±0";
      } 
      else {
          h = (b - a) - a;
     }
  } 
     else if ((c - b) - (b - a) == (d - c) - (c - b))   {
     g = 2
     f = ((c - b) - (b - a)) / 2;
     h = a-f*1**2
  } 
     else {
     console.log("error");
  }
     document.getElementById("output").innerText =  `${f}n to the power of ${g} + ${h}`
}
