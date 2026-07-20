import './App.css';
import office from './office.jpg';

function App() {

  const office = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Hyderabad"
    },
    {
      Name: "WeWork",
      Rent: 90000,
      Address: "Bangalore"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      <img
        src={office}
        alt="Office Space"
        width="400"
        height="250"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p>
        <b>Rent:</b>

        <span
          style={{
            color: office.Rent < 60000 ? "red" : "green"
          }}
        >
          {office.Rent}
        </span>

      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Office List</h2>

      {

        officeList.map((item, index) => (

          <div key={index} className="box">

            <p><b>Name:</b> {item.Name}</p>

            <p>

              <b>Rent:</b>

              <span
                style={{
                  color: item.Rent < 60000 ? "red" : "green"
                }}
              >
                {item.Rent}
              </span>

            </p>

            <p><b>Address:</b> {item.Address}</p>

          </div>

        ))

      }

    </div>
  );

}

export default App;