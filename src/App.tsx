import './App.css';
import Header from './containers/Header/Header';
import Banner from './containers/Banner/Banner';
import PageBody from './containers/PageBody/PageBody';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
      <Banner />
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/blog/'/>} />
          <Route path='/blog' element={<PageBody />}/>
          <Route path='/blog/:blogId' element={<PageBody />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 