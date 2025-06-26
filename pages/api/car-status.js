// pages/api/car-status.js

import axios from 'axios'

const ZOHO_TOKEN_URL = process.env.ZOHO_TOKEN_URL
const ZOHO_BOOK_CLIENT_ID = process.env.ZOHO_BOOK_CLIENT_ID
const ZOHO_BOOK_CLIENT_SECRET = process.env.ZOHO_BOOK_CLIENT_SECRET
const ZOHO_BOOK_REFRESH_TOKEN = process.env.ZOHO_BOOK_REFRESH_TOKEN
const ZOHO_GRANT_TYPE = process.env.ZOHO_GRANT_TYPE
const ORG_ID = '837124587' // Your Zoho Books organization_id

// Helper to get Zoho access token
const getAccessToken = async () => {
  const response = await axios.post(ZOHO_TOKEN_URL, null, {
    params: {
      client_id: ZOHO_BOOK_CLIENT_ID,
      client_secret: ZOHO_BOOK_CLIENT_SECRET,
      refresh_token: ZOHO_BOOK_REFRESH_TOKEN,
      grant_type: ZOHO_GRANT_TYPE,
    },
  })
  return response.data.access_token
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { mobile } = req.query
  if (!mobile) {
    res.status(400).json({ error: 'Mobile number required' })
    return
  }

  try {
    const accessToken = await getAccessToken()
    const url = `https://www.zohoapis.com/books/v3/projects?organization_id=${ORG_ID}&cf_contact_number=${mobile}`
    const response = await axios.get(url, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
    })
    res.status(200).json(response.data)
  } catch (error) {
    console.error(
      'Error fetching car status:',
      error.response?.data || error.message
    )
    res.status(500).json({ error: 'Failed to fetch car status' })
  }
}
