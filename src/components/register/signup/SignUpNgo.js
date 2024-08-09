
    import { useState } from "react";
    import { Link, useNavigate } from "react-router-dom";
    
    const PasswordErrorMessage = () => {
      return (
        <p style={{ color: 'red', fontSize: '0.8em' }}>
          Password should have at least 8 characters
        </p>
      );
    };
    
    function SignUpNgo() {
      const [ngoName, setNgoName] = useState("");
      const [ngoEmail, setNgoEmail] = useState("");
      const [registrationNumber, setRegistrationNumber] = useState("");
      const [ngoType, setNgoType] = useState("");
      const [password, setPassword] = useState({
        value: "",
        isTouched: false,
      });
      const [confirmPassword, setConfirmPassword] = useState("");
      const [address, setAddress] = useState("");
      const [phone, setPhone] = useState("");
      const [error, setError] = useState('');
    
      const navigate = useNavigate();
    
      const getIsFormValid = () => {
        return (
          ngoName &&
          ngoEmail &&
          registrationNumber &&
          ngoType &&
          password.value.length >= 8 &&
          password.value === confirmPassword &&
          address &&
          phone.length === 10
        );
      };
      const clearForm = () => {
        setNgoName("");
        setNgoEmail("");
        setPassword({ value: "", isTouched: false });
        setConfirmPassword("");
        setAddress("");
        setPhone("");
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        
    
        const payload = {
          org_name: ngoName,
          email: ngoEmail,
          reg_no: registrationNumber,
          type: ngoType,
          password: password.value, 
          address,
          phn: phone
        };
    
        try {
          const response = await fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
    
          if (response.ok) {
            console.log('NGO registered successfully!');
            alert("Account created!");
            navigate("/");
          } else {
            const data = await response.json();
            setError(data.message || 'Registration failed');
          }
        } catch (error) {
          console.error('Error:', error);
          setError('An error occurred');
        }
      };
    
      return (
        <div style={styles.container}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <fieldset style={styles.fieldset}>
              <h2 style={styles.heading}>NGO Registration</h2>
              <div style={styles.formContent}>
                <div style={{ ...styles.field, ...styles.adjustedField }}>
                  <label style={{ ...styles.label, ...styles.ngoNameLabel }}>
                    NGO Name <sup style={styles.required}>*</sup>
                  </label>
                  <input
                    value={ngoName}
                    onChange={(e) => setNgoName(e.target.value)}
                    placeholder="NGO Name"
                    style={{ ...styles.input, ...styles.ngol }}
                  />
                </div>
                <div style={styles.field}>
                  <label style={styles.label}>
                    Email Address <sup style={styles.required}>*</sup>
                  </label>
                  <input
                    value={ngoEmail}
                    onChange={(e) => setNgoEmail(e.target.value)}
                    placeholder="Email Address"
                    style={styles.input}
                    type="email"
                  />
                </div>
                <div style={styles.field}>
                  <label style={styles.label}>
                    Registration Number <sup style={styles.required}>*</sup>
                  </label>
                  <input
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    placeholder="Registration Number"
                    style={styles.input}
                  />
                </div>
                <div style={styles.field}>
                  <label style={styles.label}>
                    Type of NGO <sup style={styles.required}>*</sup>
                  </label>
                  <select
                    value={ngoType}
                    onChange={(e) => setNgoType(e.target.value)}
                    style={styles.select}
                  >
                    <option value="">Select NGO Type</option>
                    <option value="educational">Educational</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="environmental">Environmental</option>
                    <option value="social">Social</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={styles.field}>
                  <label style={styles.label}>
                    Password <sup style={styles.required}>*</sup>
                  </label>
                  <input
                    value={password.value}
                    type="password"
                    onChange={(e) => setPassword({ ...password, value: e.target.value })}
                    onBlur={() => setPassword({ ...password, isTouched: true })}
                    placeholder="Password"
                    style={styles.input}
                  />
                  {password.isTouched && password.value.length < 8 && (
                    <PasswordErrorMessage />
                  )}
                </div>
                <div style={styles.field}>
                  <label style={styles.label}>
                    Confirm Password <sup style={styles.required}>*</sup>
                  </label>
                  <input
                    value={confirmPassword}
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    style={styles.input}
                  />
                </div>
                <div style={styles.field}>
                  <label style={styles.label}>
                    Address <sup style={styles.required}>*</sup>
                  </label>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    style={styles.input}
                  />
                </div>
                <div style={styles.field}>
                  <label style={styles.label}>
                    Phone Number <sup style={styles.required}>*</sup>
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    style={styles.input}
                    type="tel"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={!getIsFormValid()}
                style={styles.button}
              >
                Register
              </button>
            </fieldset>
          </form>
        </div>
      );
    }
    
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
        borderRadius: '10px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        width: '700px',
      },
      fieldset: {
        border: 'none',
      },
      heading: {
        textAlign: 'center',
        marginBottom: '20px',
      },
      formContent: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
      },
      field: {
        marginBottom: '15px',
      },
      adjustedField: {
        marginTop: '10px',
      },
      label: {
        display: 'block',
        marginBottom: '0px',
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
        marginTop: '20px',
      },
    };
    
    export default SignUpNgo;
    