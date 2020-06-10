const e = React.createElement;

const Settings = (props) => {
  return e(
    'div',
    { id: 'settingsDiv', className: 'hideOnPrint' },
    e('p', { className: 'smallWarning' }, "This section won't show on print"),
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
        'label',
        null,
        e('input', {
          id: 'isoDateFormatCheck',
          type: 'radio',
          name: 'dateFormats',
          defaultChecked: true
        }),
        'ISO date format'
      )
    ),
    e(
      'div',
      { className: 'settingsElement' },
      e(
        'label',
        null,
        e('input', {
          id: 'europeanDateFormatCheck',
          type: 'radio',
          name: 'dateFormats',
          onClick: () => console.log('teste'),
          defaultChecked: false
        }),
        'European date format'
      )
    ),
    e(
      'div',
      { className: 'settingsElement' },
      e(
        'label',
        null,
        e('input', {
          id: 'monthYearFormatCheck',
          type: 'radio',
          name: 'dateFormats',
          defaultChecked: false
        }),
        'Month, year date format'
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
};

export default Settings;
