var a = ""
var b = ""
var c = ""
var d = ""
var e = ""
var f = ""
var g = ""
var h = ""
var i = ""

function calculate() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;
    e = document.getElementById("e").value;
    f = document.getElementById("f").value;
    g = a;
    h = d;
    a = a*h;
    b = b*h;
    c = c*h;
    d = d*g;
    e = e*g;
    f = f*g;
    g = c-f;
    h = g/(b-e);
    g = c-b*h;
    i = g/a

    document.getElementById("output").innerText = `x = ${i} y = ${h}`;
}
