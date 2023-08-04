import axios, { AxiosResponse } from 'axios';

interface SignUpResponse {
  // Placeholder
} 

interface LoginResponse {
  // Placeholder
}

interface AuthStatusResponse {
  // Placeholder
}

const currentURL = `${window.location.protocol}//${window.location.host}`;
// const apiURL = `${currentURL}/v1`;
const tsAPI = `${currentURL}/api`;

// Sign up the user with firebase
export async function signUp(
  email: string,
  username: string,
  password: string
): Promise<SignUpResponse> {
  try {
    const response: AxiosResponse<SignUpResponse> = await axios.post(
      `${tsAPI}/auth/signup`,
      {
        email,
        username,
        password,
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error signing up: ${error}`);
    throw error;
  }
}

// Log the user in to the database
export async function logIn(
  email: string,
  password: string
): Promise<LoginResponse> {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(
      `${tsAPI}/auth/login`,
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error logging in: ${error}`);
    throw error;
  }
}

// Check if the user is signed in to the database
export async function checkAuth(): Promise<AuthStatusResponse> {
  try {
    const response: AxiosResponse<AuthStatusResponse> = await axios.get(
      `${tsAPI}/auth/status`
    );
    return response.data;
  } catch (error) {
    console.error(`Error checking auth: ${error}`);
    throw error;
  }
}

// Log the user out
export async function signOut(): Promise<void> {
  try {
    const response: AxiosResponse<void> = await axios.get(`${tsAPI}/auth/logout`);
    return response.data;
  } catch (error) {
    console.error(`Error logging out: ${error}`);
    throw error;
  }
}
