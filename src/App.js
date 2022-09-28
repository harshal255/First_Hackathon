// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Report from './components/Report';
import Vehicles from './components/Vehicles';
import Missingperson from './components/MissingPerson';
import Case from './components/Case';
import Signin from './components/Signin';


function App() {
  return (

    <div className="App">
     

      <Router>
      <Header></Header>
      <Sidebar></Sidebar>
        <Routes>

          <Route path="/" element={<Signin></Signin>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/profile" element={<Profile></Profile>} />
          
          <Route path="/vehicles" element={<Vehicles></Vehicles>} />
          <Route path="/missingperson" element={<Missingperson></Missingperson>} />

          <Route path="/case" element={<Case></Case>} />
          <Route path="/report" element={<Report></Report>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
