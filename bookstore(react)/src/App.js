import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CategoriesView from "./components/CategoriesView";
import HomeView from "./components/HomeView";
import Cart from "./components/Cart";
import SearchAndFilter from "./components/SearchAndFilter";
import booksData from "./booksData";

function App() {
  const [books] = useState(booksData);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentView, setCurrentView] = useState("home");

  const categories = ["All", ...new Set(books.map((book) => book.category))];

  const addToCart = (book) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === book.id);
      if (exists) {
        return prev.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #06b6d4 0%, #ffffff 50%, #e0f7fa 100%)' }}>
      {/* Enhanced Navigation */}
      <nav style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(20px)',
        padding: '1.5rem 2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ 
            fontSize: '2rem', 
            animation: 'pulse 2s infinite'
          }}>
            📚
          </div>
          <h1 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
          }}>
            BookStore
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button 
            onClick={() => setCurrentView('home')}
            style={{ 
              padding: '0.75rem 1.5rem', 
              background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '2rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.4)',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
            }}
          >
            🏠 Home
          </button>
          <button 
            onClick={() => setCurrentView('categories')}
            style={{ 
              padding: '0.75rem 1.5rem', 
              background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '2rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.4)',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
            }}
          >
            📂 Categories
          </button>
          <button 
            onClick={() => setCurrentView('about')}
            style={{ 
              padding: '0.75rem 1.5rem', 
              background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '2rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.4)',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
            }}
          >
            ℹ️ About
          </button>
          <button 
            onClick={toggleCart}
            style={{ 
              padding: '0.75rem 1.5rem', 
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '2rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(236, 72, 153, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.4)';
            }}
          >
            🛒 Cart ({cartItems.length})
          </button>
        </div>
      </nav>

      {/* Conditional Content Rendering */}
      {currentView === "about" ? (
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '3rem 1rem' 
        }}>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.95)', 
            backdropFilter: 'blur(20px)',
            borderRadius: '2rem', 
            padding: '4rem', 
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '5rem', 
              marginBottom: '2rem',
              animation: 'pulse 2s infinite'
            }}>
              📚
            </div>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
              About BookStore
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              color: '#6b7280', 
              marginBottom: '3rem',
              lineHeight: 1.8,
              maxWidth: '800px',
              margin: '0 auto 3rem auto'
            }}>
              Welcome to BookStore, your premier destination for discovering and purchasing amazing books. 
              We believe that books have the power to transform lives, inspire creativity, and connect us 
              to different worlds and perspectives.
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                color: 'white',
                padding: '2rem',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our Mission</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  To make quality literature accessible to everyone and foster a love for reading 
                  in our community.
                </p>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: 'white',
                padding: '2rem',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 30px rgba(245, 158, 11, 0.3)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⭐</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Quality Selection</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  We curate only the finest books across all genres, from timeless classics 
                  to contemporary bestsellers.
                </p>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                padding: '2rem',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Easy Shopping</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  Enjoy a seamless shopping experience with our intuitive interface, 
                  smart search, and secure checkout.
                </p>
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
              padding: '2rem',
              borderRadius: '1.5rem',
              marginBottom: '2rem'
            }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                marginBottom: '1.5rem',
                color: '#1f2937'
              }}>
                Why Choose BookStore?
              </h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1.5rem',
                textAlign: 'left'
              }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#374151' }}>
                    📖 Extensive Collection
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                    Over 15,000 books across all genres and categories
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#374151' }}>
                    💰 Best Prices
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                    Competitive pricing with regular discounts and offers
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#374151' }}>
                    🚚 Fast Delivery
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                    Quick and reliable shipping to your doorstep
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#374151' }}>
                    🛡️ Secure Shopping
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                    Safe and secure payment processing
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
              color: 'white',
              padding: '2rem',
              borderRadius: '1.5rem',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
            }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem'
              }}>
                Join Our Community
              </h2>
              <p style={{ 
                fontSize: '1.1rem', 
                marginBottom: '2rem',
                opacity: 0.9
              }}>
                Connect with fellow book lovers, share reviews, and discover your next favorite read.
              </p>
              <button 
                onClick={() => setCurrentView('home')}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '2rem',
                  padding: '1rem 2rem',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                🏠 Start Shopping
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Enhanced Search and Filter */}
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '3rem 1rem' 
          }}>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.95)', 
          backdropFilter: 'blur(20px)',
          borderRadius: '2rem', 
          padding: '2rem', 
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          marginBottom: '3rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '100px',
            height: '100px',
            background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
            borderRadius: '50%',
            opacity: 0.1
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
            borderRadius: '50%',
            opacity: 0.1
          }}></div>
          
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            flexWrap: 'wrap',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '1.2rem',
                color: '#667eea'
              }}>
                🔍
              </div>
              <input
                type="text"
                placeholder="Search for books, authors, or genres..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 3rem',
                  border: '2px solid rgba(102, 126, 234, 0.2)',
                  borderRadius: '1rem',
                  fontSize: '1rem',
                  background: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '1.2rem',
                color: '#667eea',
                zIndex: 1
              }}>
                🏷️
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  padding: '1rem 1rem 1rem 3rem',
                  border: '2px solid rgba(102, 126, 234, 0.2)',
                  borderRadius: '1rem',
                  fontSize: '1rem',
                  background: 'rgba(255, 255, 255, 0.8)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  appearance: 'none',
                  minWidth: '200px'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Enhanced Books Display */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.95)', 
          backdropFilter: 'blur(20px)',
          borderRadius: '2rem', 
          padding: '3rem', 
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative background elements */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
            borderRadius: '50%',
            opacity: 0.05
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-150px',
            right: '-150px',
            width: '300px',
            height: '300px',
            background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
            borderRadius: '50%',
            opacity: 0.05
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '1rem',
                animation: 'pulse 2s infinite'
              }}>
                📚
              </div>
              <h2 style={{ 
                fontSize: '3rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#0891b2',
                textShadow: '0 2px 4px rgba(8, 145, 178, 0.2)'
              }}>
                Available Books
              </h2>
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '2rem',
                fontSize: '1.2rem',
                fontWeight: '600',
                boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
              }}>
                {books.length} Amazing Books
              </div>
            </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}>
            {books
              .filter((book) => {
                const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  book.author.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
                return matchesSearch && matchesCategory;
              })
              .map((book, index) => (
                <div key={book.id} style={{
                  background: `linear-gradient(135deg, ${book.color ? book.color.replace('from-', '').replace('-400', '-200').replace('to-', '') : '#f3f4f6'} 0%, ${book.color ? book.color.split('to-')[1]?.replace('-400', '-300') : '#e5e7eb'} 100%)`,
                  borderRadius: '2rem',
                  padding: '2rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
                >
                  {/* Decorative corner element */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    opacity: 0.6
                  }}></div>
                  
                  <div style={{ 
                    background: 'rgba(255, 255, 255, 0.95)', 
                    backdropFilter: 'blur(10px)',
                    borderRadius: '1.5rem', 
                    padding: '1.5rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <div style={{ 
                      textAlign: 'center', 
                      marginBottom: '1.5rem',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '1rem',
                      height: '200px',
                      background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)'
                    }}>
                      <img 
                        src={book.image} 
                        alt={book.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.5rem',
                        background: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        {book.category}
                      </div>
                    </div>
                    
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      marginBottom: '0.75rem',
                      color: '#1f2937',
                      textAlign: 'center',
                      lineHeight: 1.2
                    }}>
                      {book.title}
                    </h3>
                    
                    <p style={{ 
                      color: '#667eea', 
                      marginBottom: '0.75rem',
                      fontSize: '1rem',
                      textAlign: 'center',
                      fontWeight: '500'
                    }}>
                      by {book.author}
                    </p>
                    
                    <p style={{ 
                      color: '#6b7280', 
                      fontSize: '0.9rem', 
                      marginBottom: '1.5rem',
                      flex: 1,
                      textAlign: 'center',
                      lineHeight: 1.5
                    }}>
                      {book.description}
                    </p>
                    
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      marginBottom: '1.5rem' 
                    }}>
                      <div style={{ display: 'flex', marginRight: '0.75rem' }}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i} style={{ 
                            color: i < Math.floor(book.rating) ? '#fbbf24' : '#d1d5db',
                            fontSize: '1.2rem',
                            textShadow: i < Math.floor(book.rating) ? '0 1px 2px rgba(251, 191, 36, 0.2)' : 'none'
                          }}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span style={{ 
                        color: '#6b7280', 
                        fontSize: '1rem',
                        fontWeight: '600',
                        background: 'rgba(102, 126, 234, 0.1)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '1rem'
                      }}>
                        {book.rating}
                      </span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      marginTop: 'auto',
                      gap: '1rem'
                    }}>
                      <span style={{ 
                        fontSize: '2rem', 
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg,rgb(253, 252, 255) 0%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                      }}>
                        ${book.price}
                      </span>
                      <button 
                        onClick={() => addToCart(book)}
                        style={{
                          background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '1rem',
                          padding: '0.75rem 1.5rem',
                          cursor: 'pointer',
                          fontSize: '1rem',
                          fontWeight: '600',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)',
                          transform: 'translateY(0)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 8px 25px rgba(6, 182, 212, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0) scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(6, 182, 212, 0.3)';
                        }}
                      >
                        🛒 Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          </div>
        </div>
      </div>
        </>
      )}

      <Cart
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
