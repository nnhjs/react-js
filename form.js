// function Form() {
//   return (
//     <form>
//       <select multiple={true}>
//   <option value="grapefruit">Grapefruit</option>
//   <option value="lime">Lime</option>
//   <option selected value="coconut">Coconut</option>
//   <option value="mango">Mango</option>
// </select>
//       <input type="submit" value="Submit" />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Form />)

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement('input', { value: 'hi' }));

setTimeout(function () {
  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement('input', { value: null }));
}, 1000);