import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticatedUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'admin' && email === 'vishnupriyar.22cse@kongu.edu' && password === 'speed2607') {
      setAuthenticatedUser({ role: 'admin' });
      navigate('/admin');
    } else if (role === 'user' && email && password) {
      setAuthenticatedUser({ role: 'user' });
      navigate('/user');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <div className="heading">Login</div>
      <form className="form" onSubmit={handleLogin}>
        <input 
          required 
          className="input" 
          type="email" 
          name="email" 
          id="email" 
          placeholder="E-mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          required 
          className="input" 
          type="password" 
          name="password" 
          id="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <div className="role-selector">
          <label>
            <input 
              type="radio" 
              name="role" 
              value="user" 
              checked={role === 'user'} 
              onChange={(e) => setRole(e.target.value)} 
            />
            User
          </label>
          <label>
            <input 
              type="radio" 
              name="role" 
              value="admin" 
              checked={role === 'admin'} 
              onChange={(e) => setRole(e.target.value)} 
            />
            Admin
          </label>
        </div>

        <input className="login-button" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
