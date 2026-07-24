import React from 'react';

function Footer() {
  const now = new Date();
  const monthYear = now.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return <footer className="app-footer">Hanoi, {monthYear}</footer>;
}

export default Footer;