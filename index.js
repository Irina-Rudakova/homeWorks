console.log('Hello from Parcel!');

import { add } from './myModule.js';
import { subtract } from './myModule.js';

const resultAdd = add(5, 2)
const resultSubtract = subtract(5, 2)

console.log("Сумма-", resultAdd);
console.log("Разница-", resultSubtract);

