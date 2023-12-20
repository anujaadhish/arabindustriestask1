import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/header';
function App() {
  return (
    <div>
     <Router>
      <Header/>
      <Routes>
        <Route />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
