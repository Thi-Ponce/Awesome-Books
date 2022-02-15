import { DateTime } from '../node_modules/luxon/src/luxon.js';

const current = DateTime.now().toString();
document.getElementById('date').innerHTML = current;