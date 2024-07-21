import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="abc">
      <div className="heading">
        <h2>krypto<span className='link'>Link</span></h2>
      </div>

      <div className="section">
        <div className="login">
          <h1>Log in to krypto<span className='link'>Link</span></h1>
        </div>
        <div className="options">
          <div className="google">
            <div>
              <FaGoogle />
            </div>
            <div>
              Continue with google
            </div>
          </div>
          <div className="google">
            <div >
              <MdEmail />
            </div>
            <div>
              Continue with E-mail
            </div>
          </div>
          <div className="google">
            <div>
              <FaFacebook />
            </div>
            <div>
              Continue with Facebook
            </div>
          </div>
          <div className="google">
            <div>
              <FaPhoneAlt />
            </div>
            <div>
              Continue with Phone No
            </div>
          </div>
          <br />
          <br />
          <div className="footer">
            <div className="line"></div>
          </div>
          <br />
          <br />
          <br />
          <div className="form">
            <form onSubmit={handleLogin}>
              <span style={{ fontSize: '0.8rem' }}>Email or Username</span>
              <div>
                <input className="email" type="text" name="email" id="101" placeholder="Email or Username" />
              </div>
              <span style={{ fontSize: '0.8rem' }}>Password</span>
              <div>
                <input className="pass" type="password" name="password" id="102" placeholder="Password" />
              </div>
              <br />
              <button className="b" style={{ color: 'black' }} type="submit">
                Log in
              </button>
            </form>
          </div>
          <div className="forgot">
            <a href="" className="forgot-txt">Forgot Your Password?</a>
          </div>
          <div className="footer">
            <div className="line"></div>
          </div>
          <div className="account">
            <span>Don't have an account?</span>
            <a href="" className="a-txt">Sign up for kryptoLink</a>
          </div>
        </div>
      </div>

      <div className="copyrightClaim">
        <p className="txt">This site is protected by reCAPTCHA and the Google <u>Privacy Policy</u> and <u>Terms of Service</u> apply.</p>
      </div>
    </div>
  );
};

export default Login;
