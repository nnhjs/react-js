var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var root = ReactDOM.createRoot(document.getElementById('root'));

function Clock() {
  var _React$useState = React.useState(new Date()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      date = _React$useState2[0],
      setDate = _React$useState2[1];

  function tick() {
    setDate(new Date());
  }

  // setInterval(tick, 1000)

  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Hello, world'
    ),
    React.createElement(
      'h2',
      null,
      'It is ',
      date.toLocaleTimeString(),
      '.'
    )
  );
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return React.createElement(
    'form',
    { onSubmit: handleSubmit },
    React.createElement(
      'button',
      { type: 'submit' },
      'Submit'
    )
  );
}

function Toggle() {
  var _React$useState3 = React.useState('OFF'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isToggleOn = _React$useState4[0],
      setIsToggleOn = _React$useState4[1];

  function handleClick() {
    setIsToggleOn(!isToggleOn);
  }
  return React.createElement(
    'button',
    { onClick: handleClick },
    isToggleOn ? 'ON' : 'OFF'
  );
}

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Toggle, null)
  );
}

root.render(React.createElement(App, null));