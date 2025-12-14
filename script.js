
const n = 10; 


const targetIndex = (n % 10) + 1; 

console.log(`Варіант: ${n}, Шуканий елемент ID: el${targetIndex}`);


function toggleColors(element) {
 
    if (element.style.backgroundColor === 'blue') {
        element.style.backgroundColor = '';
        element.style.color = '';
    } else {
        element.style.backgroundColor = 'blue';
        element.style.color = 'white'; 
    }
}


const firstElement = document.getElementById('el' + targetIndex);


const secondElement = document.querySelector(`#el${targetIndex} + *`);



if (firstElement) {
    firstElement.addEventListener('click', () => {
        toggleColors(firstElement);
    });
} else {
    console.error(`Елемент id="el${targetIndex}" не знайдено!`);
}

if (secondElement) {
    secondElement.addEventListener('click', () => {
        toggleColors(secondElement);
    });
} else {
    console.error(`Наступний елемент після id="el${targetIndex}" не знайдено!`);
}




const btnAdd = document.getElementById('addImg');
const btnIncrease = document.getElementById('increaseImg');
const btnDecrease = document.getElementById('decreaseImg');
const btnDelete = document.getElementById('deleteImg');


const imgContainer = document.querySelector('a[href="https://www.wien.info/en"]'); 


btnAdd.addEventListener('click', () => {
 
    if (!document.querySelector('a img') && !document.querySelector('body > img')) {
        const newImg = document.createElement('img');
        newImg.src = 'Viden.jpeg'; 
        newImg.alt = 'Зображення';
        newImg.style.width = '500px'; 
        
        if (imgContainer) {
            imgContainer.appendChild(newImg);
        } else {
            document.body.insertBefore(newImg, document.querySelector('div')); 
        }
    }
});


btnIncrease.addEventListener('click', () => {
    const image = document.querySelector('img');
    if (image) {

        image.style.width = (image.clientWidth + 50) + 'px';
    }
});


btnDecrease.addEventListener('click', () => {
    const image = document.querySelector('img');
    if (image) {
        let newWidth = image.clientWidth - 50;
        if (newWidth > 50) { 
            image.style.width = newWidth + 'px';
        }
    }
});


btnDelete.addEventListener('click', () => {
    const image = document.querySelector('img');
    if (image) {
        image.remove();
    }
});