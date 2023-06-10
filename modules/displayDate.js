// displayDate.js

import { DateTime } from '../path/to/luxon.js';

const displayDate = () => {
  let now = DateTime.local().toLocaleString(DateTime.DATE_FULL);
  document.getElementById('current-date').textContent = now;
}

export default displayDate;
