import React from 'react';
import Register from './components/Register'
import ProtectedPage from './components/ProtectedPage'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Router>
      <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/login">Register</Link>
      <Link to="/protected">Protected</Link>
      </div>
      <Route path="/login" component={Register} />
      <Route path="/protected" component={ProtectedPage} />
      </Router>
    </div>
  );
}

export default App;
