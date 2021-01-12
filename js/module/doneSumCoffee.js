export const doneSumCoffee = () => {
    //підрахунок кількості по LocalStorage
    const typeOfPosition = document.querySelectorAll('.coffeeType');
    const coffeeSumInput = document.getElementById('doneCoffeeForToday');

        let sum = 0;
        for(let i = 0; i < typeOfPosition.length; i++) {
            let number = Number(localStorage[typeOfPosition[i].textContent]);
            sum += !isNaN(number) ? number : 0;
        }
        
        coffeeSumInput.textContent = String(sum);
        return sum;
}