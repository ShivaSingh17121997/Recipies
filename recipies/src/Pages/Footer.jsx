import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="footer-column">
                    <h3>Categories</h3>
                    <ul>
                        <li>Fashion</li>
                        <li>Electronics</li>
                        <li>Home Decor</li>
                        <li>Books</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Customer Service</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Shipping Information</li>
                        <li>Returns & Exchanges</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your E-commerce. All rights reserved.</p>
            </div>
        </footer>
    )
}
