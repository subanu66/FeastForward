// import React, { useState } from 'react';
// import './LoginPage.css';
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordShown, setPasswordShown] = useState(false);
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setPasswordShown(!passwordShown);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = { email, password };

//     try {
//       const response = await fetch('http://localhost:8080/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         console.log('Login successful!');
//         navigate("/welcome");
//       } else {
//         const data = await response.json();
//         setError(data.message || 'Login failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setError('An error occurred');
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <div className="login-left">
//           <img src="/images/sign/userlg1.jpeg" alt="Login" />
//         </div>
//         <div className="login-right">
//           <h1>Welcome to FeastForward!</h1>
//           <p>Please sign in to your account</p>
          
//           {error && <p style={{ color: 'red' }}>{error}</p>}
          
//           <form onSubmit={handleSubmit}>
//             <div className="login-fields">
//               <div className="input-container">
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="input-container">
//                 <input
//                   type={passwordShown ? "text" : "password"}
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <i
//                   className={`fa ${passwordShown ? "fa-eye" : "fa-eye-slash"} password-toggle`}
//                   onClick={togglePasswordVisibility}
//                 ></i>
//               </div>
//             </div>

//             <div className="login-options">
//               <label>
//                 <input type="checkbox" /> Remember me
//               </label>
//               <a href="/forgot-password">Forgot Password?</a>
//             </div>

//             <button type="submit" className="signin-button">Sign In</button>
//           </form>

//           <p className="signup-text">
//             New to our platform? <a href="/register1">Create account</a>
//           </p>

//           <div className="divider">
//             <hr /> <span>or</span> <hr />
//           </div>

//           <div className='social'>
//             <i className='fab fa-facebook-f icon'></i>
//             <i className='fab fa-instagram icon'></i>
//             <i className='fab fa-twitter icon'></i>
//             <i className='fab fa-youtube icon'></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { email, password };

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        // Save user info to localStorage
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate("/"); // Redirect to home page after successful login
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <img src="/images/sign/userlg1.jpeg" alt="Login" />
        </div>
        <div className="login-right">
          <h1>Welcome to FeastForward!</h1>
          <p>Please sign in to your account</p>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="login-fields">
              <div className="input-container">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-container">
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i
                  className={`fa ${passwordShown ? "fa-eye" : "fa-eye-slash"} password-toggle`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
            </div>

            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="signin-button">Sign In</button>
          </form>

          <p className="signup-text">
            New to our platform? <a href="/register1">Create account</a>
          </p>

          <div className="divider">
            <hr /> <span>or</span> <hr />
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
