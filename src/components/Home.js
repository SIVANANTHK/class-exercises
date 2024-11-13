import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Restaurant</h1>
          <p>Delight in the finest cuisines crafted with love and passion.</p>
          <button onClick={toggleMenu}>
            {showMenu ? 'Hide Menu' : 'View Menu'}
          </button>
        </div>
      </section>

      {/* Featured Dishes */}
      

      {/* Menu Section */}
      <section className="menu-section">
        {showMenu && (
          <div className="menu-card">
            <h4>Main Courses</h4>
            <ul>
              <li>Grilled Chicken - $12.99</li>
              <li>Spaghetti Bolognese - $10.99</li>
              <li>Vegetarian Pizza - $8.99</li>
            </ul>
            <h4>Combos</h4>
            <ul>
              <li>Lunch Combo - $15.99 (Main + Drink + Dessert)</li>
              <li>Dinner Combo - $18.99 (Starter + Main + Drink + Dessert)</li>
            </ul>
          </div>
        )}
      </section>

      {/* Staff Section */}
      <section className="staff-section">
        <h3>Meet Our Team</h3>
        <div className="staff-list">
          <div className="staff-member">
            <img src="/vj.jpeg" alt="John Doe" />
            <p>Vijay - Head Chef</p>
          </div>
          <div className="staff-member">
            <img src="/sri1.jpeg" alt="Jane Smith" />
            <p>Sri Varshan - Sous Chef</p>
          </div>
          <div className="staff-member">
            <img src="/vi.jpeg" alt="Emily Johnson" />
            <p>Vizhal - Manager</p>
          </div>
          <div className="staff-member">
            <img src="/yuv1.jpeg" alt="Michael Brown" />
            <p>Yuvaraj - Sponser</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;