import React, { useState } from 'react';

export default function Cart({ initialCartItems = [] }) {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const increaseQuantity = (index) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity += 1;
        setCartItems(updatedCart);
    };

    const decreaseQuantity = (index) => {
        const updatedCart = [...cartItems];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
        } else {
            updatedCart.splice(index, 1); // Remove item if quantity is 0
        }
        setCartItems(updatedCart);
    };

    const removeItem = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            style={{ width: '50px', height: '50px', marginRight: '10px' }} 
                        />
                        <div style={{ flex: 1 }}>
                            {item.name} - ksh{item.price} x {item.quantity}
                        </div>
                        <button onClick={() => increaseQuantity(index)}>+</button>
                        <button onClick={() => decreaseQuantity(index)}>-</button>
                        <button onClick={() => removeItem(index)} style={{ marginLeft: '10px' }}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}