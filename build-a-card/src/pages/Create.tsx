import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const occasions = ['Birthday', 'Anniversary', 'Congratulations', 'Thank You', 'Other'];

function Create() {
  const navigate = useNavigate();
  const [occasion, setOccasion] = useState('Birthday');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files).slice(0, 5);
    setImages(files);
    setPreviews(files.map(file => URL.createObjectURL(file)));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Store data in localStorage
    localStorage.setItem('cardData', JSON.stringify({ occasion, name, message, images: previews }));
    navigate('/preview');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <h2 className="mb-4">Create Your Card</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Occasion</label>
            <select className="form-select" value={occasion} onChange={e => setOccasion(e.target.value)}>
              {occasions.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Upload Images (max 5)</label>
            <input type="file" className="form-control" accept="image/*" multiple onChange={handleImageChange} />
            <div className="d-flex flex-wrap mt-2">
              {previews.map((src, idx) => (
                <img key={idx} src={src} alt="preview" className="me-2 mb-2" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8, border: '1px solid #ccc' }} />
              ))}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Custom Message</label>
            <textarea className="form-control" rows={3} value={message} onChange={e => setMessage(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success w-100">Preview Card</button>
        </form>
      </div>
    </div>
  );
}

export default Create; 