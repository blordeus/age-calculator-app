 import { useState } from "react";
 import "./style.css";

const App = () => {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [formErrors, setFormErrors] = useState({
    day
  })

  return <div>App</div>;
};

export default App;
