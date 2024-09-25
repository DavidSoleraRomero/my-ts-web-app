// src/index.ts
function greet(name: string | null | undefined): void {
    if (name == null || name == undefined) name = "World"
    const greeting = `Hello, ${name}!`;
    const element = document.getElementById("greeting");
    if (element) {
      element.innerText = greeting;
    }
}

document.getElementById("ionic-button")?.addEventListener('click', function() {
    const ionInput = (document.getElementById("ionic-input") as HTMLInputElement);
    greet(ionInput.value);
    ionInput.value = "";
});

greet("Anonymous");