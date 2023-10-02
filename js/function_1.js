// Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = [5, 7, 'string', true, -2, 6];

const calcAverage = (numbers) => {
	let sum = 0;
	let count = 0;

	for (let i = 0; i < numbers.length; i++) {
		if (typeof numbers[i] === 'number') {
			sum += numbers[i];
			count++;
		}
	}

	if (count === 0) {
		return 'В масиве нет числовых элементов';
	}

	return sum / count;
}


const average = calcAverage(array);
console.log(average);