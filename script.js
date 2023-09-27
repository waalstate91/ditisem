document.addEventListener("DOMContentLoaded", function () {
    // Haal de verwijzingen naar HTML-elementen op
    const usernameInput = document.getElementById("___username");
    const emailInput = document.getElementById("___email");
    const passwordInput = document.getElementById("___password");
    const captchaCheckbox = document.getElementById("___captcha");
    const submitButton = document.getElementById("___submit");
  
    // Voeg een eventlistener toe aan het formulier om validatie uit te voeren voordat het wordt verzonden
    document.querySelector("form").addEventListener("submit", function (event) {
      // Controleer of de gebruikersnaam is ingevuld
      if (usernameInput.value.trim() === "") {
        alert("Vul een gebruikersnaam in.");
        event.preventDefault(); // Voorkom dat het formulier wordt verzonden
        return;
      }
  
      // Controleer of het e-mailadres is ingevuld en een geldig formaat heeft
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        alert("Vul een geldig e-mailadres in.");
        event.preventDefault();
        return;
      }
  
      // Controleer of het wachtwoord is ingevuld en minimaal 8 tekens lang is (kan worden aangepast)
      if (passwordInput.value.trim().length < 8) {
        alert("Het wachtwoord moet minimaal 8 tekens bevatten.");
        event.preventDefault();
        return;
      }
  
      // Controleer of de captcha-checkbox is aangevinkt
      if (!captchaCheckbox.checked) {
        alert("Bevestig dat je geen robot bent.");
        event.preventDefault();
        return;
      }
    });
  
    // Voeg een eventlistener toe aan de captcha-checkbox om de knop te activeren
    captchaCheckbox.addEventListener("change", function () {
      submitButton.disabled = !captchaCheckbox.checked;
    });
  });
  