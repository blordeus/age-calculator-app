 import { useState } from "react";
 import "./style.css";

 import arrowIcon from './images/icon-arrow.svg'

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
      <div className="inputs-container">
      <div className="input-label-container">
        <label htmlFor="day" style={{
          color: hasErrors ? "hsl(0,100%,67%)" : "hsl(0,1%,44%)",
        }}>Day</label>
        <input 
        type="number" 
        id="day" 
        placeholder="DD" 
        min={1} 
        value={formData.day} 
        style={{
          border: hasErrors 
          ? '1px solid hsl(0,100%,67%)' 
          : '1px solid hsl(0,0%,94%)'
        }}
        onChange={(e) => 
        setFormData((prevState) => 
        ({...prevState, 
          day:e.target.value}))}
        />
        {formErrors.day && <p className="error">{formErrors.day}</p>}
      </div>

      <div className="input-label-container">
        <label htmlFor="month" style={{
          color: hasErrors ? "hsl(0,100%,67%)" : "hsl(0,1%,44%)",
        }}>Month</label>
        <input 
        type="number" 
        id="day" 
        placeholder="MM" 
        min={1} 
        value={formData.month} 
        style={{
          border: hasErrors 
          ? '1px solid hsl(0,100%,67%)' 
          : '1px solid hsl(0,0%,94%)'
        }}
        onChange={(e) => 
        setFormData((prevState) => 
        ({...prevState, 
          month:e.target.value}))}
        />
        {formErrors.month && <p className="error">{formErrors.month}</p>}
      </div>

      <div className="input-label-container">
        <label htmlFor="year" style={{
          color: hasErrors ? "hsl(0,100%,67%)" : "hsl(0,1%,44%)",
        }}>Year</label>
        <input 
        type="number" 
        id="year" 
        placeholder="YYYY" 
        min={1} 
        value={formData.year} 
        style={{
          border: hasErrors 
          ? '1px solid hsl(0,100%,67%)' 
          : '1px solid hsl(0,0%,94%)'
        }}
        onChange={(e) => 
        setFormData((prevState) => 
        ({...prevState, 
          year:e.target.value}))}
        />
        {formErrors.year && <p className="error">{formErrors.year}</p>}
      </div>
    </div>

    {formErrors.generic && (
      <p className="error generic">{formErrors.generic}</p>
    )}

<div className="divider-container"> 
  <div className="divider"></div>

  <button className="btn" onClick={() => null}>
    <img src={arrowIcon} alt="arrowIcon" />
  </button>
</div>

<div className="output-container">
  <h1>
    <span className="highlighted">
    {output.year === "" ? '--' : output.years}
    </span>
    </h1>
</div>  </div>
  );
};

export default App;
