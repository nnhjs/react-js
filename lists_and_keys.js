function NumberList(props) {
  var numbers = props.numbers;
  var listItems = numbers.map(function (number) {
    return React.createElement(
      'li',
      { key: number.toString() },
      number
    );
  });
  return React.createElement(
    'ul',
    null,
    listItems
  );
}
var root = ReactDOM.createRoot(document.getElementById('root'));
var numbers = [1, 2, 3, 4, 5];

root.render(React.createElement(NumberList, { numbers: numbers }));