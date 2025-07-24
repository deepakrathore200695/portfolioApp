import React from 'react';
import FormFildArea from '../../Components/Hook-form/useRefCommon';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (formData) => {
    // ✅ 1. Basic validation
    const { email, password, firstName, lastName, phoneNumber } = formData;

    if (!email || !password || !firstName || !lastName || !phoneNumber) {
      alert("All fields are required!");
      return;
    }

    // ✅ 2. Get existing users (array)
    const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];

    // ✅ 3. Check for duplicate email
    const userExists = existingUsers.some(user => user.email === email);
    if (userExists) {
      alert("User already exists with this email.");
      return;
    }

    // ✅ 4. Push new user and save
    existingUsers.push(formData);
    localStorage.setItem('userData', JSON.stringify(existingUsers));

    alert("Signup successful!");
    navigate('/login');
  };
  return (
    <div>
      <h1>Signup Page</h1>
      <FormFildArea
        fields={['firstName', 'lastName', 'email', 'phoneNumber', 'password']}
        onSubmit={handleSignup}
      />
    </div>
  );
};

export default Signup;
