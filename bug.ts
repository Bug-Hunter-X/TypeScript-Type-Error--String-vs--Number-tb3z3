function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

console.log(add(5,3)); //Outputs 8
console.log(subtract(5,3)); //Outputs 2

//Uncommon error: Type 'string' is not assignable to type 'number'.
console.log(add("5",3)); //Error
console.log(add(5,"3")); //Error