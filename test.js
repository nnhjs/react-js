import React from 'react'

function DiceRoll(){
  const [num, setNum] = React.useState(getRandomNumber());

  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6);
  };

  return (
    <div>
      Your dice roll:
      {num}
    </div>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<DiceRoll />, root);