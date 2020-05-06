import MainCV from './components/main_cv.js';
import DATA from './cv_db.js';

const e = React.createElement;
const jsonData = DATA;

ReactDOM.render(
  e(MainCV, { jsonData: jsonData }),
  document.getElementById('root')
);
