import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      document.body.classList.add('cursor-luxury');
      setVisible(true);
    }

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a, button, [data-cursor="hover"], input, textarea')
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', checkHover);

    return () => {
      document.body.classList.remove('cursor-luxury');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
        }}
      />
      <div
        className={`cursor-ring ${hovering ? 'hovering' : ''}`}
        style={{
          transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
        }}
      />
    </>
  );
}
