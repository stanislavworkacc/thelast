export const addOrDeleteFunc = (doneSumCoffee) => {
    const addOrDeleteBtn = document.querySelectorAll('.counter__btn');

    addOrDeleteBtn.forEach((btn) => {
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
        localStorage.setItem(typeOf, newValue);
        doneSumCoffee();
    }
}