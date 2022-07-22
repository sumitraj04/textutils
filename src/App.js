//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
//import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Routes,
//   Route,
//  // Link
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })    
    setTimeout(() => {
        setAlert(null)
    }, 3000);  
  }

  const [mode, setMode] = useState('dark')
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light')
      showAlert('Light mode has been enabled', 'success');
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">               
          {/* <About/> */}
          <TextForm heading="Enter the text to analyze-"/>                                 
    </div>

    {/* <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
        <Routes>          
          <Route path="/About" element={<About/>} />                    
          <Route path="/" element={<TextForm heading="Enter the text to analyze-"/>} />
        </Routes>         
    </div>
    </Router> */}
    </>
  );
}

export default App;
