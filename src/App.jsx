import React ,{useState} from "react";
import "./index.css"


// function App() {
//   let currTime = new Date().toLocaleTimeString();
//   const [time,setTime] = useState(currTime);

//   function increment() {
//     currTime = new Date().toLocaleTimeString(); 
    
//       setTime(currTime);
   
//   }
//   return (
//     <>
//         <div className="Box">
//         <div className="count">{time}</div>
//         <button onClick={increment} className="button">GET TIME</button>
        
//         </div>
        
//     </>
//   )
// }


function App() {
  let currTime = new Date().toLocaleTimeString();
  const [time,setTime] = useState(currTime);
   setInterval(() => {
    currTime = new Date().toLocaleTimeString();
    setTime(currTime)
   }, 1000);

  return (
    <>
        <div className="Box">
        <div className="count">{time}</div>
        </div>
        
    </>
  )
}



export default App;
