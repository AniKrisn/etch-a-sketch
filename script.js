const container = document.querySelector('.container');
const box = document.createElement('div');

box.classList.add('box');
container.appendChild(box);


for (i=0; i<1024; i++) {
    const smallBox = document.createElement('div');
    smallBox.classList.add('smallbox');
    box.appendChild(smallBox);

}



function draw(e) {
    e.target.style.backgroundColor = 'black';
}

box.addEventListener('mousedown', (e) => {
    draw(e);

    box.onmousemove = (e) => {
        draw(e);
    };
});

box.addEventListener("mouseup", () => {
    box.onmousemove = null;
});

