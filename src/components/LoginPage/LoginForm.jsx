import React, { useState } from 'react';
import { styles } from '../../styles';
import { TextInput, Button } from '../Shared';
import { Eye, EyeOff } from 'lucide-react'

const LoginForm = (props) => {
  const [isLoading, setIsLoading] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Perform any desired logic or actions
  };

  return (
    <form onSubmit={(evt) => props.onSubmit(evt)} className="flex flex-col gap-6">
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