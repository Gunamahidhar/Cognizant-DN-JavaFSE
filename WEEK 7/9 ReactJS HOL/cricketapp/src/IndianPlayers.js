import React from 'react';

const IndianPlayers = () => {
  const team = ["Kohli", "Rohit", "Gill", "Rahul", "Pant", "Iyer"];
  const [p1, p2, p3, p4, p5, p6] = team;

  const oddTeam = [p1, p3, p5];
  const evenTeam = [p2, p4, p6];

  const T20players = ["Dhoni", "Yuvraj", "Jadeja"];
  const RanjiTrophy = ["Pujara", "Rahane", "Saha"];

  const allPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players:</h2>
      {oddTeam.map((p, i) => <p key={i}>{p}</p>)}

      <h2>Even Team Players:</h2>
      {evenTeam.map((p, i) => <p key={i}>{p}</p>)}

      <h2>Merged T20 & Ranji Trophy Players:</h2>
      {allPlayers.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
};

export default IndianPlayers;
