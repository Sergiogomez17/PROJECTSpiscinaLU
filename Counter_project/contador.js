let contador = 0;

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton');
botones.forEach(boton => {
boton.addEventListener('click', function (e) {
    const estilos = e.currentTarget.classList;
    function updatecontador(valor) {
        contadorElement.innerText = valor;
        contadorElement.style.color = valor >= 0 ? 'green' : 'red';
      }

   if(estilos.contains('disminuir') ) {
       contador--;

   }
    else if (estilos.contains('aumentar')) {
        contador++;
    }
    else {
        contador = 0;
    } 
       
    valor.textContent = contador; 
}
)
});