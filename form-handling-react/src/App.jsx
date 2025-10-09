import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Form Handling in React</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        <div style={{ flex: "1 1 300px", border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <RegistrationForm />
        </div>

        <div style={{ flex: "1 1 300px", border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <FormikForm />
        </div>
      </div>
    </div>
  );
}

export default App;
