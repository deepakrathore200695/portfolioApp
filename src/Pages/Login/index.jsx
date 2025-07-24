import React from 'react';
import FormFildArea from '../../Components/Hook-form/useRefCommon';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    const users = JSON.parse(localStorage.getItem('userData')) || [];

    if (users.length === 0) {
      alert("No user found. Please sign up first.");
      return;
    }

    const matchingUser = users.find(
      user => user.email === formData.email && user.password === formData.password
    );

    if (matchingUser) {
      alert("Login successful!");
      navigate('/');
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <FormFildArea fields={['email', 'password']} onSubmit={handleLogin}/>
    </div>
  );
};

export default Login;
