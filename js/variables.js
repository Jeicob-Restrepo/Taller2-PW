const valornuevo = document.getElementById('vsuperior');
const valoranterior = document.getElementById('vinferior');
const bnumeros = document.querySelectorAll('.numero');

const pantalla = new Pantalla(valoranterior,valornuevo);

bnumeros.forEach(
    bton => {
        bton.addEventListener('click', () => {
            pantalla.nuevoNumero(bton.value);
        }
        )
    }
);