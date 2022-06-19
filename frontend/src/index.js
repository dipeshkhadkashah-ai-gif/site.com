import React from 'react'; //importing react from react 
import ReactDOM from 'react-dom'; //importing dom for routes 
import App from './App'; //importing app 
// import Calendar from "react-calendar"; //importing calendar for forms in react

// const ReactCalendar = () => { //creating a function for react calendar
//     const [date, setDate] = useState(new Date());

//     return <div>Hi again</div>
// }

ReactDOM.render(<App/>,document.getElementById("root")); //rendering app in the web