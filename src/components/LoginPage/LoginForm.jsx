import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { styles } from '../../styles';
import { TextInput, Button } from '../Shared';
import { Eye, EyeOff } from 'lucide-react'
import firebase from '../../firebaseConfig';

const LoginForm = (props) => {
 // const [isLoading, setIsLoading] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const navigateTo = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // Get the values entered by the user
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      
      // Call the Firebase authentication method to authenticate the user
      await firebase.auth().signInWithEmailAndPassword(email, password);
      
      // Redirect to the desired page after successful login
      navigateTo('/beta');
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle any errors or display error messages to the user
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
          type={isPasswordVisible ? "text" : "password"}
        required
        />
        <button
        onClick={(e) => {
        e.preventDefault();
        setPasswordVisible(prevState => !prevState)}}
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
      >
          { isPasswordVisible ? <Eye /> : <EyeOff /> }
      </button>
      </div>
      </div>
      <Button type="submit" disabled={props.isLoading} primary>
      {props.isLoading ? "Logging in..." : "Log in"}
      </Button>
    </form>
  )
}

export default LoginForm