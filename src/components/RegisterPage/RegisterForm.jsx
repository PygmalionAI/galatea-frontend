import { Eye, EyeOff } from 'lucide-react'
import React, { useState, useEffect } from 'react';
import { TextInput, Button, Alert } from '../Shared';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Popup } from 'reactjs-popup';
import firebase from '../../firebaseConfig';
import { signUp } from '../../apis/api';
import { getAuth } from 'firebase/auth';

const RegisterForm = (props) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  const [isRegistrationPending, setisRegistrationPending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [hasPopupBeenOpened, setHasPopupBeenOpened] = useState(false);
  const auth = getAuth();
  const navigateTo = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setisRegistrationPending(true);
    if (!hasPopupBeenOpened) {
      toast.loading("Please accept the terms of registration.");
      return;
    }
    else {
      const id = toast.loading("Signing you up...");
      const username = evt.target.username.value;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      const conpass = evt.target.confirmpassword.value;
      if (password !== conpass) {
        setErrorMessage("Passwords do not match.");
        return;
      }
      try {
      // Call the signUp function and pass the required information
      await signUp(email, username, password);
      // Update success message after form data is handled successfully
      console.log(`Successfully registered user: ${username}`);
      toast.update(id, { render: `Welcome, ${username}! Registration successful.`, type: "success", isLoading: false });
      setSignedUp(true);
      setisRegistrationPending(false);
     } catch (error) {
        toast.dismiss(id);
       // Handle any errors that might occur during the sign-up process
       console.log(`There was an error while signing up: ${error}`);
       setErrorMessage("Registration failed. Please make sure that your credentials are not already in use.");
     }
  }};

  useEffect(() => {
    if (signedUp) {
      navigateTo('/login');
    }
  })

    const handlePopupClose = () => {
      setShowPopup(false);
      setHasPopupBeenOpened(true);
    }

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
        <Popup onOpen={() => setShowPopup(true)} position="center" trigger={
        <div>
          <Button type="submit">
            Sign Up
          </Button>
        </div>
      } modal>
        <div>Please click accept below.</div>
        <button className="close" onClick={(e) => {handlePopupClose(e)}}>I Accept</button>
      </Popup>

        {errorMessage && (
          <Alert schema="error" title="Registration Failed">
            {errorMessage}
          </Alert>
        )}
        {/* {successMessage && (
          <Alert schema="success" title="Registration Successful">
            {successMessage}
          </Alert>
        )} */}
      </div>
    </form>
  );
};

export default RegisterForm;
