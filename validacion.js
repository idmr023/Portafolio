const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensagem = document.getElementById('mensagem');
const warning = document.getElementById('warning');
const contador = document.getElementById('formcontato__txt-contador');

form.addEventListener("submit", e =>{
	e.preventDefault();
	let warnings = "";
	let entrar = false;
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (nombre.value.length <= 50 || nombre.value == " "){
		warnings += 'El nombre no debe contener más de 50 carácteres o estar vacío <br>';
		entrar = true;
	}
	if(!regexEmail.test(email.value)){
		warnings += 'El email ingresado no es válido';
		entrar = true;
	}
	if(asunto.value.length > 50 || asunto.value == " "){
		warnings += 'El asunto no debe contener más de 50 carácteres o estar vacío <br>';
		entrar = true;
	}
	if(mensagem.value.length > 300 || mensagem.value == " "){
		warnings += 'El mensaje no debe contener más de 300 carácteres o estar vacío <br>';
		entrar = true;
	}
	if(entrar){
		warning.innerHTML = warnings;
	}

	function getID(id) {
		return document.getElementById(id);
	}

	function contadorCaracteres() {
		setInterval(function() {
			var mensagem = getID('mensagem').value;
			var contador = getID('formcontato__txt-contador');

			if (mensagem.length > 300) {
				contador.innerHTML = '300';
				contador.className += " exceso-palabras";
				getID('mensagem').readOnly = true;
			} else {
				contador.innerHTML = contador.length;
			}
		}, 1000);
	}
});	  