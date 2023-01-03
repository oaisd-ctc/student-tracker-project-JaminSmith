fetch("https://jsonplaceholder.typicode.com/users")
.then(res => {
    return res.json();
})
.then(data => {
    data.forEach(user =>{
        let markup = `<li>${user.name}</li>`;

        document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
    }); 
})
.catch(error => console.log(error));