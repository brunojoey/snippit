import axios from 'axios';

export default {
  // Create snip.
  createSnip: function(data) {
    return axios.post('/api/snips/', data);
  },
  // Get all snips.
  getSnips: function() {
    return axios.get('/api/snips');
  },
  // Get snip with given id.
  getSnip: function(id) {
    return axios.get('/api/snips/' + id);
  },
  // Update snip with data.
  updateSnip: async function(id, data) {
    console.log('UPDATE-SNIP');
    console.log('ID: ', id);
    console.log('DATA: ', data);
    return await axios.put('/api/snips/' + id, data);
  },
  // Delete snip with given id.
  deleteSnip: function(id) {
    return axios.delete('/api/snips/' + id);
  }
};
