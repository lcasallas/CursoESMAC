const data = {
  frontend: 'Leo',
  backend: 'clau',
  design: 'Ro',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//

const data2 = {
  frontend: 'Leo',
  backend: 'clau',
  design: 'Ro',
};

const values = Object.values(data2);
console.log(values);
console.log(values.length);

//

const string = 'leonardo';
console.log(string.padStart(11, 'hi'));
console.log(string.padEnd(12, '-'));
console.log('food'.padEnd(12, '----'));
