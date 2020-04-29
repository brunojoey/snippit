import axios from 'axios';

export default {
  // Create user.
  createUser: function(data) {
    return axios.post('/api/users/', data);
  },
  // Get all users.
  getUsers: function() {
    return axios.get('/api/users');
  },
  // Get user with given id.
  getUser: function(id) {
    return axios.get('/api/users/' + id);
  },
  // Update user with data.
  updateUser: function(id, data) {
    return axios.put('/api/users/' + id, data);
  },
  // Delete user with given id.
  deleteUser: function(id) {
    return axios.delete('/api/users/' + id);
  }
};
