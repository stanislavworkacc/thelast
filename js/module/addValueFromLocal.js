export const addValueFromLocal = () => {
    const typeOfPosition = document.querySelectorAll('.coffeeType');
    const inputFromHTML = document.querySelectorAll('.counter__value');

    for(let i = 0; i < typeOfPosition.length; i++) {
        let sampleFromHtml = typeOfPosition[i].textContent;
        let savedLocalSampleValue = localStorage.getItem(sampleFromHtml);
        inputFromHTML[i].value = savedLocalSampleValue
    };
    
}