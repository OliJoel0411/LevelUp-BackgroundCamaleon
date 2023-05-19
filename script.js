const colors = [
    'red', 
    'green', 
    'blue', 
    'yellow',
  ];
  
  function cambiarColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
    document.getElementById('actual-color').textContent = randomColor;
  }
  
  document.getElementById('cambiar-color').addEventListener('click', cambiarColor);
  