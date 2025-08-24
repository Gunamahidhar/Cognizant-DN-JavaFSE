import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 65 },
    { name: "Gill", score: 95 },
    { name: "Rahul", score: 55 },
    { name: "Iyer", score: 72 },
    { name: "Pant", score: 67 },
    { name: "Hardik", score: 48 },
    { name: "Ashwin", score: 80 },
    { name: "Bumrah", score: 33 },
    { name: "Shami", score: 90 },
    { name: "Siraj", score: 75 },
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      {players.map((p, i) => (
        <p key={i}>{p.name} - {p.score}</p>
      ))}

      <h2>Players with Score &lt; 70:</h2>
      {filteredPlayers.map((p, i) => (
        <p key={i}>{p.name} - {p.score}</p>
      ))}
    </div>
  );
};

export default ListOfPlayers;
