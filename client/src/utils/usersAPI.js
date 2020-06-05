import axios from 'axios';

export default {
  // Create user.
  createUser: function (data) {
    return axios.post('/api/users/', data);
  },
  // Get all users.
  getUsers: function () {
    return axios.get('/api/users');
  },
  // Get user with given id.
  getUser: function (id) {
    return axios.get('/api/users/' + id);
  },
  // Update user with data.
  updateUser: function (id, data) {
    return axios.put('/api/users/' + id, data);
  },
  // Delete user with given id.
  deleteUser: function (id) {
    return axios.delete('/api/users/' + id);
  },
  // Get a Biography
  getBio: function (id) {
    return axios.get('/api/biographies/' + id);
  },
  // Update a Biography
  updateBio: function (id, data) {
    return axios.put('/api/biographies/' + id, data);
  },
  // Get the Github Link
  getGithub: function (id) {
    return axios.get('/api/github/' + id);
  },
  // Update the Github Link for Editing
  updateGithub: function (id, data) {
    return axios.put('/api/github/' + id, data);
  },
  // Get the LinkedIn Link
  getLinkedIn: function (id) {
    return axios.get('/api/linkedin/' + id);
  },
  // Update the LinkedIn Link for Editing
  updateLinkedIn: function (id, data) {
    return axios.put('/api/linkedin' + id, data);
  }
};
