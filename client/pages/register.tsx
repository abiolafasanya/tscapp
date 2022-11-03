import React, { useState } from 'react';
import Card from '../components/utility/Card';
import Container from './../components/utility/Container';
import Layout from '../components/layout/Index';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleRegistration(e: any) {
    e.preventDefault();
    console.log('Registration in progress...');
    console.log({
      username,
      email,
      password,
      confirmPassword,
    });
    let data = { username, email, password, confirmPassword };

    let req = await fetch('http://localhost:5000/api/auth/signup', {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    let res = await req.json();
    console.log(res);
  }

  return (
    <Layout>
      <Container>
        <Card className="border my-16 mx-auto rounded">
          <div>
            <h1 className="text-2xl font-semibold text-center">Registration</h1>
            <form onSubmit={handleRegistration}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm_password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button className="btn bg-blue-600 hover:bg-blue-700 text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Card>
      </Container>
    </Layout>
  );
};

export default Register;
