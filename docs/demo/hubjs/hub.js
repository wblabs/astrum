// Get the root element
var r = document.querySelector(':root');

// Get the styles (properties and values) for the root
var rs = getComputedStyle(r);

// Create a function for getting a variable value
function myFunction_get() {
    // Alert the value of the --blue variable
    alert("P:" + rs.getPropertyValue('--color-primary') + "&nbsp; | &nbsp;S:" + rs.getPropertyValue('--color-secondary'));
}

var originPrimary = rs.getPropertyValue('--color-primary');
var originSecondary = rs.getPropertyValue('--color-secondary');

function  hub_OriginColors() {
    alert("P" + originPrimary + "S" + originSecondary)
}

function hub_SetOriginalColors() {
    r.style.setProperty('--color-primary', originPrimary);
    r.style.setProperty('--color-secondary', originSecondary);
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

var p;
var s;
function hub_setTheme(p,s) {
    r.style.setProperty('--color-primary', p);
    r.style.setProperty('--color-secondary', s);
    console.log('p ' + p + 's ' + s)
}

//color picker for Primary color
var inputP = document.getElementById('docs-picker-p')
inputP.addEventListener('change',
function hub_setFromPickerP (){
    r.style.setProperty('--color-primary', inputP.value)
})
var inputS = document.getElementById('docs-picker-s')
inputS.addEventListener('change',
function hub_setFromPickerP (){
    r.style.setProperty('--color-secondary', inputS.value)
})

//docs-popover
function hubPopover() {
    document.getElementById("docs-popover").classList.toggle("docs-popover--active");
}