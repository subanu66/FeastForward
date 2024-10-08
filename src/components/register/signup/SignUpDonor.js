// import { useState } from "react";
// import { Link, useNavigate} from "react-router-dom";

// const PasswordErrorMessage = () => {
//   return (
//     <p style={{ color: 'red', fontSize: '0.8em' }}>
//       Password should have at least 8 characters
//     </p>
//   );
// };

// function SignUpDonor() {
//   const [donorName, setDonorName] = useState("");
//   const [email, setEmail] = useState("");
//   const [organization, setOrganization] = useState("");
//   const [donationType, setDonationType] = useState("");
//   const [password, setPassword] = useState({
//     value: "",
//     isTouched: false,
//   });
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const getIsFormValid = () => {
//     return (
//       donorName &&
//       email &&
//       donationType &&
//       password.value.length >= 8 &&
//       password.value === confirmPassword &&
//       address &&
//       phone.length === 10
//     );
//   };

  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const payload = {
//       donorName,
//       donationType,
//       email,
//       password: password.value, // Ensure the correct structure
//       address,
//       phone
//     };
  
//     try {
//       const response = await fetch('http://localhost:8080/api/users/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });
  
//       if (response.ok) {
//         console.log('Donor registered successfully!');
//         navigate("/");
//       } else {
//         const data = await response.json();
//         setError(data.message || 'Registration failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setError('An error occurred');
//     }
//   };
  

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <fieldset style={styles.fieldset}>
//           <h2 style={styles.heading}>Food Donor Registration</h2>
//           <div style={styles.gridContainer}>
//             <div style={styles.leftSide}>
//               <div style={styles.field}>
//                 <label style={styles.label}>
//                   Donor Name <sup style={styles.required}>*</sup>
//                 </label>
//                 <input
//                   value={donorName}
//                   onChange={(e) => setDonorName(e.target.value)}
//                   placeholder="Donor Name"
//                   style={styles.input}
//                 />
//               </div>
//               <div style={styles.field}>
//                 <label style={styles.label}>
//                   Email Address <sup style={styles.required}>*</sup>
//                 </label>
//                 <input
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email Address"
//                   style={styles.input}
//                   type="email"
//                 />
//               </div>
//               <div style={styles.field}>
//                 <label style={styles.label}>
//                   Organization Name (optional)
//                 </label>
//                 <input
//                   value={organization}
//                   onChange={(e) => setOrganization(e.target.value)}
//                   placeholder="Organization Name"
//                   style={styles.input}
//                 />
//               </div>
//               <div style={styles.field}>
//                 <label style={styles.label}>
//                   Type of Donation <sup style={styles.required}>*</sup>
//                 </label>
//                 <select
//                   value={donationType}
//                   onChange={(e) => setDonationType(e.target.value)}
//                   style={styles.select}
//                 >
//                   <option value="">Select Donation Type</option>
//                   <option value="perishable">Perishable</option>
//                   <option value="non-perishable">Non-Perishable</option>
//                   <option value="cooked">Cooked Food</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//             </div>
//             <div style={styles.rightSide}>
//               <div style={styles.field}>
//                 <label style={styles.label}>
//                   Password <sup style={styles.required}>*</sup>
//                 </label>
//                 <input
//                   value={password.value}
//                   type="password"
//                   onChange={(e) => setPassword({ ...password, value: e.target.value })}
//                   onBlur={() => setPassword({ ...password, isTouched: true })}
//                   placeholder="Password"
//                   style={styles.input}
//                 />
//                 {password.isTouched && password.value.length < 8 && (
//                   <PasswordErrorMessage />
//                 )}
//               </div>
//               <div style={styles.field}>
//                 <label style={styles.label}>
//                   Confirm Password <sup style={styles.required}>*</sup>
//                 </label>
//                 <input
//                   value={confirmPassword}
//                   type="password"
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   placeholder="Confirm Password"
//                   style={styles.input}
//                 />
//               </div>
//               <div style={styles.field}>
//                 <label style={styles.label}>
//                   Address <sup style={styles.required}>*</sup>
//                 </label>
//                 <input
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   placeholder="Address"
//                   style={styles.input}
//                 />
//               </div>
//               <div style={styles.field}>
//                 <label style={styles.label}>
//                   Phone Number <sup style={styles.required}>*</sup>
//                 </label>
//                 <input
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   placeholder="Phone Number"
//                   style={styles.input}
//                   type="tel"
//                 />
//               </div>
//             </div>
//           </div>
//           <Link to="/">
//           <button
//             type="submit"
//             disabled={!getIsFormValid()}
//             style={styles.button}>
//             Register
//           </button>
//           </Link>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f0f0f0',
//   },
//   form: {
//     backgroundColor: 'white',
//     padding: '30px',
//     borderRadius: '15px',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//     width: '800px',
//   },
//   fieldset: {
//     border: 'none',
//   },
//   heading: {
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   gridContainer: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '20px',
//   },
//   leftSide: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   rightSide: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   field: {
//     marginBottom: '15px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '5px',
//     fontWeight: 'bold',
//   },
//   required: {
//     color: 'red',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     boxSizing: 'border-box',
//   },
//   select: {
//     width: '100%',
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     boxSizing: 'border-box',
//   },
//   button: {
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

// export default SignUpDonor;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordErrorMessage = () => {
  return (
    <p style={{ color: 'red', fontSize: '0.8em' }}>
      Password should have at least 8 characters
    </p>
  );
};
const SignUpDonor = () => {
  const [ donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [organization, setOrganization] = useState('');
  const [donationType, setDonationType] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);

  const navigate = useNavigate();

  
  const clearForm = () => {
    setDonorName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setConfirmPassword("");
    setOrganization("");
    setDonationType("");
    setAddress("");
    setPhone("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear any previous errors
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const payload = {
      name:donorName,
      email:email,
      password:password,
      org_name:organization,
      orgtype:donationType,
      address:address,
      phn:phone
    };

    try {
      const response = await fetch('http://localhost:8080/api/donors/registerdonor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        
        console.log('Donor registered successfully!');
        alert("Account created!");
        navigate('/donormain');
      } else {
        const data = await response.json();
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred');
    }
  };

  const getIsFormValid = () => {
    return (
      donorName &&
      email &&
      password &&
      confirmPassword &&
      donationType &&
      address &&
      phone &&
      password === confirmPassword
    );
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <fieldset style={styles.fieldset}>
          <h2 style={styles.heading}>Food Donor Registration</h2>
          <div style={styles.gridContainer}>
            <div style={styles.leftSide}>
              <div style={styles.field}>
                <label style={styles.label}>
                  Donor Name <sup style={styles.required}>*</sup>
                </label>
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Donor Name"
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>
                  Email Address <sup style={styles.required}>*</sup>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>
                  Organization Name (optional)
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Organization Name"
                  style={styles.input}
                />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>
                  Type of Donation <sup style={styles.required}>*</sup>
                </label>
                <select
                  value={donationType}
                  onChange={(e) => setDonationType(e.target.value)}
                  style={styles.select}
                  required
                >
                  <option value="">Select Donation Type</option>
                  <option value="perishable">Perishable</option>
                  <option value="non-perishable">Non-Perishable</option>
                  <option value="cooked">Cooked Food</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div style={styles.rightSide}>
              <div style={styles.field}>
                <label style={styles.label}>
                  Password <sup style={styles.required}>*</sup>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordTouched(true);
                  }}
                  placeholder="Password"
                  style={styles.input}
                  required
                />
                   {passwordTouched && password.length < 8 && (
                  <PasswordErrorMessage />
                )}
              </div>
              <div style={styles.field}>
                <label style={styles.label}>
                  Confirm Password <sup style={styles.required}>*</sup>
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>
                  Address <sup style={styles.required}>*</sup>
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>
                  Phone Number <sup style={styles.required}>*</sup>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  style={styles.input}
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={!getIsFormValid()}
            style={styles.button}
          >
            Register
          </button>
          {error && <p style={styles.error}>{error}</p>}
        </fieldset>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: ' linear-gradient(to top, #fddb92 0%, #d1fdff 100%)',
    backgroundColor: '#f0f0f0',
  },
  form: {
    backgroundColor: '#F8F4E1',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    width: '800px',
  },
  fieldset: {
    border: 'none',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  leftSide: {
    display: 'flex',
    flexDirection: 'column',
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  required: {
    color: 'red',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#543310',
    color: '#F8F4E1',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: '10px',
  },
};

export default SignUpDonor;
