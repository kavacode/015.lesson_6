/*Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
Вихідний рядок та символи для видалення задає користувач.*/

const removeElement = () => {
	const stringArray = prompt('Enter a string');
	const elements = prompt("Enter characters to delete");
	let result = '';
	if (!elements || !stringArray) {
		return 'Oops... Something wrong';
	}
	let array = stringArray.split('');
	for (let i = 0; i < array.length; i++) {
		if (!elements.includes(stringArray[i])) {
			result += stringArray[i];
		}
	}
	return result;
}

const result = removeElement();
alert(result);
