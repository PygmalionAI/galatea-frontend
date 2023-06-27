import React, { useState } from 'react';
import { styles } from '../../styles';
import { TextInput, Button } from '../Shared';

const LoginForm = (props) => {
  const [isLoading, setIsLoading] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Perform any desired logic or actions
  };

  return (
    <form onSubmit={(evt) => props.onSubmit(evt)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <TextInput fieldName="email" placeholder="Email" type="email" required />
        <TextInput
        fieldName="password"
        placeholder="Password"
        type="password"
        required
        />
      </div>

      <Button type="submit" disabled={props.isLoading} primary>
      {props.isLoading ? "Logging in..." : "Log in"}
      </Button>
    </form>
  )
}

export default LoginForm