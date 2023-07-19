import axios from 'axios';

const currentURL = `${window.location.protocol}//${window.location.host}`;
const apiURL = `${currentURL}/v1`;
const jsAPI = `${currentURL}/api`;

// Sign up the user with firebase
export async function signUp(email, username, password) {
  try {
    const response = await axios.post(`${jsAPI}/auth/signup`, {
      email,
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(`Error signing up: ${error}`);
    throw error;
  }
};

export async function logIn() {
  const response = await axios.post(`${jsAPI}/auth/login`);
  return response;
};

export async function getAuth() {
  const response = await axios.get(`${jsAPI}/auth/getauth`);
  return response;
};
