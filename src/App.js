import React, { useState } from "react";
import Alert from "./Alert";
// import Contact from "./Contact";
import Navbar from "./Navbar";
import TextArea from "./TextArea";

function App() {
  const [mode, setmode] = useState("light"); //Use State
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleSwitch = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  };

  return (
    <div>
      <Navbar title="AboutUtils" mode={mode} toggleSwitch={toggleSwitch} />
      <Alert alertMsg={alert} />
      <div className="container ">
        {/* <Contact /> */}
        <TextArea
          heading="Enter the text to analyse below"
          mode={mode}
          toggleSwitch={toggleSwitch}
        />
      </div>
    </div>
  );
}

export default App;
