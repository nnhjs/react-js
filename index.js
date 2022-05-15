const root = ReactDOM.createRoot(document.getElementById('root'))

// function App() {
//   return (
//     <div>
//       Hello world
//     </div>
//   )
// }

const element = React.createElement('div', {}, 'Hello world')

root.render(element)