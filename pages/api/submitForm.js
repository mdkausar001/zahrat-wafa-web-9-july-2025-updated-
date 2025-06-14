

import axios from 'axios';
import multer from 'multer';

const upload = multer(); // You can configure multer as needed
// const upload = multer().single('document'); // Field name 'document' for file upload

const ZOHO_TOKEN_URL = process.env.ZOHO_TOKEN_URL;
const ZOHO_API_URL = process.env.ZOHO_API_URL;
const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
const ZOHO_GRANT_TYPE = 'refresh_token';
const ZOHO_API_URL_SUG = process.env.ZOHO_API_URL_SUG;
const ZOHO_API_URL_CLASS = process.env.ZOHO_API_URL_CLASS;

const ZOHO_API_URL_JOBINFO = process.env.ZOHO_API_URL_JOBINFO;
const ZOHO_API_URL_JOBREQUEST = process.env.ZOHO_API_URL_JOBREQUEST;


const ZOHO_API_URL_COMP = process.env.ZOHO_API_URL_COMP;
const ZOHO_API_FILE_UPLOAD_URL = 'https://www.zohoapis.com/crm/v3/files'; // Zoho CRM files API endpoint


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
    });

    return response.data.access_token; // Return the access token
  } catch (error) {
    console.error('Error getting Zoho access token:', error);
    throw error;
  }
};

//file

// Step 2: Upload file to Zoho CRM /files API



// const ZOHO_API_URL_JOBREQUEST = process.env.ZOHO_API_URL_JOBREQUEST;
// const ZOHO_API_FILE_UPLOAD_URL = process.env.ZOHO_API_FILE_UPLOAD_URL;

// Function to get Zoho access token


// // Middleware to handle file uploads and job request form
// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     upload(req, res, async (err) => {
//       if (err) {
//         return res.status(500).json({ message: 'Error uploading file', error: err.message });
//       }

//       const { formData } = req.body;
//       console.log("Received formData:", formData);

//       // Check if form is 'jobrequest'
//       if (formData.form === 'jobrequest') {
//         const jobRequestData = {
//           Name: formData.fullName,
//           Contact_Number: formData.contactNumber || '',
//           Car_Model: formData.carModel,
//           Car_Make_Year: formData.carMakeYear,
//           Service_Required: formData.serviceRequired,
//           Preferred_Service_Date: formData.preferredServiceDate,
//           Days: formData.days || '',
//           Description_of_the_Issue: formData.issueDescription || '',
//           Email: formData.email || '',
//           Color: formData.color || '',
//           Claim_No: formData.claimNo || '',
//           Vehicle_User: formData.vehicleUser || '',
//           Plate_Number: formData.plateNumber || '',
//           Odometer: formData.odometer || '',
//           Chassis: formData.chassis || '',
//           Fuel_Level: formData.fuelLevel, // Include fuel level here
//           Client_Source: formData.clientSource || '',
//           Trigger: ["approval", "workflow", "blueprint", "pathfinder", "orchestration"],
//         };

//         // Step 1: Upload file to Zoho CRM
//         let fileId = null;
//         if (req.file) {
//           console.log("File attached:", req.file.originalname);
//           try {
//             const accessToken = await getAccessToken(); // Fetch access token

//             const fileUploadResponse = await axios.post(ZOHO_API_FILE_UPLOAD_URL, req.file.buffer, {
//               headers: {
//                 'Authorization': `Zoho-oauthtoken ${accessToken}`,
//                 'Content-Type': 'multipart/form-data',
//               },
//               params: {
//                 entity_id: formData.entityId, // The ID of the record where the file will be attached
//                 module: "Job_Request" // Module where the file will be attached
//               },
//             });

//             fileId = fileUploadResponse.data.data[0].details.id; // Get the file ID
//             console.log('File uploaded successfully. File ID:', fileId);
//           } catch (error) {
//             console.error('Error uploading file to Zoho CRM:', error);
//             return res.status(500).json({ message: 'Error uploading file to Zoho CRM', error: error.message });
//           }
//         }

//         // Step 2: Add file ID to job request data if file was uploaded
//         if (fileId) {
//           jobRequestData.Upload_Supporting_Documents_Images = fileId; // Attach file ID to job request data
//         }

//         // Step 3: Send job request data to Zoho CRM
//         try {
//           const accessToken = await getAccessToken(); // Get Zoho Access Token

//           // Send the job request data to Zoho CRM
//           const response = await axios.post(ZOHO_API_URL_JOBREQUEST, {
//             data: [jobRequestData], // Send job request data as an array
//           }, {
//             headers: {
//               'Authorization': `Zoho-oauthtoken ${accessToken}`,
//               'Content-Type': 'application/json',
//             },
//           });

//           // Return a successful response if the data is submitted
//           return res.status(200).json({ message: 'Form submitted successfully', result: response.data });

//         } catch (error) {
//           console.error('Error submitting form to Zoho CRM:', error);
//           return res.status(500).json({ message: 'Error submitting form to Zoho CRM', error: error.message });
//         }
//       } else {
//         return res.status(400).json({ message: 'Invalid form type or missing data.' });
//       }
//     });
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }



//

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { formData } = req.body;
    console.log("Received formData:", formData);
    // Define a mapping object 
    const urlMapping = {
      'complaint': ZOHO_API_URL_COMP,
      'suggestion': ZOHO_API_URL_SUG,
      'classification': ZOHO_API_URL_CLASS,
      'jobinformation': ZOHO_API_URL_JOBINFO,
      // 'jobrequest':ZOHO_API_URL_JOBREQUEST
    };

    const postUrl = urlMapping[formData.form];
    console.log("postUrl53545454", postUrl);


    // Define a mapping object for data structures based on form type
    const dataMapping = {
      'complaint': [
        {
          Name: formData.name,
          Email: formData.email,
          Phone_Number: formData.phone,
          Complaint_Descriptions: formData.complaint,
        },
      ],
      'suggestion': [
        {
          Name: formData.name, // Assuming name is last name
          Email: formData.email,
          Contact_Number: formData.contactNumber || '', // Optional field
          Suggestion_Type: formData.suggestionType,
          Suggestion_Details: formData.suggestionDetails,
          // Attachment: formData.attachment ? formData.attachment : '', // Handle file uploads (if needed)
        },
      ],

      'classification': [
        {
          Name: formData.fullName, // The complete name of the individual
          Email: formData.email, // The email address
          Contact_Number: formData.contactNumber || '', // Contact number, optional
          Classification_Type: formData.classificationType, // Classification type (e.g., Customer, Vendor, etc.)
          Descriptions: formData.description, // Additional details or description
        },
      ],
      'jobinformation': [
        {
          Name: formData.fullName, // The complete name of the individual
          Contact_Number: formData.contactNumber || '', // Contact number, optional
          Car_Model: formData.carModel, // Model of the car
          Car_Make_Year1: formData.carMakeYear, // Year the car was made
          Type_of_Service_Performed: formData.serviceType, // Type of service performed
          Service_Date: formData.serviceDate, // Date when the service was performed
          Service_Completion_Date: formData.completionDate || '', // Date when the service was completed, optional
          Service_Technician_Name: formData.technicianName || '', // Name of the technician, optional
          Additional_Comments_Details: formData.additionalComments || '', // Additional comments or details, optional
        },
      ],
      'jobrequest': [
        {
          Name: formData.fullName, // Job Request Name
          Contact_Number: formData.contactNumber || '', // Contact Number
          Car_Model: formData.carModel, // Car Model
          Car_Make_Year: formData.carMakeYear, // Car Make Year
          Service_Required: formData.serviceRequired, // Service Required (Type of Service)
          Preferred_Service_Date: formData.preferredServiceDate, // Preferred Service Date
          Days: formData.days || '', // Days (Completion Date)
          // Created_By: formData.technicianName || '', // Created By (Technician's Name)
          Description_of_the_Issue: formData.issueDescription || '', // Additional Comments or Issue Description
          Email: formData.email || '', // Email
          color:formData.color || '',
          claim_No : formData.claimNo || '',
          // Secondary_Email: formData.secondaryEmail || '', // Secondary Email
          vehicleUser:formData.vehicleUser,
          Plate_Number: formData.plateNumber || '', // Plate Number
          odometer: formData.odometer || '', // Odometer
          chassis: formData.chassis || '', // Chassis
          Fuel_Level: formData.fuelLevel, // Fuel Level
          Upload_Supporting_Documents_Images: req.file ? req.file.buffer : '', // Use buffer for the uploaded file

          // Upload_Supporting_Documents_Images: formData.supportingDocuments[0] || '', // Upload Supporting Documents/Images
          Client_Source: formData.clientSource || '', // Client Source

          "trigger": [
            "approval",
            "workflow",
            "blueprint",
            "pathfinder",
            "orchestration"
        ]
        }
        
      ]



    };
   

    try {
      // Step 1: Get the Zoho Access Token
      const accessToken = await getAccessToken();
    
      // Step 2: Check if formData is 'jobrequest' and there's a file to upload
      if (formData.form === 'jobrequest' && req.file) {
        const fileUploadResponse = await axios.post(ZOHO_API_FILE_UPLOAD_URL, {
          file: req.file.buffer // Upload the file buffer from req.file
        }, {
          headers: {
            'Authorization': `Zoho-oauthtoken ${accessToken}`,
            'Content-Type': 'multipart/form-data', // Required for file uploads
          },
        });
    
        const fileId = fileUploadResponse.data.data[0].details.id; // Extract the uploaded file ID
        console.log("Uploaded File ID:", fileId);
    
        // Return or process the file ID as needed
        return fileId;
      } else {
        console.log("No file to upload or form type is not 'jobrequest'");
      }
    } catch (error) {
      console.error('Error uploading file to Zoho CRM:', error);
      res.status(500).json({ message: 'Error uploading file to Zoho CRM', error: error.message });
    }
    

    const dataToSend = dataMapping[formData.form];

    console.log("dataToSend", dataToSend)
    if (!dataToSend) {
      res.status(400).json({ error: 'No data mapping found for form type' });
      return;
    }
    if (!postUrl) {
      // Handle unknown form types
      res.status(400).json({ error: 'Unknown form type' });
      return;
    }

//

    try {
      const accessToken = await getAccessToken(); // Get Zoho Access Token

      // Step 2: Send data to Zoho CRM
      // const response = await axios.post(ZOHO_API_URL, {

      console.log("data to send crm",dataToSend)
      const response = await axios.post(postUrl, {
        data: dataToSend 
      }, {
        headers: {
          'Authorization': `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      // If successful, return success response
      res.status(200).json({ message: 'Form submitted successfully', result: response.data });

    } catch (error) {
      console.error('Error submitting form to Zoho CRM:', error);
      res.status(500).json({ message: 'Error submitting form to Zoho CRM', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
