import CohortDetails from "./Components/CohortDetails";

function App() {

  return (

    <div>

      <h1>Cohorts Details</h1>

      <CohortDetails
        code="INTADMDF10 -.NET FSD"
        startDate="22-Feb-2022"
        status="Scheduled"
        coach="Aathma"
        trainer="Jojo Jose"
      />

      <CohortDetails
        code="ADM21JF014 - Java FSD"
        startDate="10-Sep-2021"
        status="Ongoing"
        coach="Apoorv"
        trainer="Elisa Smith"
      />

      <CohortDetails
        code="CDBJF21025 - Java FSD"
        startDate="24-Dec-2021"
        status="Ongoing"
        coach="Aathma"
        trainer="John Doe"
      />

    </div>

  );

}

export default App;