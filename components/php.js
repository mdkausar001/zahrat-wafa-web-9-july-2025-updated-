// <?php
// // define("refresh_token","1000.426e8996f48aa4085c7df82a23282b8a.f014bfd573a3919a6275877c0de0a699");
// // define("client_id","1000.RZIOXJP5YCBW3LXHQGGVHWT7WDLHGA");
// // define("client_secret","92a0ecc0f1689c55fe58d6c870049fd0dbccf48920");
// // define("redirect_uri", "https://zoho.com");

// $post_params = array();
// $post_params['refresh_token'] = "1000.56229a0feb8a09605b7643238f38fe4c.b230c34317e553c887dd992a35c62ff9";
// $post_params['client_id'] = "1000.R178HYA5LOD5L1HPIHXQGAB8VDMC0N";
// $post_params['client_secret'] = "a839aa53c4859112ef1abfb1fbf3e41c450b076bab";
// $post_params['redirect_uri'] = "https://www.zoho.com";
// $post_params['grant_type'] = "refresh_token";
// $url ='https://accounts.zoho.com/oauth/v2/token';
// $ch = curl_init();
// curl_setopt($ch,CURLOPT_URL, $url);
// curl_setopt($ch, CURLOPT_POST, 1);
// curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,true);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// curl_setopt($ch,CURLOPT_POSTFIELDS, $post_params);
// $resp = curl_exec($ch);
// curl_close($ch);
// $decoded_resp = json_decode($resp);
// $access_token = $decoded_resp->access_token;
// // echo "Access token :".$access_token;

// if($access_token)
// {
//     $curl = curl_init();

//     curl_setopt_array($curl, array(
//     CURLOPT_URL => 'https://www.zohoapis.com/crm/v6/Gallery/6275624000001008003',
//     CURLOPT_RETURNTRANSFER => true,
//     CURLOPT_ENCODING => '',
//     CURLOPT_MAXREDIRS => 10,
//     CURLOPT_TIMEOUT => 0,
//     CURLOPT_FOLLOWLOCATION => true,
//     CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//     CURLOPT_CUSTOMREQUEST => 'GET',
//     CURLOPT_HTTPHEADER => array(
//         'Authorization: Zoho-oauthtoken '.$access_token,
//         'Cookie: _zcsr_tmp=647e382f-8e84-4bbd-998c-07d651a678fd; crmcsr=647e382f-8e84-4bbd-998c-07d651a678fd; zalb_1a99390653=fa937bf8820a337da6a65156d344d3c2; zalb_1ccad04dca=4756a8194d77973b28ad9c52af71ea24'
//     ),
//     ));
// $response = curl_exec($curl);
// curl_close($curl);
// echo $response;
// // $gallaryResp = json_decode($response); 

// // if (is_object($gallaryResp)) {
// //     // Access as object
// //     $alldetail = $gallaryResp["data"];
// //     $name = $alldetail["Name"];
// //     $description = $alldetail["Description"];
// //     $image = $alldetail["Image"];


// // }
// }

// ?>
// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Gallery Form</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//             background-color: #f0f0f0;
//         }
//         form {
//             background: white;
//             padding: 20px 20px;
//             width:40%;
//             border-radius: 5px;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }
//         label {
//             display: block;
//             margin-top: 10px;
//         }
//         input, textarea {
//             width: 100%;
//             padding: 8px;
//             margin-top: 5px;
//             border-radius: 3px;
//             border: 1px solid #ccc;
//         }
//         button {
//             margin-top: 15px;
//             padding: 10px 15px;
//             border: none;
//             border-radius: 5px;
//             background-color: #28a745;
//             color: white;
//             font-size: 16px;
//         }
//     </style>
// </head>
// <body>

// <form action="#" method="post" enctype="multipart/form-data">
//     <label for="gallery-name">Gallery Name:</label>
//     <input type="text" id="gallery-name" name="gallery-name" required>
    
//     <label for="image-upload">Upload Image:</label>
//     <input type="file" id="image-upload" name="image-upload" accept="image/*" required>
    
//     <label for="description">Description:</label>
//     <textarea id="description" name="description" rows="4" required></textarea>
    
//     <button type="submit">Submit</button>
// </form>

// </body>
// </html> -->
