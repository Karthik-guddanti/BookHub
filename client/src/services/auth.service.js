import api from './api';

const login = async (username, password) => {
  try {
    const response = await api.post('/auth/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'An error occurred during login.';
  }
};

const signup = async (username, password, role) => {
  try {
    const response = await api.post('/auth/signup', {
      username,
      password,
      role,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'An error occurred during signup.';
  }
};

const authService = {
  login,
  signup,
};

export default authService;