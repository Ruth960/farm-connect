import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ links }) {
  return (
    <nav style={{
        width: '95vw',
        height: '10vh',
        backgroundColor: '#708070',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'right',
        fontSize: '20px',
        alignItems: 'cente'
    }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        {links && links.map((link, index) => (
          <Link 
            key={index}
            to={link.path} 
            style={{ color: 'white', borderRadius: '5px', padding: '10px 20px', textDecoration: 'none', cursor: 'pointer' }}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}