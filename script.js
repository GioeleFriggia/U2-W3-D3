function saveName() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  if (name !== "") {
    localStorage.setItem("savedName", name);
    updatePreviousName();
  }
}

function removeName() {
  localStorage.removeItem("savedName");
  updatePreviousName();
}

function updatePreviousName() {
  const previousNameElement = document.getElementById("previousName");
  const savedName = localStorage.getItem("savedName");

  previousNameElement.textContent = savedName
    ? `Valore precedentemente salvato: ${savedName}`
    : "Valore precedentemente salvato: ";
}

function animateCounter() {
  const counterElement = document.getElementById("counter");
  const circleElement = document.getElementById("countdown-container");

  let counter = parseInt(sessionStorage.getItem("counter")) || 0;

  setInterval(() => {
    counter++;
    sessionStorage.setItem("counter", counter);

    // Applica l'animazione di scala (effetto pulsante)
    counterElement.style.transform = "scale(1.1)";
    setTimeout(() => {
      counterElement.textContent = counter;
      counterElement.style.transform = "scale(1)";
    }, 500); // Tempo di transizione

    // Applica l'animazione di lampeggiamento al cerchio
    circleElement.style.opacity = 0.5;
    setTimeout(() => {
      circleElement.style.opacity = 1;
    }, 500); // Tempo di lampeggiamento
  }, 1000); // Intervallo di aggiornamento
}

// Chiamata alla funzione di animazione del contatore
animateCounter();
updatePreviousName();
