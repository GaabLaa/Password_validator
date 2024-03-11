const pass = document.querySelector('#password')
const passInform = document.querySelector('.passInfo')
const letters = /[a-z]/i
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 10

// wtrażenie regularne
// /^[0-9a-z_.-]+@[0-9a-z_.-]+\.[a-z]{2,3}$/i

const showMsg = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		passInform.textContent = 'Masz bardzo mocne hasło 💪'
		passInform.style.color = 'lime'
	} else if (pass.value.length >= minValue && pass.value.match(letters) && pass.value.match(numbers)) {
		passInform.textContent = 'Masz dobre hasło 😊'
		passInform.style.color = 'gold'
	} else {
		passInform.textContent = 'Masz słabe hasło 😒'
		passInform.style.color = 'tomato'
	}
}

const checkPassword = () => {
	if (pass.value == '') {
		passInform.textContent = 'Nie podano hasła...'
		passInform.style.color = ''
	} else {
		showMsg()
	}
}

pass.addEventListener('keyup', checkPassword)
