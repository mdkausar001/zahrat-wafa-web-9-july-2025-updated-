// pages/api/car-status.js

import axios from 'axios'

const ZOHO_TOKEN_URL = process.env.ZOHO_TOKEN_URL
const ZOHO_BOOK_CLIENT_ID = process.env.ZOHO_BOOK_CLIENT_ID
const ZOHO_BOOK_CLIENT_SECRET = process.env.ZOHO_BOOK_CLIENT_SECRET
const ZOHO_BOOK_REFRESH_TOKEN = process.env.ZOHO_BOOK_REFRESH_TOKEN
const ZOHO_GRANT_TYPE = process.env.ZOHO_GRANT_TYPE
const ORG_ID = '837124587'

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
    const url = `https://www.zohoapis.com/books/v3/projects?organization_id=${ORG_ID}`
    const response = await axios.get(url, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
    })

    // Filter projects for exact match on cf_user_number
    const allProjects = response.data.projects || []
    const matchedProjects = allProjects.filter(
      (project) =>
        project.cf_user_number &&
        project.cf_user_number.trim() === mobile.trim()
    )

    res.status(200).json({ projects: matchedProjects })
  } catch (error) {
    console.error(
      'Error fetching car status:',
      error.response?.data || error.message
    )
    res.status(500).json({ error: 'Failed to fetch car status' })
  }
}
