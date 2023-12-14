import './App.css';
import Login from "./authentification/login.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home";


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path={"/home"} element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
