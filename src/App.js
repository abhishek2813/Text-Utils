
import React,{useState} from 'react' 
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //wheter dark mode is enable or not
const [alert, setalert] = useState(null)

const showAlert =(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setalert(null)
  }, 1500);
}

  let toggleMode =()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor ='black';
      document.body.style.color ='white';
      showAlert("Dark Mode Enable","success")
      document.title="Text Util Dark Mode"
    }else{
     setMode("light")
     document.body.style.backgroundColor ='white';
      document.body.style.color ='black';
      showAlert("Light Mode Enable","success")
      document.title="Text Util Light Mode"
    }
  }
  return (
    <Router>
    <>
   <Navbar name="Text Utils" li1="Home" li2="About" li3="Price" mode={mode} toggleMode={toggleMode} />
   <Alert message={alert} />
 
    </>
    <Routes>
    <Route exact path="/" element={<TextForm heading="Enter Your text Below" mode={mode} showAlert={showAlert} />}/>
    <Route exact path="/about" element={<About  mode={mode}/>}/>

        </Routes>
    </Router>
  );
  
}

export default App;
