const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//Exercise starts below 
const paragraph = document.createElement('p'); //not showing
paragraph.style.cssText = 'color: red;';
paragraph.textContent = `Hey I'm red!`;
container.appendChild(paragraph);

const h3 = document.createElement('h3');
h3.style.cssText = 'color: blue;';
h3.textContent = `I'm a blue h3!`;
container.appendChild(h3);

const secondDiv = document.createElement('div');
secondDiv.style.border = '5px solid black'; 
secondDiv.style.background = 'pink';
    const h1 = document.createElement('h1');
    h1.textContent = `I'm in a div!`;
    secondDiv.appendChild(h1);

    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'ME TOO!';
    secondDiv.appendChild(paragraph2);

container.appendChild(secondDiv);

//events on the button
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const btn = document.querySelector('#btn');

btn.addEventListener('click', alertFunction);
btn.addEventListener('click', function (e) {
    console.log(e.target);
});