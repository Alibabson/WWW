  function armata(){
    confetti({
      origin: { x: 0, y: 1.1 },
      angle: 50,
      spread: 90,
      particleCount: 1000,
      startVelocity: 120
    });
    const audio = document.getElementById('confetti');
    audio.play();
  }


  //Skrpt ten jest  czysto podkradziony ze strony internetowej, która posiadała pełną instrukcję użytkowania armaty
  //Armatka sama w sobie jest jedynie dodatkiem, a poza grafiką i audio nie ingerowaliśmy w nią bezpośrednio