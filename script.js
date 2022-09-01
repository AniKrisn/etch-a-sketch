const container = document.querySelector('.container');
const box = document.createElement('div');
const colorBox = document.createElement('div');

box.classList.add('box');
container.appendChild(box);

colorBox.classList.add('colorbox');
container.appendChild(colorBox);


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

box.addEventListener('mouseup', () => {
    box.onmousemove = null;
});

const smallBoxes = document.querySelectorAll('.smallBox');
const button = document.querySelector(button);
button.addEventListener('click', () => {
    alert('works');
})

// smallBoxes.target.style.backgroundColor = 'rgb(244, 248, 251)';

