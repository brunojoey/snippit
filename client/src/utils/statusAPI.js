import axios from 'axios';

export default {
  // Gets user status. Returns user information if user is logged in, otherwise
  // returns falsy object.
  getStatus: async function() {
    return await axios.get('/api/status');
  },

  logout: async function() {
    return await axios.get('/api/logout');
  },

  // Log user in. Returns user information if successful, otherwise returns a
  // falsy object.
  login: async function(data) {
    return await axios.post('/login', data);
  },

  signup: function(data) {
    return axios.post('/signup', data);
  }
};
