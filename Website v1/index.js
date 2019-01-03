//math test

var x = 200;
var y = (x + 200) * 10;
var target = document.getElementById("target");

window.addEventListener("load", function() {
  var skill1 = "VMWare";

  var target = document.getElementById("target");
  let node = document.createTextNode(skill1 + " " + y);
  target.appendChild(node);
});

for (let i = 0; i <= 10; i++) {
  printnumbers(i);

  function printnumbers(input) {}

  console.log(i);
}

var Tyler = {
  name: "Tyler",
  Gender: "Male"
};

console.log(Tyler);

var i = 0;
while (i <= 10) {
  console.log(i + "<br />");
  i++;
  let node = document.createTextNode(i);
  var breakl = document.createElement("br");
  target.appendChild(node);
  target.appendChild(breakl);
  console.log(node);
}

function testing() {}
