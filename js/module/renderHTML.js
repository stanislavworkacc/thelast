export const renderHTML = (dataFromServer) => {
    
    const arrayOfValues = Object.values(dataFromServer);
    const divContainter = document.querySelector('.wrapper');
    const add = document.getElementById('add');

    function addElement() {
        let newDiv = document.createElement("div");
            newDiv.innerHTML = `
                        <div class="container">
                            <div class="coffeeType"></div>
                                <button class="addCoffee counter__btn" data-direction="plus">Додати</button>
                                <button class="deleteCoffee counter__btn" data-direction="minus">Видалити</button>
                            <div class="doneCoffee">
                                <span class="countOfCoffee">Кількіть:</span>
                                <input type="text" value="0" class="counter__value" readonly>
                            </div>
                        </div>
            `;
            
            divContainter.insertBefore(newDiv, add);
            newDiv.classList.add('grid-container')
    };

    for(let i = 0; i < arrayOfValues.length; i++) {
        addElement()
    };
}

