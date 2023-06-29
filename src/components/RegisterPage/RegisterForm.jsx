import React, { useState, useRef } from 'react';
import { styles } from '../../styles';
import { Eye, EyeOff } from 'lucide-react'
import { TextInput, Button } from '../Shared';

const RegisterForm = (props) => {
  const [isLoading, setIsLoading] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Perform any desired logic or actions
  };

  const submitButtonRef = useRef();

  return (
    <form onSubmit={(evt) => props.onSubmit(evt)} className="flex flex-col gap-6">
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
        setPasswordVisible(prevState => !prevState)}}
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
      >
          { isPasswordVisible ? <Eye /> : <EyeOff /> }
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
        { isConfirmPasswordVisible ? <Eye /> : <EyeOff /> }
        </button>
      </div>
      <Button type="submit" disabled={props.isLoading} primary ref={submitButtonRef}>
        {props.isLoading ? "Creating Your Account..." : "Sign Up"}
      </Button>
      </div>
    </form>
  )
}

export default RegisterForm