import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <>
      <div className="colorful-bg d-flex align-items-center justify-content-center min-vh-100">
        <div className="card shadow-lg p-5 border-0 text-center" style={{ maxWidth: 600, background: 'rgba(255,255,255,0.95)', borderRadius: '2rem' }}>
          <h1 className="display-4 fw-bold mb-4">
            Build a card <span className="highlight">faster</span> than ever.
          </h1>
          <p className="lead mb-4">
            Design and develop your card in seconds. <br />
            Bring your ideas to life—simply think, see, and create!
          </p>
          <Link to="/create" className="btn btn-primary btn-lg px-5 py-2 mt-2 shadow-sm">Get Started</Link>
        </div>
      </div>
      <Carousel />
    </>
  );
}

export default Home; 