// import React, { useState, useEffect } from 'react';

// const NGOList = () => {
//   const [ngos, setNgos] = useState([]);

//   useEffect(() => {
//     // Fetch NGO data
//     const fetchNgos = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/users/all');
//         const data = await response.json();
//         setNgos(data);
//       } catch (error) {
//         console.error('Error fetching NGO data:', error);
//       }
//     };

//     fetchNgos();
//   }, []);

//   return (
//     <div>
//       <h2>NGOs List</h2>
//       <ul>
//         {ngos.map((ngo) => (
//           <li key={ngo.id}>
//             <p>Name: {ngo.orgName}</p>
//             <p>Email: {ngo.email}</p>
//             <p>Registration No: {ngo.reg_no}</p>
//             <p>Address: {ngo.address}</p>
//             <p>Type: {ngo.type}</p>
//             <p>Phone: {ngo.phn}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // export default NGOList;
// import React, { useState, useEffect } from 'react';
// import './NGOList.css'; // Import the CSS file

// const NGOList = () => {
//   const [ngos, setNgos] = useState([]);

//   useEffect(() => {
//     const fetchNgos = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/users/all');
//         const data = await response.json();
//         setNgos(data);
//       } catch (error) {
//         console.error('Error fetching NGO data:', error);
//       }
//     };

//     fetchNgos();
//   }, []);

//   const handleEdit = (id) => {
//     console.log('Edit NGO with ID:', id);
//     // Handle edit logic here
//   };

//   const handleDelete = (id) => {
//     console.log('Delete NGO with ID:', id);
//     // Handle delete logic here
//   };

//   return (
//     <div className="ngo-list-container">
//       <h2 className="ngo-list-title">NGOs List</h2>
//       <ul className="ngo-list">
//         {ngos.map((ngo) => (
//           <li key={ngo.id} className="ngo-list-item">
//             <div className="ngo-details">
//               <p><strong>Name:</strong> {ngo.orgName}</p>
//               <p><strong>Email:</strong> {ngo.email}</p>
//               <p><strong>Registration No:</strong> {ngo.reg_no}</p>
//               <p><strong>Address:</strong> {ngo.address}</p>
//               <p><strong>Type:</strong> {ngo.type}</p>
//               <p><strong>Phone:</strong> {ngo.phn}</p>
//             </div>
//             <div className="ngo-actions">
//               <button className="edit-btn" onClick={() => handleEdit(ngo.id)}>Edit</button>
//               <button className="delete-btn" onClick={() => handleDelete(ngo.id)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NGOList;


import React, { useState, useEffect } from 'react';
import './NGOList.css'; // Import the CSS file

const NGOList = () => {
  const [ngos, setNgos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterField, setFilterField] = useState(''); // Selected field to filter by
  const [editingNgo, setEditingNgo] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({
    orgName: '',
    email: '',
    reg_no: '',
    address: '',
    type: '',
    phn: '',
  });

  useEffect(() => {
    const fetchNgos = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users/NGOall');
        const data = await response.json();
        setNgos(data);
      } catch (error) {
        console.error('Error fetching NGO data:', error);
      }
    };

    fetchNgos();
  }, []);

  const handleEdit = (ngo) => {
    setEditingNgo(ngo.id);
    setUpdatedDetails({
      orgName: ngo.orgName,
      email: ngo.email,
      reg_no: ngo.reg_no,
      address: ngo.address,
      type: ngo.type,
      phn: ngo.phn,
    });
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDetails),
      });

      if (response.ok) {
        setNgos(ngos.map((ngo) => (ngo.id === id ? { ...ngo, ...updatedDetails } : ngo)));
        setEditingNgo(null);
        alert('NGO details updated successfully!');
      } else {
        console.error('Failed to update NGO');
      }
    } catch (error) {
      console.error('Error updating NGO:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/delete/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setNgos(ngos.filter((ngo) => ngo.id !== id));
        alert('NGO deleted successfully!');
      } else {
        console.error('Failed to delete NGO');
      }
    } catch (error) {
      console.error('Error deleting NGO:', error);
    }
  };

  const filteredNgos = ngos.filter((ngo) => {
    if (!filterField) return true;
    const fieldValue = ngo[filterField]?.toString().toLowerCase();
    return fieldValue && fieldValue.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="ngo-list-container">
      <h2 className="ngo-list-title">NGOs List</h2>

      <div className="filter-container">
        <select
          className="filter-select"
          value={filterField}
          onChange={(e) => setFilterField(e.target.value)}
        >
          <option value="">Select Field to Filter By</option>
          <option value="orgName">Name</option>
          <option value="email">Email</option>
          <option value="reg_no">Registration No</option>
          <option value="address">Address</option>
          <option value="type">Type</option>
          <option value="phn">Phone Number</option>
        </select>

        <input
          type="text"
          className="search-input"
          placeholder={`Search by ${filterField ? filterField : 'any field'}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="ngo-list">
        {filteredNgos.map((ngo) => (
          <li key={ngo.id} className="ngo-list-item">
            {editingNgo === ngo.id ? (
              <div className="ngo-details">
                <input
                  type="text"
                  value={updatedDetails.orgName}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, orgName: e.target.value })}
                />
                <input
                  type="email"
                  value={updatedDetails.email}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, email: e.target.value })}
                />
                <input
                  type="text"
                  value={updatedDetails.reg_no}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, reg_no: e.target.value })}
                />
                <input
                  type="text"
                  value={updatedDetails.address}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, address: e.target.value })}
                />
                <input
                  type="text"
                  value={updatedDetails.type}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, type: e.target.value })}
                />
                <input
                  type="text"
                  value={updatedDetails.phn}
                  onChange={(e) => setUpdatedDetails({ ...updatedDetails, phn: e.target.value })}
                />
                <button onClick={() => handleUpdate(ngo.id)}>Save</button>
                <button onClick={() => setEditingNgo(null)}>Cancel</button>
              </div>
            ) : (
              <div className="ngo-details">
                <p><strong>Name:</strong> {ngo.orgName}</p>
                <p><strong>Email:</strong> {ngo.email}</p>
                <p><strong>Registration No:</strong> {ngo.reg_no}</p>
                <p><strong>Address:</strong> {ngo.address}</p>
                <p><strong>Type:</strong> {ngo.type}</p>
                <p><strong>Phone:</strong> {ngo.phn}</p>
                <div className="ngo-actions">
                  <button className="edit-btn" onClick={() => handleEdit(ngo)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(ngo.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NGOList;
