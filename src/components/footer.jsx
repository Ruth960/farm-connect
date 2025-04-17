import React from 'react';

export default function Footer() {
    return (
        <nav style={{
                width: '100%',
                height: '20px',
                backgroundColor: '#708070',
                color: '#000',
                padding: '80px',
                display: 'flex',
                justifyContent: 'center',
                fontSize: '20px',
                alignItems: 'center',
                position: 'fixed',
                bottom: 0,
                left: 0,
                
                
        }}>
            <div style={{ textAlign: 'center' }}>
                <h3>Contact Us</h3>
                <p>Email: <a href="mailto:ruthmwaniki2020@gmail.com">ruthmwaniki2020@gmail.com</a></p>
                <p>Phone: <a href="tel:+254745846180">+254 745 846 180</a></p>
                <p>Address: 123 Agri Kenya</p>
            </div>
        </nav>
    );
}