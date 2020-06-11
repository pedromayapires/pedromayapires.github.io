import MainCV from './components/main_cv.js';
import Settings from './components/settings.js';
import DATA from './cv_db.js';
import Store from './utils/store.js';

const e = React.createElement;
const jsonData = DATA;
// const { useState } = React;
// const [state, setState] = useState(initialState);

// ReactDOM.render(
//   [
//     e(Settings),
//     // e(MainCV, { jsonData: jsonData, stateTestInt: stateTestInt }),
//     e(MainCV, { jsonData: jsonData }),
//     e('div', { id: 'notifications' })
//   ],
//   document.getElementById('root')
// );

ReactDOM.render(
  [
    e(
      Store,
      {},
      e(Settings),
      e(MainCV, { jsonData: jsonData }),
      e('div', { id: 'notifications' })
    )
  ],
  document.getElementById('root')
);

let showMessage = (message) => {
  let notificationElement = document.getElementById('notifications');

  const tempElement = document.createElement('div');
  tempElement.innerHTML = message;
  tempElement.classList.add('fadeOut');
  notificationElement.appendChild(tempElement);
  setTimeout(() => {
    notificationElement.removeChild(tempElement);
  }, 3000);
};

document.querySelectorAll('.copyValueToClip').forEach((element) => {
  element.onclick = function() {
    if (document.getElementById('quickCopyCheck').checked) {
      // create temporary textarea element because select() only applies to
      // textarea or input elements, i know... this sucks... it's frontend...
      const tempElement = document.createElement('textarea');
      // hide the shamefull hack
      tempElement.style.display = 'hidden';
      // copy the data we wanted to select but we are not allowed to
      tempElement.value = event.target.innerHTML;
      // taint our html with the dirty hack
      document.body.appendChild(tempElement);
      // finally select the text we wanted so badly
      tempElement.select();
      // force a copy command through code
      document.execCommand('copy');
      // clean our document and pretend this never happened
      document.body.removeChild(tempElement);

      showMessage('Copied: ' + event.target.innerHTML);
    }
  };
});
