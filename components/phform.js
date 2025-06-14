import React, { useState } from 'react';

function phFormComp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        vrn: '',
        vb: '',
        vm: '',
        app_date: '',
        attachment: '',
        prop_remark: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': '_zcsr_tmp=08245de1-d367-4ac0-b101-bdd7965ab54b; b266a5bf57=a711b6da0e6cbadb5e254290f114a026; iamcsr=08245de1-d367-4ac0-b101-bdd7965ab54b'
                },
                body: JSON.stringify({
                    refresh_token: '1000.d7952a7f14c61e3bec024a60f6104073.173254f999ad8b0dc1ebca1b12a9696e',
                    client_id: '1000.FJIRBWWBY2GK5IEJFAIG6MXJD1A3PG',
                    client_secret: '317dc55c0cc3036a4aecf2c36e8c3ef978cca6993e',
                    grant_type: 'refresh_token'
                })
            });

            const tokenData = await response.json();
            const access_token = tokenData.access_token;

            const leadResponse = await fetch('https://www.zohoapis.com/crm/v3/Leads', {
                method: 'POST',
                headers: {
                    'Authorization': `Zoho-oauthtoken ${access_token}`,
                    'Content-Type': 'application/json',
                    'Cookie': '1ccad04dca=d12247uthorization_codea40ab7e0fe716c262964de2ae1; JSESSIONID=187CE805383DD591193290412719A4D9; _zcsr_tmp=2480ff6e-a89f-47b9-a3bd-343595ab98f8; crmcsr=2480ff6e-a89f-47b9-a3bd-343595ab98f8'
                },
                body: JSON.stringify({
                    data: [
                        {
                            Company: 'Test company',
                            Email: formData.email,
                            Last_Name: formData.name,
                            Phone: formData.phone,
                            Country: formData.address,
                            Vehicle_Reg_No: formData.vrn,
                            Vehicle_Model: formData.vm,
                            Vehicle_Brand: formData.vb,
                            Appointment_Date: formData.app_date,
                            Problems_Remark: formData.prop_remark,
                            Notes: 'Testing from Rest API',
                            Description: 'testing with get the lead data from outside of the crm'
                        }
                    ]
                })
            });

            const leadResult = await leadResponse.json();
            console.log(leadResult);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label> new
    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />

    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />

    <label htmlFor="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />

    <label htmlFor="address">Address:</label>
    <input type="text" id="address" name="address" required value={formData.address} onChange={handleChange} />

    <label htmlFor="vrn">Vehicle Registered No :</label>
    <input type="text" id="vrn" name="vrn" required value={formData.vrn} onChange={handleChange} />

    <label htmlFor="vb">Vehicle Brand :</label>
    <input type="text" id="vb" name="vb" required value={formData.vb} onChange={handleChange} />

    <label htmlFor="vm">Vehicle Model :</label>
    <input type="text" id="vm" name="vm" required value={formData.vm} onChange={handleChange} />

    <label htmlFor="app_date">Appointment Date:</label>
    <input type="date" id="app_date" name="app_date" required value={formData.app_date} onChange={handleChange} />

    <label htmlFor="attachment">Upload Image :</label>
    <input type="file" id="attachment" name="attachment" value={formData.attachment} onChange={handleChange} />

    <label htmlFor="prop_remark">Problems Remark :</label>
    <input type="text" id="prop_remark" name="prop_remark" required value={formData.prop_remark} onChange={handleChange} />

    <button type="submit" id="sendDataBtn">Submit</button>
</form>

            <div id="response"></div>
        </div>
    );
}

export default phFormComp;
