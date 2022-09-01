const container = document.querySelector('.container');
const box = document.createElement('div');

box.classList.add('box');
container.appendChild(box);


for (i=0; i<1024; i++) {
    const smallBox = document.createElement('div');
    smallBox.classList.add('smallbox');
    box.appendChild(smallBox);

}




box.addEventListener('mousedown', (e) => {
    e.target.style.backgroundColor = 'black';

    box.addEventListener('mousemove', (e) => {
        e.target.style.backgroundColor = 'black';
    });
});





`
const smallBoxes = document.querySelectorAll('div.container > div.box > div.smallBox');

smallBoxes.forEach((smallBox) => {
    return smallBox
})
`
