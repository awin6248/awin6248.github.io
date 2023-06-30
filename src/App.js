import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Drawing from './Pages/Drawing';
import Video from './Pages/Video';
import Photography from './Pages/Photography';
import WorksOnPaper from './Pages/WorksOnPaper';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import CV from './Pages/Cv';
import './index.css';



function App() {
  return (
    <div class='page'>
    <Nav/>
    <Routes>
      <Route exact path='/drawing' Component={Drawing}/>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/photography' Component={Photography}/>
      <Route exact path='/video' Component={Video}/>
      <Route exact path='/printed-works' Component={WorksOnPaper}/>
      <Route exact path='/cv' Component={CV}/>
    </Routes>
    </div>
  );
}

export default App;
