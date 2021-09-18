const valornuevo = document.getElementById('vsuperior');
const valoranterior = document.getElementById('vinferior');
const bnumeros = document.querySelectorAll('.numero');
const boperadores = document.querySelectorAll('.operador');

const pantalla = new Pantalla(valoranterior, valornuevo);

bnumeros.forEach(
    bton => {
        bton.addEventListener('click', () => {
            pantalla.nuevoNumero(bton.innerHTML);
        }
        )
    }
);

boperadores.forEach(
    bton => {
        bton.addEventListener('click', () => pantalla.asignar(bton.value));
    }
);