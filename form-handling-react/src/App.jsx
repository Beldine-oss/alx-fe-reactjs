import React from "react";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div className="App" style={styles.container}>
      <h1 style={styles.title}>React Form Handling with Formik</h1>
      <FormikForm />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    maxWidth: "500px",
    margin: "auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
};

export default App;
