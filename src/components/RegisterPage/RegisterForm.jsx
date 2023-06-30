import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'
import { TextInput, Button, Alert } from '../Shared';
import firebase from '../../firebaseConfig';
import 'firebase/compat/firestore'

const RegisterForm = (props) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigateTo = useNavigate();
  const submitButtonRef = useRef();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const username = evt.target.username.value;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      const confirmPassword = evt.target.confirmpassword.value;

      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }

      // Check if a user with the given username already exists
      const usernameQuerySnapshot = await firebase.firestore().collection('users').where('username', '==', username).get();
      if (!usernameQuerySnapshot.empty) {
        setErrorMessage("A user with that username already exists.");
        return;
      }

      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      await user.updateProfile({
        displayName: username
      });

      navigateTo("/login");
    } catch (error) {
      console.error('Error creating user account:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <TextInput fieldName="username" placeholder="Username" type="text" required />
        <TextInput fieldName="email" placeholder="Email" type="email" required />
        <div className="relative">
          <TextInput
            fieldName="password"
            placeholder="Password"
            type={isPasswordVisible ? "text" : "password"}
            required
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setPasswordVisible(prevState => !prevState);
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            {isPasswordVisible ? <Eye /> : <EyeOff />}
          </button>
        </div>

        <div className="relative">
          <TextInput
            fieldName="confirmpassword"
            placeholder="Confirm Password"
            type={isConfirmPasswordVisible ? "text" : "password"}
            required
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                submitButtonRef.current.click();
              }
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setConfirmPasswordVisible(prevState => !prevState);
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            {isConfirmPasswordVisible ? <Eye /> : <EyeOff />}
          </button>
        </div>
        <Button type="submit">
          Sign Up
        </Button>
        {errorMessage && (
          <Alert schema="error" title="Registration Failed">
            {errorMessage}
          </Alert>
        )}
      </div>
    </form>
  );
};

export default RegisterForm;
