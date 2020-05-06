import LanguageElement from './left_language_element.js';
const e = React.createElement;

class Languages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let languageArray = [];
    for (let i = 0; i < this.props.languages.length; i++) {
      languageArray.push(e(LanguageElement, this.props.languages[i]));
    }

    return e(
      'div',
      { id: 'languages' },
      e('div', { className: 'leftCategories' }, 'Languages'),
      languageArray
    );
  }
}

export default Languages;
