// Sum of multiples of a or b in list l
let listEuler1 = (a, b, l) => {
  return l.reduce((sum, num) => (num % a === 0 || num % b === 0 ? sum + num : sum), 0);
};

// Sum of multiples of any number in list a found in list l
let listEuler2 = (a, l) => {
  return l.reduce((sum, num) => (a.some(factor => num % factor === 0) ? sum + num : sum), 0);
};

// Same as listEuler2 - sum of multiples of any number in list a found in list l
let listEuler3 = (a, l) => {
  return listEuler2(a, l);
};

// Wrapper functions that call above and alert results

let eulerlist = () => {
  let a = 2; // can un-hardcode as needed
  let b = 3;
  let l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
  let result = listEuler1(a, b, l);
  alert("Sum of multiples of " + a + " or " + b + " in list is: " + result);
};

let euler2Lists = () => {
  let a = [2, 3]; // can un-hardcode as needed
  let l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
  let result = listEuler2(a, l);
  alert("Sum of multiples of [" + a.join(", ") + "] in list is: " + result);
};

let euler2Lists1 = () => {
  let a = [2, 3, 5]; // can un-hardcode as needed
  let l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
  let result = listEuler3(a, l);
  alert("Sum of multiples of [" + a.join(", ") + "] in list is: " + result);
};
