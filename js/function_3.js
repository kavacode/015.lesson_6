/*Написати функцію заповнення даними користувача двомірного масиву. 
Довжину основного масиву і внутрішніх масивів задає користувач. 
Значення всіх елементів всіх масивів задає користувач.*/


const array2D = (rows, cols) => {

	const result = [];

	for (let i = 0; i < rows; i++) {
		const innerArray = [];

		for (let j = 0; j < cols; j++) {
			innerArray[j] = prompt(`Enter a value for the item [${i}][${j}]:`);
		}
		result[i] = innerArray;
	}

	return result;
}
const rows = parseInt(prompt('Enter the number of rows:'));
const cols = parseInt(prompt('Enter the number of columns:'));

/* if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
	console.log('Oops...Please enter valid positive integer values for rows and columns.');
} else {
 */

const userArray = array2D(rows, cols);
console.log(userArray);
