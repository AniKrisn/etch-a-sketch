const container = document.querySelector('.container');
const box = document.createElement('div');
const colorBox = document.createElement('button');


box.classList.add('box');
container.appendChild(box);

colorBox.classList.add('colorbox');
colorBox.classList.add('color-input');
container.appendChild(colorBox);

document.querySelector('.colorbox').setAttribute('data-huebee', '{ "notation": "hex", "saturations": 1 }');


for (i=0; i<1024; i++) {
    const smallBox = document.createElement('div');
    smallBox.classList.add('smallbox');
    box.appendChild(smallBox);
}


function draw(e) {
    e.target.style.backgroundColor = 'blue';
}

function clear(e) {
    e.target.style.backgroundColor = 'rgb(244, 248, 251)';
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





const resetButton = document.getElementById('btn');
resetButton.addEventListener('click', () => {
    smallBoxes.forEach((smallBox) => {
        clear(smallBox);
    });
    console.log('click');
});


