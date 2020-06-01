const e = React.createElement;

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'div',
      { id: 'settingsDiv', className: 'hideOnPrint' },
      e(
        'p',
        { className: 'smallWarning' },
        "This section won't show on print"
      ),
      e(
        'div',
        { className: 'settingsElement' },
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
      ),
      e(
        'div',
        { className: 'settingsElement' },
        e(
          'button',
          {
            onClick: () => {
              window.print();
            }
          },
          'Print'
        ),
        e(
          'label',
          { className: 'settingsElement smallWarning' },
          "Choose print to pdf in print options, doesn't work properly with Firefox"
        )
      )
    );
  }
}

export default Settings;
