
import { DateTime } from './luxon.js';

const displayCurrentTime = () => {
  const now = DateTime.now();
  return now.toLocaleString(DateTime.DATETIME_MED);
};

export default displayCurrentTime;
