import './App.css';
import Login from "./authentification/login.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home";
import ViewEvents from "./events/ViewEvents";
import ViewTickets from "./events/ViewTickets";


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/events"} element={<ViewEvents/>}/>
                    <Route path="/tickets/:eventId" element={<ViewTickets />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;
