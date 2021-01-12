export const resetLocalStorage = (doneSumCoffee, addValueFromLocal, fillInput) => {
    const resetAll = document.getElementById('resetAll');
    console.log(resetAll)
    resetAll.addEventListener('click', () => {
        localStorage.clear()
        doneSumCoffee()
        addValueFromLocal();
        fillInput();
    });

}