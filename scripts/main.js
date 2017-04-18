// JavaScript source code
var myImage = document.getElementById("mainWolfImage");
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/canis_lupus.jpg') {
        myImage.setAttribute('src', 'images/canis_lupus2.jpg');
    } else {
        myImage.setAttribute('src','images/canis_lupus.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello, ' + myName + ' !';
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName + ' !';
}

myButton.onclick = function() {
    setUserName();
}