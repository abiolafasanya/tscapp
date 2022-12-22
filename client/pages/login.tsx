import React, { useState, FC } from 'react';
import Card from '../components/utility/Card';
import Container from '../components/utility/Container';
import Layout from '../components/layout/Index';
import { Iprops } from './../utility/interfaces';
import Alert from '../components/utility/Alert';
import { useRouter } from 'next/router';
import Axios from '../api/axios';
import { setLocalStorage } from './../utility/storage';

const Login: FC<Iprops> = (props) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  async function handleLogin(e: any) {
    e.preventDefault();
    console.log('Login in progress...');
    console.log({ email, password });
    let body = { email, password };

    const { data, status, statusText } = await Axios.post('/api/auth', body);
    console.log(data);
    setEmail('');
    setPassword('');
    if (status === 200) {
      setSuccess(true);
      setError(false);
      setMessage(data.message);
      localStorage.removeItem('accessToken');
      localStorage.setItem('accessToken', data.accessToken);
      console.log(localStorage.getItem('accessToken'));
      setTimeout(() => {
        setSuccess(false);
        router.push('/dashboard');
      }, 5000);
    } else {
      setSuccess(false);
      setError(true);
      setMessage(data.message || 'An error occurred');
      console.log(data, status, statusText);
    }
  }

  return (
    <Layout>
      <Container className="p-1">
        <Card className="border my-16 mx-auto rounded">
          <div>
            <h1 className="text-2xl font-semibold text-center">Login</h1>
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
            <form onSubmit={handleLogin}>
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

export default Login;
