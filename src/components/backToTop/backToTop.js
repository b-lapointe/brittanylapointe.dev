import React, { useState, useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FaArrowUp } from 'react-icons/fa';

import './backToTop.scss';

const BackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBackToTop(scrollPosition >= 1000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button onClick={() => scrollTo('#home')} className={`backToTop ${showBackToTop ? 'show' : ''}`}>
      <span>
        <FaArrowUp />
      </span>
      <p>BACK TO TOP</p>
    </button>
  );
};

export default BackToTop;
