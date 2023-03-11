import './App.css';
import Header from '../src/components/header/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from '../src/pages/About'
import Blog from '../src/pages/Blog'
import Services from '../src/pages/Services'
import Project from '../src/pages/Project'
import Home from '../src/pages/Home'
import Contact from '../src/pages/Contact'



function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>          
          <Route path='/about' element={<About/>}></Route>          
          <Route path='/blog' element={<Blog/>}></Route>          
          <Route path='/services' element={<Services/>}></Route>          
          <Route path='/project' element={<Project />}></Route>          
          <Route path='/contact' element={<Contact/>}></Route>            
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
