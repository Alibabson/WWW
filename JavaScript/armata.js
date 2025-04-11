const button = document.getElementById('armata');

  button.addEventListener('click', () => {
    confetti({
      origin: { x: 0, y: 1.1 },
      angle: 50,
      spread: 90,
      particleCount: 1000,
      startVelocity: 120
    });
  });