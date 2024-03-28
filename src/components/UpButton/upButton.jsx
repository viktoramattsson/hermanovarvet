import React, { useState, useEffect } from 'react';

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setIsVisible(scrolled > 50);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <button
          className={`up-button visible bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          onClick={scrollToTop}
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        >
          Tillbaka
        </button>
      )}
    </>
  );
};

export default UpButton;
