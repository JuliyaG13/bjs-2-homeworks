"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	const discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		arr.push(root);
	} else {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
	}

	return arr;
}

"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let monthlyRate = (percent / 100) / 12;

	let bodyCredit = amount - contribution;

	if (bodyCredit <= 0) {
		throw new Error("Сумма кредита должна быть больше нуля.");
	}

	let monthlyPayment = bodyCredit * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));

	let totalAmount = monthlyPayment * countMonths;
	return Math.round(totalAmount * 100) / 100;
}
