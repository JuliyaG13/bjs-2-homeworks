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

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let r = percent / 100 / 12;
	let A = amount - contribution;

	if (A <= 0) {
		return 'Сумма кредита должна быть больше нуля.';
	}

	let n = countMonths;

	const monthlyPayment = (A * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

	const totalSum = (monthlyPayment * n).toFixed(2);

	return totalSum;
}