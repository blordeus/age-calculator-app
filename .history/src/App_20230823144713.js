 import { useState } from "react";
 import "./style.css";

const App = () => {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [formErrors, setFormErrors] = useState({
    day: "",
    month: "",
    year: "",
    generic: "",
  });

  const [output, setOutput] = useState({
    days: "",
    months: "",
    years: "",
  });

  const hasErrors = formErrors.day || formErrors.month || formErrors.year

  return <div>App</div>;
};

export default App;
