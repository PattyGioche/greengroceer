import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCarrot, FaAppleAlt, FaSeedling, FaLeaf, FaStar, FaShoppingCart, FaBell } from 'react-icons/fa';
import { GiWheat, GiNutsPile, GiMilkCarton, GiMeat } from 'react-icons/gi';
import { BiCookie, BiFridge } from 'react-icons/bi';
import { MdLocalDrink, MdFastfood, MdLocationOn, MdLocalOffer, MdDeliveryDining, MdAccessTime, MdGrade, MdSort } from 'react-icons/md';
import { IoNutritionOutline } from 'react-icons/io5';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const HomePage = () => {
  const [userName, setUserName] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filterTags = [
    { id: 'pickup', label: 'Pick Up', icon: <MdLocationOn /> },
    { id: 'offers', label: 'Offers', icon: <MdLocalOffer /> },
    { id: 'delivery-fee', label: 'Delivery Fee', icon: <MdDeliveryDining /> },
    { id: 'delivery-time', label: 'Delivery Time', icon: <MdAccessTime /> },
    { id: 'highest-rated', label: 'Highest Rated', icon: <MdGrade /> },
    { id: 'rating', label: 'Rating', icon: <FaStar /> },
    { id: 'price', label: 'Price', icon: <RiMoneyDollarCircleLine /> },
    { id: 'dietary', label: 'Dietary', icon: <IoNutritionOutline /> },
    { id: 'sort', label: 'Sort', icon: <MdSort /> }
  ];

  // ... Previous state declarations remain the same ...

  const categories = [
    { name: "Fruits", icon: <FaAppleAlt />, path: "/fruits" },
    { name: "Vegetables", icon: <FaCarrot />, path: "/vegetables" },
    { name: "Herbs & Spices", icon: <FaLeaf />, path: "/herbs-spices" },
    { name: "Root Vegetables & Tubers", icon: <FaSeedling />, path: "/root-vegetables" },
    { name: "Grains & Pulses", icon: <GiWheat />, path: "/grains" },
    { name: "Nuts & Seeds", icon: <GiNutsPile />, path: "/nuts" },
    { name: "Dairy & Alternatives", icon: <GiMilkCarton />, path: "/dairy" },
    { name: "Meat, Poultry & Seafood", icon: <GiMeat />, path: "/meat" },
    { name: "Bakery & Bread", icon: <BiCookie />, path: "/bakery" },
    { name: "Frozen & Processed Vegetables", icon: <BiFridge />, path: "/frozen" },
    { name: "Snacks & Organic Products", icon: <MdFastfood />, path: "/snacks" },
    { name: "Beverages", icon: <MdLocalDrink />, path: "/beverages" }
  ];

  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: '#39FF14',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      {/* Header Section */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        padding: '1rem 2rem',
        display: 'flex',
        gap: '1.5rem',
        zIndex: 1000,
        backgroundColor: 'rgba(10, 10, 10, 0.9)'
      }}>
        {/* Cart and Notification icons remain the same */}
      </div>

      {/* Main Content */}
      <div style={{ paddingTop: '3rem' }}>
        {/* Location and Welcome message remain the same */}
        
        {/* Search Bar remains the same */}

        {/* Categories Scroll Section */}
        <motion.div style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '1.5rem',
          padding: '1rem 0',
          marginBottom: '2rem'
        }}>
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '80px',
                cursor: 'pointer'
              }}
            >
              <Link to={category.path} style={{ textDecoration: 'none', color: '#39FF14' }}>
                <div style={{
                  backgroundColor: '#1a1a1a',
                  padding: '1rem',
                  borderRadius: '50%',
                  marginBottom: '0.5rem',
                  boxShadow: '0 0 10px rgba(57, 255, 20, 0.3)'
                }}>
                  {category.icon}
                </div>
                <span style={{ fontSize: '0.8rem', textAlign: 'center' }}>{category.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Tags Scroll Section */}
        <motion.div style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '1rem',
          padding: '0.5rem 0',
          marginBottom: '2rem'
        }}>
          {filterTags.map((tag, index) => (
            <motion.div
              key={tag.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: selectedFilters.includes(tag.id) ? '#39FF14' : '#1a1a1a',
                color: selectedFilters.includes(tag.id) ? '#000' : '#39FF14',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                minWidth: 'fit-content',
                border: '1px solid #39FF14'
              }}
              onClick={() => {
                if (selectedFilters.includes(tag.id)) {
                  setSelectedFilters(selectedFilters.filter(id => id !== tag.id));
                } else {
                  setSelectedFilters([...selectedFilters, tag.id]);
                }
              }}
            >
              {tag.icon}
              <span style={{ whiteSpace: 'nowrap' }}>{tag.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stores Section */}
        <div style={{ marginTop: '2rem' }}>
          <h2 style={{
            fontFamily: 'Megalon, sans-serif',
            marginBottom: '1rem',
            textShadow: '0 0 5px #39FF14'
          }}>
            Nearby Stores
          </h2>
          <motion.div style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '1.5rem',
            padding: '1rem 0'
          }}>
            {nearbyStores.map((store) => (
              <Link to={`/store/${store.id}`} key={store.id} style={{ textDecoration: 'none' }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{
                    backgroundColor: '#1a1a1a',
                    borderRadius: '10px',
                    padding: '1rem',
                    minWidth: '280px',
                    boxShadow: '0 0 15px rgba(57, 255, 20, 0.2)'
                  }}
                >
                  <img
                    src={store.image}
                    alt={store.name}
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '1rem'
                    }}
                  />
                  <h3 style={{ color: '#39FF14', marginBottom: '0.5rem' }}>{store.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <FaStar style={{ color: '#39FF14' }} />
                    <span style={{ color: '#39FF14' }}>{store.rating}</span>
                  </div>
                  <p style={{ color: '#39FF14', fontSize: '0.9rem' }}>Price Range: {store.priceRange}</p>
                  <p style={{ color: '#39FF14', fontSize: '0.9rem' }}>{store.distance}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;




