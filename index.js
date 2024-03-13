const inputcantidad= document.querySelector('.input-cantidad');
const btnIncremento = document.querySelector('#incremento');
const btnDecremento = document.querySelector('#decremento');

let valueByDefault = parseInt(inputcantidad.value);

// Funciones Click

btnIncremento.addEventListener('click', () => {
	valueByDefault += 1
	inputcantidad.value = valueByDefault;
})

btnDecremento.addEventListener('click', () => {
    if (valueByDefault === 1) {
		return;
	}
	valueByDefault -= 1
	inputcantidad.value = valueByDefault
})

