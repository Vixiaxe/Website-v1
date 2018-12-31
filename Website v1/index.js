//math test
var x = 200;
var y = (x + 200) * 10;
var target = document.getElementById("target");

window.addEventListener("load", function() {
  var skill1 = "VMWare";

  var target = document.getElementById("target");
  var node = document.createTextNode(skill1 + " " + y);
  target.appendChild(node);
});
