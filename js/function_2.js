/*Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
Вивести результат математичної дії, вказаної в змінній znak.
Обидва числа і знак виходять від користувача.*/

const doMath = (x, znak, y) => {
	switch (znak) {
		case '+':
			return x + y;
		case '-':
			return x - y;
		case '*':
			return x * y;
		case '/':
			return x / y;
		case '%':
			return x % y;
		case '^':
			return x ** y; // при переменной ' ^ ' - не возводит в степень.
		default:
			return 'Oops, something went wrong';
	}
}

const x = parseFloat(prompt('Enter first number:'));
const znak = prompt('Enter operation (+, -, *, /, %, ^):');
const y = parseFloat(prompt('Enter second number:'));

if (!isNaN(x) && !isNaN(y)) {
	const result = doMath(x, znak, y);
	console.log(`Result: ${result}`);
} else {
	console.log('Invalid input. Please enter valid numbers.');
}
