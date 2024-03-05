
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1c224a';
      showAlert('Dark mode has been Enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been Enabled', 'success');
    }
  }
  return (
    <>


      <Navbar Title="TextUtils" AboutText='About us' HomePage="Home" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <About/> */}
        <TextForm showAlert={showAlert} heading="TextUtils - Lowercase,Uppercase,Remove extra spcases and copy text" mode={mode} />

      </div>

    </>

  );
}

export default App;



