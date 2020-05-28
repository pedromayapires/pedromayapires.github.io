import MainCV from './components/main_cv.js';
import Settings from './components/settings.js';
import DATA from './cv_db.js';

const e = React.createElement;
const jsonData = DATA;

ReactDOM.render(
  [
    e(Settings),
    e(MainCV, { jsonData: jsonData }),
    e('div', { id: 'notifications' })
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
      const tempElement = document.createElement('textarea');
      tempElement.style.display = 'hidden';
      tempElement.value = event.target.innerHTML;
      document.body.appendChild(tempElement);
      tempElement.select();
      document.execCommand('copy');
      document.body.removeChild(tempElement);
      showMessage('Copied: ' + event.target.innerHTML);
    }
  };
});
