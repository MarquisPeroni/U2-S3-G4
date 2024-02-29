function firstLoad() {
    fetch("https://api.pexels.com/v1/search?query=fox", {
      method: "GET",
      headers: {
        Authorization: "9Ymm0NMEFXkddBPkB0hzkB6kxrtJLm39pffRIXr2U5wuQMOXeuC6wTvu",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Verifica se ci sono immagini disponibili
        if (data.photos && data.photos.length > 0) {
          // Itera attraverso le cards e aggiorna le immagini
          const cards = document.querySelectorAll(".card"); // Assicurati di avere una classe card per ogni card
          for (let i = 0; i < cards.length; i++) {
            const cardImage = cards[i].querySelector(".bd-placeholder-img.card-img-top");
            // Sostituisci con la logica necessaria per estrarre l'URL dell'immagine desiderato
            const nuovoURL = data.photos[i % data.photos.length].src.medium;
            // Aggiorna l'immagine nella tua card
            if (cardImage) {
              cardImage.src = nuovoURL;
            }
          }
        } else {
          console.error("Nessuna immagine disponibile nella risposta API.");
        }
      })
      .catch((error) => console.error("Errore:", error));
  }

  function secondLoad() {
    fetch("https://api.pexels.com/v1/search?query=orangutan", {
      method: "GET",
      headers: {
        Authorization: "9Ymm0NMEFXkddBPkB0hzkB6kxrtJLm39pffRIXr2U5wuQMOXeuC6wTvu",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Verifica se ci sono immagini disponibili
        if (data.photos && data.photos.length > 0) {
          // Itera attraverso le cards e aggiorna le immagini
          const cards = document.querySelectorAll(".card"); // Assicurati di avere una classe card per ogni card
          for (let i = 0; i < cards.length; i++) {
            const cardImage = cards[i].querySelector(".bd-placeholder-img.card-img-top");
            // Sostituisci con la logica necessaria per estrarre l'URL dell'immagine desiderato
            const nuovoURL = data.photos[i % data.photos.length].src.medium;
            // Aggiorna l'immagine nella tua card
            if (cardImage) {
              cardImage.src = nuovoURL;
            }
          }
        } else {
          console.error("Nessuna immagine disponibile nella risposta API.");
        }
      })
      .catch((error) => console.error("Errore:", error));
  }

  const hideButtons = document.querySelectorAll(".btn-group button:nth-child(2)");

hideButtons.forEach((hideButton) => {
  hideButton.addEventListener("click", function() {
    // Trova il genitore della card e nascondilo
    const card = hideButton.closest('.card');
    if (card) {
      card.style.display = 'none';
    }
  });
});

// Sostituisci il testo "9 mins" con l'id dell'immagine corrispondente
const timeElement = cards[i].querySelector(".text-muted");
if (timeElement && data.photos) {
  const imageId = data.photos[i % data.photos.length].id;
  timeElement.textContent = imageId;
}

//s