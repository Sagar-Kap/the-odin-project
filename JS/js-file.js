const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

/* My work starts here, wish me luck o great person. */

const para = document.createElement("p");
para.classList.add("para");
para.textContent = "Hey I'm red!";
container.appendChild(para);

const heading = document.createElement("h3");
content.classList.add("heading");
content.textContent = "I'm a blue h3!"
container.appendChild(heading);

const divForH1 = document.createElement("div");
divForH1.classList.add("divForH1");
const headingOne = document.createElement("h1");

headingOne.textContent = "I'm in a div";
divForH1.appendChild(headingOne);

const para2 = document.createElement("p");
para2.textContent = "ME TOO!"
divForH1.appendChild(para2);

container.appendChild(divForH1);

const buttons = document.querySelectorAll("button");
buttons.forEach((b) =>{
    b.addEventListener("click", ()=>{
        alert(b.id);
    });
});