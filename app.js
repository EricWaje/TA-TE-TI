//PARTICIPANTES
const participantes = ['X', 'O'];

//CONTROL TURNOS
let contador = 0;
let block = false;
const elegirCasillero = (id) => {
  if ((document.getElementById(id).innerText === '') & (block == false))
    if (contador % 2 === 0) {
      document.getElementById(id).innerText = 'X';
      document.getElementById('jugador').innerText = 'TURNO DE "O"';
      contador++;
    } else {
      document.getElementById(id).innerText = 'O';
      document.getElementById('jugador').innerText = 'TURNO DE "X"';
      contador++;
    }
  return document.getElementById(id).innerHTML;
};

//VALIDAR GANADOR
let horizontales = 0;
let verticales = 0;
let diagonales = 0;

const validarGanador = () => {
  const c1 = casilleros[0].innerText;
  const c2 = casilleros[1].innerText;
  const c3 = casilleros[2].innerText;
  const c4 = casilleros[3].innerText;
  const c5 = casilleros[4].innerText;
  const c6 = casilleros[5].innerText;
  const c7 = casilleros[6].innerText;
  const c8 = casilleros[7].innerText;
  const c9 = casilleros[8].innerText;

  // GANADOR LINEA HORIZONTAL

  if (
    (c1 === c2 && c2 === c3 && c3 !== '') ||
    (c4 === c5 && c5 === c6 && c6 !== '') ||
    (c7 === c8 && c8 === c9 && c9 !== '')
  )
    if (contador % 2 === 0) {
      document.getElementById('jugador').innerText = 'EL GANADOR ES O ';
      horizontales++;
      block = true;
    } else {
      document.getElementById('jugador').innerText = 'EL GANADOR ES X ';
      horizontales++;
      block = true;
    }
  // GANADOR LINEA VERTICAL
  if (
    (c1 === c4 && c4 === c7 && c7 !== '') ||
    (c2 === c5 && c5 === c8 && c8 !== '') ||
    (c3 === c6 && c6 === c9 && c9 !== '' && contador % 2 !== 0)
  )
    if (contador % 2 === 0) {
      document.getElementById('jugador').innerText = 'EL GANADOR ES O ';
      verticales++;
      block = true;
    } else {
      document.getElementById('jugador').innerText = 'EL GANADOR ES X ';
      verticales++;
      block = true;
    }
  // GANADOR LINEA DIAGONAL
  if (
    (c1 === c5 && c5 === c9 && c9 !== '') ||
    (c3 === c5 && c5 === c7 && c7 !== '')
  )
    if (contador % 2 === 0) {
      document.getElementById('jugador').innerText = 'EL GANADOR ES O ';
      diagonales++;
      block = true;
    } else {
      document.getElementById('jugador').innerText = 'EL GANADOR ES X ';
      diagonales++;
      block = true;
    }

  //EMPATE
  if (contador == 9) {
    if (verticales == horizontales && horizontales == diagonales)
      document.getElementById('jugador').innerText = 'Empate!';
  }
};

// REINICIAR JUEGO

const reiniciarJuego = () => {
  location.reload();
};

const casilleros = document.getElementsByClassName('casilleroTateti');

const start = () => {
  for (let i = 0; i < casilleros.length; i++) {
    casilleros[i].addEventListener('click', () =>
      elegirCasillero(casilleros[i].id)
    );
    casilleros[i].addEventListener('click', () => validarGanador());
  }
  document
    .getElementById('act')
    .addEventListener('click', () => reiniciarJuego());
};

window.onload = start;
