import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Works from './pages/Works';
import Information from './pages/Information';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="works" element={<Works />} />
          <Route path="information" element={<Information />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;