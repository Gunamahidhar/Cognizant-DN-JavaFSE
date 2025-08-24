import React from 'react';
import './App.css';

function App() {
  const heading = "Office Space , at Affordable Range";
  const sr = "https://cdn.pixabay.com/photo/2017/01/22/19/20/office-2002167_960_720.jpg";


  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "Regus", Rent: 75000, Address: "Bangalore" },
    { Name: "SmartWorks", Rent: 45000, Address: "Pune" }
  ];

  const getRentColor = (rent) => {
    return {
      color: rent <= 60000 ? "red" : "green"
    };
  };

  return (
    <div className="App">
      <h1>{heading}</h1>
      <img src="/Office.jpg" width="25%" height="25%" alt="Office Space" />

      {officeList.map((office, index) => (
        <div key={index}>
          <h2>Name: {office.Name}</h2>
          <h3 style={getRentColor(office.Rent)}>Rent: Rs. {office.Rent}</h3>
          <h3>Address: {office.Address}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
