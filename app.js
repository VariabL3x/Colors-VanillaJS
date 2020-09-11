const colorEle = document.querySelector('.color');
const btnEle = document.querySelector('#btn');
const autoBtnEle = document.querySelector('#auto');
const addBtnEle = document.querySelector('#add');
const minusBtnEle = document.querySelector('#minus');
const speed = document.querySelector('#speed');

const hexArray = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
];
let autoChangeInterval;
let autoChangeSpeed = 100;

speed.textContent = autoChangeSpeed;
btnEle.addEventListener('click', changeRandomColor);
autoBtnEle.addEventListener('click', toggleAutoChangeColor);
addBtnEle.addEventListener('click', increase100MS);
minusBtnEle.addEventListener('click', decrease100MS);

function changeRandomColor() {
	const length = hexArray.length;
	let hexCode = '#';
	for (let i = 0; i < 6; i++) {
		const text = hexArray[getRandomNumber(length)];
		hexCode += text;
	}
	document.body.style.backgroundColor = hexCode;
	colorEle.textContent = hexCode;
}

function getRandomNumber(input) {
	return Math.floor(Math.random() * input);
}

function toggleAutoChangeColor() {
	if (typeof autoChangeInterval !== 'undefined') {
		clearInterval(autoChangeInterval);
		autoChangeInterval = undefined;
		autoBtnEle.textContent = 'deactivated';
		hideButtons();
	} else {
		autoChangeInterval = setInterval(changeRandomColor, autoChangeSpeed);
		autoBtnEle.textContent = 'activated';
		showButtons();
	}
}

function increase100MS() {
	autoChangeSpeed += 100;
	speed.textContent = autoChangeSpeed;
	if (typeof autoChangeInterval !== 'undefined') {
		clearInterval(autoChangeInterval);
		autoChangeInterval = setInterval(changeRandomColor, autoChangeSpeed);
	} else {
		autoChangeInterval = setInterval(changeRandomColor, autoChangeSpeed);
	}
}

function decrease100MS() {
	if (autoChangeSpeed === 0) return;
	autoChangeSpeed -= 100;
	speed.textContent = autoChangeSpeed;
	if (typeof autoChangeInterval !== 'undefined') {
		clearInterval(autoChangeInterval);
		autoChangeInterval = setInterval(changeRandomColor, autoChangeSpeed);
	} else {
		autoChangeInterval = setInterval(changeRandomColor, autoChangeSpeed);
	}
}

function hideButtons() {
	addBtnEle.style.display = 'none';
	minusBtnEle.style.display = 'none';
	speed.parentElement.style.display = 'none';
}
function showButtons() {
	addBtnEle.style.display = '';
	minusBtnEle.style.display = '';
	speed.parentElement.style.display = '';
}
changeRandomColor();
hideButtons();
