// Funzione per salvare il nome in localStorage
function saveName() {
  // Recupera l'elemento di input del nome
  const nameInput = document.getElementById("name");
  // Estrae e trimma il valore del nome
  const name = nameInput.value.trim();

  // Verifica che il nome non sia vuoto
  if (name !== "") {
    // Salva il nome in localStorage
    localStorage.setItem("savedName", name);
    // Aggiorna e mostra il nome precedentemente salvato
    updatePreviousName();
  }
}

// Funzione per rimuovere il nome precedentemente salvato
function removeName() {
  // Rimuove il nome da localStorage
  localStorage.removeItem("savedName");
  // Aggiorna e mostra il nome precedentemente salvato
  updatePreviousName();
}

// Funzione per aggiornare e mostrare il nome precedentemente salvato
function updatePreviousName() {
  // Recupera l'elemento del paragrafo per il nome precedentemente salvato
  const previousNameElement = document.getElementById("previousName");
  // Recupera il nome salvato da localStorage
  const savedName = localStorage.getItem("savedName");

  // Aggiorna il contenuto del paragrafo con il nome precedentemente salvato
  previousNameElement.textContent = savedName
    ? `Valore precedentemente salvato: ${savedName}`
    : "Valore precedentemente salvato: ";
}

// Funzione per animare il contatore e il cerchio
function animateCounter() {
  // Recupera l'elemento del contatore
  const counterElement = document.getElementById("counter");
  // Recupera l'elemento del cerchio
  const circleElement = document.getElementById("countdown-container");

  // Recupera il contatore corrente da sessionStorage o inizializza a 0
  let counter = parseInt(sessionStorage.getItem("counter")) || 0;

  // Aggiorna il contatore e applica le animazioni
  setInterval(() => {
    counter++;
    sessionStorage.setItem("counter", counter);

    // Applica l'animazione di scala (effetto pulsante) al contatore
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
// Chiamata alla funzione di aggiornamento del nome precedentemente salvato
updatePreviousName();
