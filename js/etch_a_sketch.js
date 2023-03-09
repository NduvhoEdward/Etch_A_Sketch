// Greetings msg
const greeting = document.createElement('div');
greeting.classList.add('greeting');
greeting.textContent = 'Shall we begin?';

const header = document.querySelector('header');
header.appendChild(greeting); 

// Grid container
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

const main = document.querySelector('main');
main.appendChild(gridContainer);

// Grids 
const gridSize = 8;
let blocksRow = null; 

for (let i = 0; i < gridSize; i++) { 
    blocksRow = document.createElement('div');
    blocksRow.classList.add('blocksRow');
    for (let j = 0; j < gridSize; j++) { 
        let block = document.createElement('div'); 
        block.classList.add('block');
        blocksRow.appendChild(block); 
    }
    gridContainer.appendChild(blocksRow);
}
