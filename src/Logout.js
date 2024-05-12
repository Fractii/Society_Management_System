import axios from 'axios';

const logout = async () => {
  try {
    await axios.get('https://localhost:443/api/Logout');
    // Clear session-related data in your frontend (if any)
    // For example, clear localStorage, session storage, or state variables
    // Redirect the user to the login page
    window.location.href = '/';
  } catch (error) {
    console.error('Logout error:', error);
  }
};

export default logout;
