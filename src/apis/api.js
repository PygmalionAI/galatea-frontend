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

// Log the user in to the database
export async function logIn(email, password) {
  try {
    const response = await axios.post(`${jsAPI}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(`Error logging in: ${error}`);
  }
};

// Check if the user is signed in to the database
export async function checkAuth() {
  try {
    const response = await axios.get(`${jsAPI}/auth/status`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error checking auth: ${error}`);
  }
}