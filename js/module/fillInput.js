export const fillInput = () => {
    const inputsFromHTML = document.querySelectorAll('.counter__value');
    for(let i = 0; i < inputsFromHTML.length; i++) {
        if(inputsFromHTML.value === undefined) {
            inputsFromHTML[i].value = 0;
        };
    };
}