// import axios from "axios";

// src/index.ts
async function loadImage() {
    try {
        const url = "https://picsum.photos/150/200";
        const response = await fetch(url);
        const imageUrl = URL.createObjectURL(await response.blob());
        const htmlImage = document.createElement("img");
        htmlImage.src = imageUrl;
        htmlImage.alt = "Image returned from picsum.photos";
        return htmlImage;
    } catch (error) {
        console.error("Error receiving the image: " + error);
    }
}

async function displayName(name: string | null | undefined) {
    if (name == null || name == undefined) name = "Anonymous";
    const card = document.createElement("ion-card");
    const cardHeader = document.createElement("ion-card-header");
    const cardTitle = document.createElement("ion-card-title");
    cardTitle.textContent = name;
    const cardContent = document.createElement("ion-card-content");
    const cardImage = await loadImage();
    console.log(cardImage);
    if (cardImage) cardContent.appendChild(cardImage);
    cardHeader.appendChild(cardTitle);
    card.appendChild(cardHeader);
    card.appendChild(cardContent);
    const names = document.getElementById("names");
    if (names) names.append(card);
}

function addName() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const ionInput = (document.getElementById("ionic-input") as HTMLInputElement);
            if (ionInput.value.trim() != "") {
                displayName(ionInput.value);
                resolve(`Name ${ionInput.value} added succesfully`);
                ionInput.value = "";
            } else reject(`Introduced name couldn't be added`)
        }, 200);
    })
    promise
    .then((result) => { console.log(result) })
    .catch((error) => { alert(error)  })
}

function addManualName(name: string) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name) {
                displayName(name);
                resolve(`Name ${name} added succesfully`);
            } else reject(`Introduced name couldn't be added`)
        }, 1000);
    })
    promise
    .then((result) => { console.log(result) })
    .catch((error) => { alert(error)  })
}



document.getElementById("ionic-button")?.addEventListener('click', addName);

// AUTO CALLS
// const listaBase: string[] = ["Ana", "Carlos", "Lucía", "Miguel", "Sofía", "Diego", "Camila", "Luis", "Valeria", "Jorge", "Paula", "Ricardo", "Elena", "Fernando", "Isabel", "Raúl", "María", "Pedro", "Daniela", "Antonio"];
// setInterval(() => {
//     let name: string = listaBase[Math.floor(Math.random() * listaBase.length)];
//     addManualName(name);
// }, 4500);
