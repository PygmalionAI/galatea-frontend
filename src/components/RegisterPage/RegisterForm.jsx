import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'
import { TextInput, Button } from '../Shared';
import firebase from '../../firebaseConfig';

const RegisterForm = (props) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const navigateTo = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // Get the values entered by the user
      const username = evt.target.username.value;
      const email = evt.target.email.value;
      const password = evt.target.password.value;

      // Call the Firebase authentication method to create a new user
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Update the user's display name with the username
      await user.updateProfile({
        displayName: username
      });

      navigateTo("/login");

      // You can add further logic or redirect to a different page upon successful sign-up
      console.log('User account created successfully!');
    } catch (error) {
      console.error('Error creating user account:', error);
      // Handle any errors or display error messages to the user
    }
  };

  const submitButtonRef = useRef();

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
      </div>
    </form>
  );
};

export default RegisterForm;
