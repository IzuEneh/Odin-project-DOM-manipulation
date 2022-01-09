const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement('p');
const heading = document.createElement('h3');
const div = document.createElement('div');

para.textContent = "Hey I'm red!";
para.style.color = "red";

heading.textContent = "I'm a blue h3!";
heading.style.color = "blue";

const innerHeader = document.createElement("h1");
const innerPara = document.createElement('p');

innerHeader.textContent = "I'm in a div";
innerPara.textContent = "ME TOO!";
div.appendChild(innerHeader);
div.appendChild(innerPara);


container.appendChild(content);
container.appendChild(para);
container.appendChild(heading);
container.appendChild(div);