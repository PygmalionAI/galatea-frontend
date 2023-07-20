import { Eye, EyeOff } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { TextInput, Button, Alert } from '../Shared';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../apis/api';

const LoginForm = (props) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [signedIn, setSignedIn] = useState(false);
  const navigateTo = useNavigate();

  // Check if the user is signed in 
  useEffect(() => {
    if (signedIn) {
      setTimeout(() => {
        navigateTo('/beta');
      }, 3000);
    }
  }, [signedIn]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    try {
      await logIn(email, password);
      setSignedIn(true);
      setSuccessMessage('You have been logged in successfully. You will be redirected shortly.');
    } catch (error) {
      // Get error from api
      const loginError = error.response.data.error;
      setSignedIn(false);
      console.log(`There was an error while logging in: ${error}`);
      setErrorMessage(`Please make sure your credentials are correct.`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <TextInput fieldName="email" placeholder="Email" type="email" required />
        <div className="relative">
          <TextInput
            fieldName="password"
            placeholder="Password"
            type={isPasswordVisible ? 'text' : 'password'}
            required
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setPasswordVisible((prevState) => !prevState);
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            {isPasswordVisible ? <Eye /> : <EyeOff />}
          </button>
        </div>
      </div>
      <Button type="submit" primary>
        Log In
      </Button>
      {errorMessage && (
        <Alert schema="error" title="Failed to Log In.">
          {errorMessage}
        </Alert>
      )}
      {successMessage && (
          <Alert schema="success" title="Logged In">
            {successMessage}
          </Alert>
        )}
    </form>
  );
};

export default LoginForm;
