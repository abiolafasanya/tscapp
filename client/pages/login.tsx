import React, { useState, FC } from 'react';
import Card from '../components/utility/Card';
import Container from '../components/utility/Container';
import Layout from '../components/layout/Index';
import { Iprops } from './../utility/interfaces';
import Alert from '../components/utility/Alert';
import { useRouter } from 'next/router';

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
    let data = { email, password };

    let req = await fetch('http://localhost:5000/api/auth', {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });

    setEmail('');
    setPassword('');
    let res = await req.json();
    if (res.success) {
      setSuccess(true);
      setMessage(res.message);
      setTimeout(() => {
        setSuccess(false);
        router.push('/dashboard');
      }, 5000);
    } else {
      setError(true);
      setMessage(res.message || 'An error occurred');
    }
    console.log(res);
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
