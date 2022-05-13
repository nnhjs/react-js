function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()} >{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const numbers = [1, 2, 3, 4, 5];

root.render(<NumberList numbers={numbers} />)