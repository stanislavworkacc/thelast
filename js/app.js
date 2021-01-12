import { requestToServer } from './module/requestToServer.js';
import { renderHTML } from './module/renderHTML.js';
import { addValueFromLocal } from './module/addValueFromLocal.js';
import { addOrDeleteFunc } from './module/addOrDeleteFunc.js';
import { doneSumCoffee } from './module/doneSumCoffee.js';
import { menu } from './module/menu.js';
import { addCoffeeTypes } from './module/addCoffeeTypes.js';
import { resetLocalStorage } from './module/resetLocalStorage.js';
import { fillInput } from './module/fillInput.js';

function updateLocal(typeOf, newValue) {
    localStorage.setItem(typeOf, newValue);
}

const activationProgram = () => {
    requestToServer()
                    .then((dataFromServer) => {
                        renderHTML(dataFromServer);
                        addCoffeeTypes(dataFromServer);
                        addValueFromLocal();
                        doneSumCoffee();
                        addOrDeleteFunc(doneSumCoffee);
                        resetLocalStorage(doneSumCoffee, addValueFromLocal, fillInput);
                        fillInput();
                        menu();
                    })
    
}

activationProgram();

