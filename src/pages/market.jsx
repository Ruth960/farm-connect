import React from 'react';

export default function Market({ setCartItems }) {
    const products = [
        { id: 1, name: 'Tomatoes', price: 170, image: '/tomatoes.png' },
        { id: 2, name: 'Green Peppers', price: 100, image: '/green-peppers.png' },
        { id: 3, name: 'Carrots', price: 200, image: '/carrots.png' },
        { id: 4, name: 'Milk', price: 70, image: '/milk.png' }
    ];

    const addToCart = (product) => {
        setCartItems((prevCart) => [...prevCart, product]);
    };

    return (
        <div
            style={{
                backgroundColor: '#DCF7D0',
                color: '#000000',
                height: '100vh',
                width: '100vw',
                padding: '20px',
                boxSizing: 'border-box',
            }}
        >
            <h2>Available Products</h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '20px',
                }}
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            backgroundColor: 'transparent',
                            padding: '10px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '10px' }} 
                        />
                        <span>{product.name}</span>
                        <span>ksh{product.price}</span>
                        <button 
                            onClick={() => addToCart(product)} 
                            style={{
                                marginTop: '10px',
                                padding: '5px 10px',
                                backgroundColor: '#4CAF50',
                                color: '#fff',
                                border: 'none',
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}