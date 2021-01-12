export const addCoffeeTypes = (dataFromServer) => {
    const arrayOfValues = Object.values(dataFromServer);
    const coffeeTypes = document.querySelectorAll('.coffeeType'); //put

    function addPosition() {
        for(let i = 0; i < arrayOfValues.length; i++) {
            coffeeTypes[i].innerHTML = arrayOfValues[i];
        }
    };
    addPosition();
    return arrayOfValues;
};

