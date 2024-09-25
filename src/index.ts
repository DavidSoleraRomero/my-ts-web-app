// src/index.ts
function displayName(name: string | null | undefined): void {
    if (name == null || name == undefined || name == "") name = "Anonymous";
    const card = document.createElement("ion-card");
    const cardHeader = document.createElement("ion-card-header");
    const cardTitle = document.createElement("ion-card-title");
    cardTitle.textContent = name;
    cardHeader.appendChild(cardTitle);
    card.appendChild(cardHeader);
    const names = document.getElementById("names");
    if (names) names.append(card);
}

function addName() {
    const ionInput = (document.getElementById("ionic-input") as HTMLInputElement);
    displayName(ionInput.value);
    ionInput.value = "";
}

document.getElementById("ionic-button")?.addEventListener('click', addName);
//document.getElementById("ionic-button")?.addEventListener('keydown', (event: KeyboardEvent) => {
//    console.log(event.key);
//    if (event.key === 'Enter') addName();
//})