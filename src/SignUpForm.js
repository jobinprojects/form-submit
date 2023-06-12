import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

import './SignUpForm.css';

const SignUpForm = () => {
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [year, setYear] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      enrollmentNo,
      fullName,
      email,
      mobile,
      year,
      paymentMode,
      amount
    };

    axios.post('https://localhost:7209/api/FeeStatus/students', data)
  .then((response) => {
    // Handle the response
    console.log(response.data);
    // Reset form fields after successful submission
    setEnrollmentNo('');
    setFullName('');
    setEmail('');
    setMobile('');
    setYear('');
    setPaymentMode('');
    setAmount('');
  })
  .catch((error) => {
    // Handle any errors
    console.error('Error:', error);
  });

  
  };

  return (
    <div className="container">
      <div className="top-container">
        {/* ...Logo and title elements... */}
      </div>

      <div className="form-container">
        <div className="custom-nav-container">
          {/* ...Custom navigation menu... */}
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <TextField
              id="enrollmentNo"
              label="Enrollment No"
              variant="outlined"
              value={enrollmentNo}
              onChange={(e) => setEnrollmentNo(e.target.value)}
              fullWidth
              style={{ marginBottom: '20px' }}
              required
            />
            <TextField
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              fullWidth
              style={{ marginBottom: '20px' }}
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              style={{ marginBottom: '20px' }}
            />
            <TextField
              label="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              fullWidth
              style={{ marginBottom: '20px' }}
            />
            <TextField
              select
              label="Select Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              fullWidth
              style={{ marginBottom: '20px' }}
            >
              <MenuItem value="1st year">1st year</MenuItem>
              <MenuItem value="2nd year">2nd year</MenuItem>
              {/* Add more options for other years if needed */}
            </TextField>
            <TextField
              select
              label="Select Payment Mode"
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
              fullWidth
              style={{ marginBottom: '20px' }}
            >
              <MenuItem value="credit card">Credit Card</MenuItem>
              <MenuItem value="debit card">Debit Card</MenuItem>
              <MenuItem value="upi">UPI</MenuItem>
              <MenuItem value="net banking">Net Banking</MenuItem>
              {/* Add more options for other payment modes if needed */}
            </TextField>
            <TextField
              label="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              fullWidth
              style={{ marginBottom: '20px' }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Pay
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
