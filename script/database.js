fetch("https://jsonplaceholder.typicode.com/users")
.then(res => {
    return res.json();
})
.then(data => {
    data.forEach(user =>{
        const markup = `${user.name}<li>`;

        document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
    }); 
})

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => {
    return res.json();
})

.then(data => {
    data.forEach(user =>{
        const markup = `${user.email}, 
`;

        document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
    }); 
})
.catch(error => console.log(error));