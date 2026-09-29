import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-screen ${hidden ? 'hidden' : ''}`}>
      <div className="loader-logo">AR</div>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
      <p
        className="mt-4 text-xs tracking-[0.3em] text-charcoal-400 uppercase"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        AR Furniture
      </p>
    </div>
  );
}
