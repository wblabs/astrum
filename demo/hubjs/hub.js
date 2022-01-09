// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
    // Get the styles (properties and values) for the root
    var rs = getComputedStyle(r);
    // Alert the value of the --blue variable
    alert("Primary color: " + rs.getPropertyValue('--color-primary'));
}

// Create a function for setting a variable value
function myFunction_set() {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--color-primary', '#b8173c');
}
var a;
var b;
function hub_setCustomColor(a,b) {
    r.style.setProperty(a,b)
}