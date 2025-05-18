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


  //Skrpt ten jest  czysto podkradziony ze strony internetowej, która posiadała pełną instrukcję użyttkowania armaty
  //Armatka sama w sobie jest jedynie dodatkiem, a poza grafiką nie ingerowaliśmy w nią bezpośrednio