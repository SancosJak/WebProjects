const container = document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>res.json())
    .then(data=>render(data))

    const render = arr =>{
        arr.forEach(({name, username})=>{
        const cardElem = document.createElement("div");
        const nameElem = document.createElement("p");
        const usernameElem = document.createElement("p");  
        
        nameElem.innerText = name;
        usernameElem.innerText = username;
        cardElem.append(nameElem, usernameElem)
        container.append(cardElem);
        })
    }