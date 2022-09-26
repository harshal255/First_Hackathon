import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Sidebar></Sidebar>
    <Dashboard></Dashboard>
    </div>
  );
}

export default App;
