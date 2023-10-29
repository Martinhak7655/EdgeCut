import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Components1 from './Components1/Components1';
import HomePage from './HomePage/HomePage';
import Components7 from './Components7/Components7';
import AboutPage from './AboutPage/AboutPage';
import FurniturePage from './FurniturePage/FurniturePage';
import BlogPage from './BlogPage/BlogPage';
import ContactPage from './ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <Router >
        <Components1 />
        <Routes >
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path='/AboutPage' element={<AboutPage />} />
        </Routes>
        <Routes>
          <Route path='/FurniturePage' element={<FurniturePage />} />
        </Routes>
        <Routes>
          <Route path='/BlogPage' element={<BlogPage />} />
        </Routes>
        <Routes>
          <Route path='/ContactPage' element={<ContactPage />} />
        </Routes>
          <Components7 />
      </Router>

    </div>
  );
}

export default App;
