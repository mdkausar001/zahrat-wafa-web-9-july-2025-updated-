const axios = require('axios');

const generateOAuthToken = async () => {

   
  const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
    params: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: process.env.REDIRECT_URI,
      code: process.env.GRANT_TOKEN,
      grant_type: process.env.GRANT_TYPE,
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.data;
};

module.exports = generateOAuthToken;
