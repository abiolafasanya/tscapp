import React, { useState } from 'react';
import Card from '../components/utility/Card';
import Container from './../components/utility/Container';
import Layout from '../components/layout/Index';
import Axios from '../api/axios';
import { useRouter } from 'next/router';
import Alert from '../components/utility/Alert';

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  async function handleRegistration(e: any) {
    e.preventDefault();
    console.log('Registration in progress...');
    console.log({
      username,
      email,
      password,
      confirmPassword,
    });
    let body = { username, email, password, confirmPassword };

    const { data, status, statusText } = await Axios.post(
      '/api/auth/signup',
      body
    );

    setPassword('');
    setConfirmPassword('');
    if (status === 201) {
      setSuccess(true);
      setError(false);
      setMessage(data.message);
      setUsername('');
      setEmail('');

      setTimeout(() => {
        router.push('/login');
      }, 5000);
    } else {
      setSuccess(false);
      setError(true);
      setMessage(data.message);
    }
    console.log(data, status, statusText);
  }

  return (
    <Layout>
      <Container>
        <Card className="border my-16 mx-auto rounded">
          <div>
            <h1 className="text-2xl font-semibold text-center">Registration</h1>
            {success && (
              <Alert className="bg-green-300 border-green-500 text-green-800">
                <p className="py-2 font-semibold">{message}</p>
              </Alert>
            )}
            {error && (
              <Alert className="bg-red-300 border-red-500 text-red-800">
                <p className="py-2 font-semibold">{message}</p>
              </Alert>
            )}
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
