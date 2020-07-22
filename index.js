window.addEventListener('load', () => {

  // Variables

  const tabs = document.querySelectorAll('.tabs div');
  const sounds = document.querySelectorAll('.sound');
  const  head = document.querySelector('.head');
  const white = document.querySelector('.white');
  const colors = ['#c4fb6d', '#ffa931', '#12cad6', '#e84a5f', '#d92027', '#6a097d'];


  // Eventos

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      sounds[index].currentTime = 0;
      sounds[index].play();

      changeColor(index);

      tab.classList.add('active');
      tab.classList.add('expand');
      white.style.display = 'block';
    });

    tab.addEventListener('animationend', () => {
      tab.classList.remove('expand');
    });
  });

  white.addEventListener('click', () => {
    white.classList.add('blank');
    document.body.style.backgroundColor = "#fff";
    head.style.color = '#000';
  });

  white.addEventListener('animationend', () => {
    white.classList.remove('blank');
    white.style.display = 'none';
  });

  // Funciones

  const changeColor = index => {
    head.style.color = '#fff';
    document.body.style.backgroundColor = colors[index];
  }
});

