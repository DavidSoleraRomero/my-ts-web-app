// src/index.ts
function displayName(name: string | null | undefined): void {
    if (name == null || name == undefined) name = "";
    const card = document.createElement("ion-card");
    const cardHeader = document.createElement("ion-card-header");
    const cardTitle = document.createElement("ion-card-title");
    cardTitle.textContent = name;
    cardHeader.appendChild(cardTitle);
    card.appendChild(cardHeader);
    const wrapper = document.getElementById("wrapper");
    if (wrapper) wrapper.append(card);
}

document.getElementById("ionic-button")?.addEventListener('click', function() {
    const ionInput = (document.getElementById("ionic-input") as HTMLInputElement);
    displayName(ionInput.value);
    ionInput.value = "";
});