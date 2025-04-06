
import React, { useRef, useEffect } from 'react';

const OrbitalRings = () => {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = orbitRef.current.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const moveX = (clientX - centerX) / 35;
      const moveY = (clientY - centerY) / 35;
      
      orbitRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={orbitRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
    >
      <div className="absolute w-full h-full rounded-full border border-space-cyan/20"></div>
      <div className="absolute w-[70%] h-[70%] top-[15%] left-[15%] rounded-full border border-space-cyan/30"></div>
      <div className="absolute w-[40%] h-[40%] top-[30%] left-[30%] rounded-full border border-space-cyan/40"></div>
      
      <div className="absolute w-[900px] h-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-space-cyan/20 rounded-full z-0"></div>
      <div className="absolute w-[1000px] h-[1000px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-space-cyan/10 rounded-full z-0"></div>
    </div>
  );
};

export default OrbitalRings;
