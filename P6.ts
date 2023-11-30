// Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3) - 7)

function calcExpression(): number {
  const expression = ((10 + 5) * 3 - 2) / (4 % 3) - 7;
  return expression;
}

console.log(calcExpression());
