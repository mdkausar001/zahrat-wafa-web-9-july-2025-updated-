// // require('dotenv').config(); // Load environment variables from .env
// // const express = require('express');
// // const axios = require('axios');
// // const bodyParser = require('body-parser');

// // const app = express();
// // app.use(bodyParser.json());

// // const ZOHO_TOKEN_URL = process.env.ZOHO_TOKEN_URL;
// // const ZOHO_API_URL = process.env.ZOHO_API_URL;
// // const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
// // const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
// // const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
// // const ZOHO_GRANT_TYPE = process.env.ZOHO_GRANT_TYPE;

// // const getAccessToken = async () => {
// //     try {
// //         const response = await axios.post(ZOHO_TOKEN_URL, null, {
// //             params: {
// //                 client_id: ZOHO_CLIENT_ID,
// //                 client_secret: ZOHO_CLIENT_SECRET,
// //                 refresh_token: ZOHO_REFRESH_TOKEN,
// //                 grant_type: ZOHO_GRANT_TYPE,
// //             },
// //         });

// //         const accessToken = response.data.access_token;
// //         return accessToken;
// //     } catch (error) {
// //         console.error('Error getting Zoho access token:', error);
// //         throw error;
// //     }
// // };

// // // 2 csend form data to Zoho CRM
// // app.post('/api/submitForm', async (req, res) => {
// //     const formData = req.body;

// //     try {
// //         const accessToken = await getAccessToken(); // Get the access token
// //         const response = await axios.post(ZOHO_API_URL, { data: [formData] }, {
// //             headers: {
// //                 'Authorization': `Zoho-oauthtoken ${accessToken}`,
// //                 'Content-Type': 'application/json',
// //             },
// //         });

// //         res.status(200).send(response.data); // Send success response
// //     } catch (error) {
// //         console.error('Error sending data to Zoho CRM:', error);
// //         res.status(500).send('Error submitting form');
// //     }
// // });

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //     console.log(`Server is running on port ${PORT}`);
// // });

// //2
// require('dotenv').config(); // Load environment variables from .env
// const express = require('express');
// const axios = require('axios');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// const ZOHO_TOKEN_URL = process.env.ZOHO_TOKEN_URL;
// const ZOHO_API_URL = process.env.ZOHO_API_URL;
// const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
// const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
// const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
// const ZOHO_GRANT_TYPE = process.env.ZOHO_GRANT_TYPE;

// // Step 1: Get Zoho Access Token
// const getAccessToken = async () => {
//     try {
//         const response = await axios.post(ZOHO_TOKEN_URL, null, {
//             params: {
//                 client_id: ZOHO_CLIENT_ID,
//                 client_secret: ZOHO_CLIENT_SECRET,
//                 refresh_token: ZOHO_REFRESH_TOKEN,
//                 grant_type: ZOHO_GRANT_TYPE,
//             },
//         });

//         const accessToken = response.data.access_token;
//         console.log("accessToken",accessToken);
//         return accessToken;
//     } catch (error) {
//         console.error('Error getting Zoho access token:', error);
//         throw error;
//     }
// };

// // 2: Send form data to Zoho CRM
// app.post('/api/submitForm', async (req, res) => {
//     const formData = req.body;
//     console.log("formData",formData);

//     try {
//         const accessToken = await getAccessToken(); // Get the access token

//         // d form data to Zoho CRM
//         const response = await axios.post(ZOHO_API_URL, {

//             data: [
//                 {
//                     First_Name: formData.firstName,
//                     Last_Name: formData.lastName,
//                     Email: formData.email,
//                 },
//             ],
//         },
//         {
//             headers: {
//                 'Authorization': `Zoho-oauthtoken ${accessToken}`,
//                 'Content-Type': 'application/json',
//             },
//         });

//         res.status(200).send(response.data); // Send success response
//     } catch (error) {
//         console.error('Error sending data to Zoho CRM:', error);
//         res.status(500).send('Error submitting form');
//     }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// const cors = require('cors');
// app.use(cors({
//     origin: 'http://localhost:3000', // Allow requests from this origin
// }));

// //3

require('dotenv').config() // Load environment variables from .env
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())

// Enable CORS
// app.use(cors({
//     origin: 'http://localhost:3000', // Allow requests from this origin
// }));
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://zahrat-wafa.com'], // Replace with your actual domain or an array of domains
  })
)

const ZOHO_TOKEN_URL = process.env.ZOHO_TOKEN_URL
const ZOHO_API_URL = process.env.ZOHO_API_URL
const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN
const ZOHO_GRANT_TYPE = process.env.ZOHO_GRANT_TYPE
const ZOHO_API_URL_SUG = process.env.ZOHO_API_URL_SUG

console.log('ZOHO_API_URL', ZOHO_API_URL, ZOHO_TOKEN_URL, ZOHO_CLIENT_ID)
// Step 1: Get Zoho Access Token
const getAccessToken = async () => {
  try {
    const response = await axios.post(ZOHO_TOKEN_URL, null, {
      params: {
        client_id: ZOHO_CLIENT_ID,
        client_secret: ZOHO_CLIENT_SECRET,
        refresh_token: ZOHO_REFRESH_TOKEN,
        grant_type: ZOHO_GRANT_TYPE,
      },
    })

    const accessToken = response.data.access_token
    return accessToken
  } catch (error) {
    console.error('Error getting Zoho access token:', error)
    throw error
  }
}

// Step 2: Send form data to Zoho CRM
app.post('/api/submitForm', async (req, res) => {
  const formData = req.body
  console.log('formData', formData)
  try {
    const accessToken = await getAccessToken() // Get the access token

    // Send form data to Zoho CRM
    const response = await axios.post(
      ZOHO_API_URL,
      {
        data: [
          {
            // First_Name: formData.firstName,
            Last_Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            Complaint: formData.complaint,
          },
        ],
      },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )

    res.status(200).send(response.data) // Send success response
  } catch (error) {
    console.error('Error sending data to Zoho CRM:', error)
    res.status(500).send('Error submitting form')
  }
})

// Step 2: Handle Suggestions Form Data and Send to Zoho CRM
app.post('/api/suggestionForm', async (req, res) => {
  const formData = req.body // Capture form data from the request body
  console.log('suggestionForm', formData)

  try {
    const accessToken = await getAccessToken() // Get the access token

    // Prepare the data to be sent to Zoho CRM
    const response = await axios.post(
      ZOHO_API_URL_SUG,
      {
        data: [
          {
            Name: formData.name, // Assuming name is last name
            Email: formData.email,
            Contact_Number: formData.contactNumber || '', // Optional field
            Suggestion_Type: formData.suggestionType,
            Suggestion_Details: formData.suggestionDetails,
            // Attachment: formData.attachment ? formData.attachment : '', // Handle file uploads (if needed)
          },
        ],
      },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
    api / server.js
    res.status(200).send(response.data) // Send success response
  } catch (error) {
    console.error('Error sending data to Zoho CRM:', error)
    res.status(500).send('Error submitting suggestion form')
  }
})

app.post('/api/zoho-token', async (req, res) => {
  try {
    const response = await axios.post(ZOHO_TOKEN_URL, null, {
      params: {
        client_id: ZOHO_CLIENT_ID,
        client_secret: ZOHO_CLIENT_SECRET,
        refresh_token: ZOHO_REFRESH_TOKEN,
        grant_type: ZOHO_GRANT_TYPE,
      },
    })
    res.json(response.data) // returns { access_token: ... }
  } catch (error) {
    console.error(
      'Error getting Zoho access token:',
      error.response?.data || error.message
    )
    res.status(500).json({ error: 'Failed to get Zoho access token' })
  }
})

// Fetch car/project status by mobile number using existing getAccessToken()
app.get('/api/car-status', async (req, res) => {
  const { mobile } = req.query
  if (!mobile) {
    return res.status(400).json({ error: 'Mobile number required' })
  }

  try {
    const accessToken = await getAccessToken() // Use your existing function
    const orgId = '837124587' // Replace with your actual organization_id if different
    const url = `https://www.zohoapis.com/books/v3/projects?organization_id=${orgId}&cf_contact_number=${mobile}`

    const axios = require('axios') // Make sure axios is imported at the top of your file

    const response = await axios.get(url, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
    })

    res.json(response.data)
    console.log(response.data)
  } catch (error) {
    console.error(
      'Error fetching car status:',
      error.response?.data || error.message
    )
    res.status(500).json({ error: 'Failed to fetch car status' })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
