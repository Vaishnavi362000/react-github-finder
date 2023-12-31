/*import './App.css';
import UseEffectAPI from './components/useEffect';


function App() {
  return (
    <div className="App">
      <UseEffectAPI />
    </div>
  );
}

export default App;
*/
import Navbar from "./textConverter/Navbar"
import TextForm from "./textConverter/TextForm"; 
import About from "./textConverter/About";
import React,{ useState } from "react";
import Alert from "./textConverter/Alerts";
function App(){
  const [mode,setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success")
      document.title = 'TextUtils - Dark Mode';
      /*setInterval(()=>{
        document.title='TextUtils is Amazing Mode';
      },2000);
      setInterval(()=>{
        document.title='Install TextUtils Now';
      },1500);
      
      */
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
      document.title = 'TextUtils - Light Mode';
    }
  }

  
  return(
    <>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className='container my-3'>
      <TextForm showAlert={showAlert} heading='Enter the text to analyse below' mode={mode}/>
      <About />

      </div>
      
    </>
  );
}
export default App;