import React, { useState, useEffect, FormEvent } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { TextInput, Button, Alert, AlertType } from '../Shared'; // Assuming the AlertType is an enum for different types of alerts.
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../apis/api';

enum Schema {
  Error = 'error',
  Success = 'success',
}

interface LoginFormProps {
  username: String,
  password: String,
  email: String,
}

interface ApiError {
  response?: {
    data?: {
      error?: string;
    };
  };
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const navigateTo = useNavigate();

  // Check if the user is signed in 
  useEffect(() => {
    if (signedIn) {
      setTimeout(() => {
        navigateTo('/beta');
      }, 3000);
    }
  }, [signedIn]);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const email = evt.currentTarget.email.value;
    const password = evt.currentTarget.password.value;

    try {
      const loginResponse: LoginResponse = await logIn(email, password);
      setSignedIn(true);
      setSuccessMessage('You have been logged in successfully. You will be redirected shortly.');
    } catch (error) {
      // Get error from api
      const loginError = (error as ApiError).response?.data?.error as String || 'Unknown error';
      setSignedIn(false);
      console.log(`There was an error while logging in: ${error}`);
      setErrorMessage('Please make sure your credentials are correct.');
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
      <Button type="submit" schema="primary">
        Log In
      </Button>
      {errorMessage && (
        <Alert schema={Schema.Error as AlertType} title="Failed to Log In.">
          {errorMessage}
        </Alert>
      )}
      {successMessage && (
        <Alert schema={Schema.Success as AlertType} title="Logged In">
          {successMessage}
        </Alert>
      )}
    </form>
  );
};

export default LoginForm;
