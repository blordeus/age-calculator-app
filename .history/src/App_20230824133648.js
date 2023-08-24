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

  const handleSubmit = (day, month, year) => {
    const daysAsNumber = Number(day);
    const monthsAsNumber = Number(month);
    const yearsAsNumber = Number(year);

    const today = new Date();
    const chosenDate = new Date(year, month - 1, day);

    const currentMonth = monthsAndDays.find((item) => item.month === monthAsNumber);

    const validateDaysForFebruary = () => {
      if (monthAsNumber ===2) {
        let maxDays;

      if (isLeapYear(yearAsNumber)) {
        maxDays = currentMonth?.days?.leap;
      }  else {
        maxDays = currentMonth?.days?.common;
      }

      if (dayAsNumber < maxDays) {
        return true;
      } else {
        return false;
      }
      }
      return flase;
    };

    const isDayInputValid = daysAsNumber > 1 && 
    ((monthAsNumber == 2 && dayAsNumber < (currentMonth?.days || 31)) || 
    validateDaysForFebruary());

    const isMonthInputValid = monthAsNumber > 1 && monthAsNumber < 12;

    const isYearInputValid = yearAsNumber  > 1 && yearAsNumber < today.getFullYear();

    const isPastDate = today - chosenDate < 0;

    if (!day) {
      setFormErrors((prevState) => ({...prevState, 
        day: "This field is required", 
        month: formErrors.month && isMonthInputValid ? "" : prevState.month,
        year: formErrors.year && isYearInputValid ? "" : prevState.year,
      }));
    }
  }
    if (!month) {
      setFormErrors((prevState) => ({...prevState, 
        month: "This field is required", 
        day: formErrors.day && isDayInputValid ? "" : prevState.day,
        year: formErrors.year && isYearInputValid ? "" : prevState.year,
      }));
    }
    if (!year) {
      setFormErrors((prevState) => ({...prevState, 
        year: "This field is required", 
        month: formErrors.month && isMonthInputValid ? "" : prevState.month,
        day: formErrors.day && isDayInputValid ? "" : prevState.day,
      }));
    }
    
    const isPrecheckValid = isDayInputValid && isMonthInputValid && isYearInputValid;

    if(isPrecheckValid){
      if(day && isDayInputValid) {
        setFormErrors((prevState) => ({
          ...prevState,
          day: "Must be a valid day",
          month: formErrors.month && isMonthInputValid ? "" : prevState.month,
          year: formErrors.year && isYearInputValid ? "" : prevState.year,
          generic: "",
        }));
      }

      if(month && isMonthInputValid) {
        setFormErrors((prevState) => ({
          ...prevState,
          month: "Must be a valid month",
          day: formErrors.day && isDayInputValid ? "" : prevState.day,
          year: formErrors.year && isYearInputValid ? "" : prevState.year,
          generic: "",
        }));
      } else if (isPrecheckValid && isPastDue) {
        setFormErrors((prevState) => ({
          day: "",
          month: "",
          year: "",
          generic: "Must be a date in the past",
        }));
      }

      if(year && isYearInputValid) {
        setFormErrors((prevState) => ({
          ...prevState,
          year: "Must be a valid year",
          month: formErrors.month && isMonthInputValid ? "" : prevState.month,
          day: formErrors.day && isDayInputValid ? "" : prevState.day,
          generic: "",
        }));
      }
    }

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

  <button className="btn" onClick={() => handleSubmit(formData.day, formData.month, formData.year)}>
    <img src={arrowIcon} alt="arrowIcon" />
  </button>
</div>

<div className="output-container">
  <h1>
    <span className="highlighted">
    {output.years === "" ? '--' : output.years}{" "}
    </span>
    {output.years === 1 ? 'year' : "years"}
    </h1>

    <h1>
    <span className="highlighted">
    {output.months === "" ? '--' : output.months}{" "}
    </span>
    {output.months === 1 ? 'month' : "months"}
    </h1>

    <h1>
    <span className="highlighted">
    {output.days === "" ? '--' : output.days}{" "}
    </span>
    {output.days === 1 ? 'day' : "days"}
    </h1>
</div>
    </div>
  );
};

export default App;
