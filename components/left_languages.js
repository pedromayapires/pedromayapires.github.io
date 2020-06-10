import LanguageElement from './left_language_element.js';
const e = React.createElement;

const Languages = (props) => {
  let languageArray = [];
  for (let i = 0; i < props.languages.length; i++) {
    languageArray.push(e(LanguageElement, props.languages[i]));
  }

  return e(
    'div',
    { id: 'languages' },
    e('div', { className: 'leftCategories' }, 'Languages'),
    languageArray
  );
};

export default Languages;
