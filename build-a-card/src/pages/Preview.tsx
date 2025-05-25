import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type CardData = {
  occasion: string;
  name: string;
  message: string;
  images: string[];
};

function Preview() {
  const [data, setData] = useState<CardData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('cardData');
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) {
    return (
      <div className="text-center mt-5">
        <p>No card data found. Please create a card first.</p>
        <button className="btn btn-primary" onClick={() => navigate('/create')}>Go to Create</button>
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <h2 className="mb-4">Card Preview</h2>
        <div className="mb-3">
          <strong>Occasion:</strong> {data.occasion}
        </div>
        <div className="mb-3">
          <strong>Name:</strong> {data.name}
        </div>
        <div className="mb-3">
          <strong>Message:</strong>
          <div className="border rounded p-2 bg-light mt-1">{data.message}</div>
        </div>
        <div className="mb-3">
          <strong>Images:</strong>
          <div className="d-flex flex-wrap mt-2">
            {data.images && data.images.length > 0 ? data.images.map((src, idx) => (
              <img key={idx} src={src} alt="preview" className="me-2 mb-2" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8, border: '1px solid #ccc' }} />
            )) : <span className="text-muted">No images uploaded.</span>}
          </div>
        </div>
        <button className="btn btn-secondary" onClick={() => navigate('/create')}>Edit Card</button>
      </div>
    </div>
  );
}

export default Preview; 