function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

console.log(add(5,3)); //Outputs 8
console.log(subtract(5,3)); //Outputs 2

//Corrected version to handle potential string inputs
function addCorrected(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseInt(a) : a;
  const numB = typeof b === 'string' ? parseInt(b) : b;
  return numA + numB;
}

console.log(addCorrected("5",3)); //Outputs 8
console.log(addCorrected(5,"3")); //Outputs 8