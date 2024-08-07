import { useState } from "react";
import { Link } from "react-router-dom";

const PasswordErrorMessage = () => {
  return (
    <p style={{ color: 'red', fontSize: '0.8em' }}>
      Password should have at least 8 characters
    </p>
  );
};

function SignUpVolun() {
  const [name, setName] = useState("");
  const [mailid, setMailid] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [confirmpassword, setConfirmpassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const getIsFormValid = () => {
    return (
      name &&
      mailid &&
      gender &&
      password.value.length >= 8 &&
      password.value === confirmpassword &&
      address &&
      phone.length === 10
    );
  };

  const clearForm = () => {
    setName("");
    setMailid("");
    setGender("");
    setPassword({ value: "", isTouched: false });
    setConfirmpassword("");
    setAddress("");
    setPhone("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <fieldset style={styles.fieldset}>
          <h2 style={styles.heading}>NGO Registration</h2>
          <div style={styles.gridContainer}>
            <div style={styles.leftSide}>
              <div style={styles.field}>
                <label style={styles.label}>
                  Name <sup style={styles.required}>*</sup>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  style={styles.input}
                />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>
                  Email Address <sup style={styles.required}>*</sup>
                </label>
                <input
                  value={mailid}
                  onChange={(e) => setMailid(e.target.value)}
                  placeholder="Email Address"
                  style={styles.input}
                  type="email"
                />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>
                  Gender <sup style={styles.required}>*</sup>
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  style={styles.select}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
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
            <div style={styles.rightSide}>
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
                  value={confirmpassword}
                  type="password"
                  onChange={(e) => setConfirmpassword(e.target.value)}
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
              <Link to="/">
              <button
                type="submit"
                disabled={!getIsFormValid()}
                style={styles.button}>
                Register
              </button> 
              </Link>
            </div>
          </div>
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
    backgroundColor: '#f0f0f0',
  },
  form: {
    backgroundColor: 'white',
    padding: '30px', // Increased padding
    borderRadius: '15px', // Increased border-radius
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Enhanced box shadow
    width: '700px', // Adjusted width to fit both sides
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
    marginTop:'10px'
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
    padding: '10px', // Increased padding
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '10px', // Increased padding
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '12px', // Increased padding
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default SignUpVolun;
