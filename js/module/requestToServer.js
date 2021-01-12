export const requestToServer = () => {
    return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', 'position.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
            request.addEventListener('load', () => {

            if(request.readyState === 4 && request.status === 200) {
                let dataFromServer = JSON.parse(request.response)
                resolve(dataFromServer)
                } else {
                    reject('НЕУДАЧА: Что-то пошло не так!')
                }
            })
        })
};

        

