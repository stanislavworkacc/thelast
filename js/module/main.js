export const main = () => {
    // const addOrDeleteBtn = document.querySelectorAll('.counter__btn');
    // const typeOfPosition = document.querySelectorAll('.coffeeType');
    // const inputFromHTML = document.querySelectorAll('.counter__value');

    // function pushValueFromLocal() {
    //     for(let i = 0; i < typeOfPosition.length; i++) {
    //         let sampleFromHtml = typeOfPosition[i].textContent;
    //         let savedLocalSampleValue = localStorage.getItem(sampleFromHtml);
    //         inputFromHTML[i].value = savedLocalSampleValue
    //     };
    // };

    // pushValueFromLocal();
    // sumOfCofffe();

    // addOrDeleteBtn.forEach((btn) => {
    //     btn.addEventListener('click', counerAddDel);
    // })


    // function counerAddDel () {
    //     /* Напрям */
    //     const direction = this.dataset.direction;
    //     /* Отримуєм інтуп */
    //     const input = this.parentElement.querySelector('.counter__value');
    //     /* Отримуємо ключ елемента зі сторінки */
    //     const typeOf = this.parentElement.querySelector('.coffeeType').textContent;
    //     /* Значення поточного елемента в базі */
    //     let localStorageData = JSON.parse(localStorage.getItem(`${typeOf}`));
    //     /* Змінюємо значення поточного елемента на сторінці */
    //     const currentValue = localStorageData;
    //     let newValue;
    //     if(direction === 'plus') {
    //         newValue = currentValue + 1;
    //     } else {
    //         newValue = currentValue - 1 > 0 ?
    //         currentValue - 1 : 0;
    //     }
    //     input.value = newValue;
    //     /* добавляємо елементи в локал стор */
    //     updateLocal(typeOf, newValue);
    //     sumOfCofffe();
    // }

    // function updateLocal(typeOf, newValue) {
    //     localStorage.setItem(typeOf, newValue);
    // }

    /* SECOND PART */

    // coffeeForDay.textContent = sumOfCofffe();

    // function sumOfCofffe() {
    //     /* Елемент виводу загальноъ кількості */
    //     const coffeeForDay = document.getElementById('doneCoffeeForToday');

    //     let result = '';
    //     let arr = [0];
    //     /* Значення ключа */
    //     for(let i = 0; i < typeOfPosition.length; i++) {
    //         if(!isNaN(Number(localStorage[typeOfPosition[i].textContent]))) {
    //             arr.push(Number(localStorage[typeOfPosition[i].textContent]))
    //         } else {
    //             //console.log('no')
    //         }
    //     }
        
    //     let sumOfCoffeeDay = arr.reduce((accum, cur) => {
    //         return accum + cur;
    //     })
    //     result = String(sumOfCoffeeDay);
    //     coffeeForDay.textContent = result;
    // }

    /* RESET ALL */

    // const resetAll = document.getElementById('resetAll');
    // resetAll.addEventListener('click', () => {
    //     localStorage.clear()
    //     sumOfCofffe()
    //     pushValueFromLocal();
    // });
}




