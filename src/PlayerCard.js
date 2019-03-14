import React from 'react';

const PlayerCard = (props) => {
  console.log(props.sign);
  return (
    <div className="playerCard">{props.sign}</div>
  )
}

export default PlayerCard;
