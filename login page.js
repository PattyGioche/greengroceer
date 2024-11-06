import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState('email');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState('');

  return (
    <div className="login-container" style={{
      backgroundColor: '#0a0a0a',
      color: '#39FF14',
      boxShadow: '0 0 20px #39FF14',
      padding: '2rem',
      borderRadius: '10px',
      maxWidth: '500px',
      margin: '50px auto'
    }}>
      <h1 style={{
        textAlign: 'center',
        textShadow: '0 0 10px #39FF14',
        fontSize: '2.5rem',
        marginBottom: '2rem',
        fontFamily: 'Megalon, sans-serif'
      }}>Welcome to Mama Mboga</h1>
      
      <div className="login-method-toggle" style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        fontFamily: 'Megalon, sans-serif'
      }}>
        <button
          style={{
            flex: 1,
            padding: '0.8rem',
            backgroundColor: loginMethod === 'email' ? '#39FF14' : 'transparent',
            color: loginMethod === 'email' ? '#000' : '#39FF14',
            border: '2px solid #39FF14',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textShadow: loginMethod === 'email' ? 'none' : '0 0 5px #39FF14',
            fontFamily: 'Megalon, sans-serif'
          }}
          onClick={() => setLoginMethod('email')}
        >
          Email
        </button>
        <button
          style={{
            flex: 1,
            padding: '0.8rem',
            backgroundColor: loginMethod === 'phone' ? '#39FF14' : 'transparent',
            color: loginMethod === 'phone' ? '#000' : '#39FF14',
            border: '2px solid #39FF14',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textShadow: loginMethod === 'phone' ? 'none' : '0 0 5px #39FF14',
            fontFamily: 'Megalon, sans-serif'
          }}
          onClick={() => setLoginMethod('phone')}
        >
          Phone
        </button>
      </div>

      <form onSubmit={handleLogin} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.5rem',
        fontFamily: 'Megalon, sans-serif' 
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '1.1rem' }}>
            {loginMethod === 'email' ? 'Email' : 'Phone Number'}:
          </label>
          <input
            type={loginMethod === 'email' ? 'email' : 'tel'}
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder={loginMethod === 'email' ? 'Enter email' : 'Enter phone number'}
            required
            style={{
              padding: '0.8rem',
              backgroundColor: 'transparent',
              border: '2px solid #39FF14',
              borderRadius: '5px',
              color: '#39FF14',
              outline: 'none',
              fontFamily: 'Megalon, sans-serif'
            }}
          />
        </div>

        {!showOTP && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '1.1rem' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              style={{
                padding: '0.8rem',
                backgroundColor: 'transparent',
                border: '2px solid #39FF14',
                borderRadius: '5px',
                color: '#39FF14',
                outline: 'none',
                fontFamily: 'Megalon, sans-serif'
              }}
            />
          </div>
        )}

        {showOTP && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '1.1rem' }}>Enter OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              placeholder="Enter OTP"
              required
              style={{
                padding: '0.8rem',
                backgroundColor: 'transparent',
                border: '2px solid #39FF14',
                borderRadius: '5px',
                color: '#39FF14',
                outline: 'none',
                fontFamily: 'Megalon, sans-serif'
              }}
            />
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <button
            type="submit"
            style={{
              padding: '1rem',
              backgroundColor: '#39FF14',
              color: '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 10px #39FF14',
              fontFamily: 'Megalon, sans-serif'
            }}
          >
            {showOTP ? 'Verify OTP' : 'Login'}
          </button>
          {!showOTP && (
            <button
              type="button"
              onClick={sendOTP}
              style={{
                padding: '1rem',
                backgroundColor: 'transparent',
                color: '#39FF14',
                border: '2px solid #39FF14',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                textShadow: '0 0 5px #39FF14',
                fontFamily: 'Megalon, sans-serif'
              }}
            >
              Login with OTP
            </button>
          )}
        </div>
      </form>

      <div style={{
        textAlign: 'center',
        marginTop: '2rem',
        fontSize: '1.1rem',
        fontFamily: 'Megalon, sans-serif'
      }}>
        <p>
          New to Mama Mboga?{' '}
          <span
            onClick={() => navigate('/signup')}
            style={{
              color: '#39FF14',
              textDecoration: 'underline',
              cursor: 'pointer',
              textShadow: '0 0 5px #39FF14'
            }}
          >
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
};

// API simulation functions
const checkUserExists = async (identifier) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 1000);
  });
};

const validateCredentials = async (identifier, password) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 1000);
  });
};

const requestOTP = async (identifier, method) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
};

const verifyOTP = async (identifier, otp) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 1000);
  });
};

export default LoginPage;


