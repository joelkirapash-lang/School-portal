import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    navigate('/dashboard');
  }

  return (
    <div>

      <h1>School Portal Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type='submit'>
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;