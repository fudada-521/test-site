let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === './images/gisuni.jpg') {
        myImage.setAttribute('src', './images/logo.png');
    } else {
        myImage.setAttribute('src', './images/gisuni.jpg');
    }
}


let myButton = document.querySelector('button');
let myH1 = document.querySelector('h1');

function setUsername() {
    let username = prompt('请输入名字：');
    localStorage.setItem('name', username);
    myH1.textContent = '你好，' + username;
}
let localName = localStorage.getItem('name')
if (!localName) {
    setUsername();
} else {
    myH1.textContent = '你好，' + localName;
}

myButton.onclick = function(){
    setUsername();
};
