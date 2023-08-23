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

  const hasErrors = formErrors.day || formErrors.month || formErrors.year || formErrors.generic;

  return (
    <div className="card-container">
      <div className="inputs-container"></div>
      <div className="input-label-container">
        <label htmlFor="day">Day</label>
        <input 
        type="number" 
        id="day" 
        placeholder="DD" 
        min={1} 
        value={formData.day} 
        onChange={(e) => 
        setFormData((prevState) => ({...prevState, day:e.target.value}))}>
        </input>
      </div>
    </div>
  );
};

export default App;
