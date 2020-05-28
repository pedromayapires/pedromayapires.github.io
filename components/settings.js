const e = React.createElement;

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'div',
      { id: 'settingsDiv', className: 'hideOnPrint' },
      e('p', { className: 'smallWarning' }, "This won't show on print"),
      e(
        'label',
        null,
        e('input', {
          id: 'quickCopyCheck',
          type: 'checkbox',
          defaultChecked: false
        }),
        'QuickCopy'
      )
    );
  }
}

export default Settings;
