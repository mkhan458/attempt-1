import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Preview from './pages/Preview';

function App() {
  return (
    <>
      <nav className="custom-navbar">
        <div className="custom-navbar-content">
          <span className="custom-navbar-title">Build A Card</span>
          <a href="/create" className="custom-navbar-btn">Get Started</a>
        </div>
      </nav>
      <div style={{ padding: '2rem 0' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
