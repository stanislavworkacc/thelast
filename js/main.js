const btns = document.querySelectorAll('.counter__btn');
const typeOfAll = document.querySelectorAll('.coffeeType');
const inputOfAll = document.querySelectorAll('.counter__value');
console.log(typeOfAll)

function saveValue() {
    for(let i = 0; i < typeOfAll.length; i++) {
        /* Отримуэмо значення по ключу з бази */
        let cuurentNodeKey = typeOfAll[i].textContent;
        let numberOfCNK = Number(localStorage.getItem(`${cuurentNodeKey}`));
        /* Поточне значення інпута, яке після перезавантаження = 0 */
        let currentInputValue = inputOfAll[i].value;
        currentInputValue = +numberOfCNK
        inputOfAll[i].value = currentInputValue;
        /* Значення інтпута збережене в базі */
        currentInputDataValue = JSON.parse(localStorage.getItem(`${typeOfAll}`));
    }
}

saveValue();
sumOfCofffe();

btns.forEach((btn) => {
    btn.addEventListener('click', counerAddDel);
})


function counerAddDel () {
    /* Напрям */
    const direction = this.dataset.direction;
    /* Отримуєм інтуп */
    const input = this.parentElement.querySelector('.counter__value');
    /* Отримуємо ключ елемента зі сторінки */
    const typeOf = this.parentElement.querySelector('.coffeeType').textContent;
    /* Значення поточного елемента в базі */
    let localStorageData = JSON.parse(localStorage.getItem(`${typeOf}`));
    /* Змінюємо значення поточного елемента на сторінці */
    const currentValue = localStorageData;
    let newValue;
    if(direction === 'plus') {
        newValue = currentValue + 1;
    } else {
        newValue = currentValue - 1 > 0 ?
        currentValue - 1 : 0;
    }
    input.value = newValue;
    /* добавляємо елементи в локал стор */
    updateLocal(typeOf, newValue);
    sumOfCofffe();
}

function updateLocal(typeOf, newValue) {
    localStorage.setItem(typeOf, newValue);
}

/* SECOND PART */

const coffeeForDay = document.getElementById('doneCoffeeForToday');
coffeeForDay.textContent = sumOfCofffe();

function sumOfCofffe() {
    /* Елемент виводу загальноъ кількості */
    const coffeeForDay = document.getElementById('doneCoffeeForToday');

    let result = '';
    let arr = [0];
    /* Значення ключа */
    for(let i = 0; i < typeOfAll.length; i++) {
        if(!isNaN(Number(localStorage[typeOfAll[i].textContent]))) {
            arr.push(Number(localStorage[typeOfAll[i].textContent]))
        } else {
            console.log('no')
        }
    }
    
    let sumOfCoffeeDay = arr.reduce((accum, cur) => {
        return accum + cur;
    })
    result = String(sumOfCoffeeDay);
    coffeeForDay.textContent = result;
}

/* RESET ALL */

const resetAll = document.getElementById('resetAll');
resetAll.addEventListener('click', () => {
    localStorage.clear()
    sumOfCofffe()
    saveValue();
});



