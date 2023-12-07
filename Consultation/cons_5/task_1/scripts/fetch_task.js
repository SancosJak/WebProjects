const container = document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/photos")
.then(res=> res.json())
.then(json =>render(json))

const render = arr=>{
    arr.forEach(({ url, title, albumId})=>{
        if ([3, 7, 43, 59, 32, 9].includes(albumId)){
        const cardElem = document.createElement("div");
        const imgElem = document.createElement("img");
        const titleElem = document.createElement("p");
        const albumElem =document.createElement("p");

        imgElem.src = url;
        imgElem.alt = title;

        titleElem.innerText = `Title: ${title}`;
        albumElem.innerText =`Album ID: ${albumId}`;

        cardElem.append(imgElem, titleElem, albumElem);
        container.append(cardElem);
        }
    })
}