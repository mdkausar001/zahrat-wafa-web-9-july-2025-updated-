import React, { useState } from 'react'

const mockCarStatus = {
  model: 'Toyota Camry',
  plate: 'XYZ 1234',
  status: 'Ready for Pickup',
  serviceDate: 'October 20, 2023',
  location: 'Dubai, UAE',
}

const CarStatus = () => {
  const [step, setStep] = useState(1)
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [sentOtp, setSentOtp] = useState('')
  const [error, setError] = useState('')
  const [carStatus, setCarStatus] = useState(null)

  // Simulate sending OTP
  const handleSendOtp = () => {
    if (!/^\d{10,15}$/.test(mobile)) {
      setError('Enter a valid mobile number')
      return
    }
    setError('')
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString()
    setSentOtp(generatedOtp)
    alert(`OTP sent: ${generatedOtp}`) // For demo only
    setStep(2)
  }

  // Simulate OTP verification
  const handleVerifyOtp = () => {
    if (otp !== sentOtp) {
      setError('Invalid OTP')
      return
    }
    setError('')
    setCarStatus(mockCarStatus)
    setStep(3)
  }

  // UI rendering based on step
  return (
    <div
      style={{
        maxWidth: 400,
        margin: '40px auto',
        fontFamily: 'sans-serif',
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 12px #eee',
        padding: 24,
      }}
    >
      <h3 style={{ color: '#222', marginBottom: 8 }}>Zahrat Wafa Car Status</h3>
      {step === 1 && (
        <>
          <label>Enter Mobile Number</label>
          <input
            type='text'
            value={mobile}
            onChange={(e) => setMobile(e.target.value.replace(/\D/, ''))}
            placeholder='Mobile Number'
            style={{
              width: '100%',
              margin: '8px 0',
              padding: 8,
              borderRadius: 6,
              border: '1px solid #ccc',
            }}
            maxLength={15}
          />
          <button
            onClick={handleSendOtp}
            style={{
              width: '100%',
              background: '#222',
              color: '#fff',
              padding: 10,
              border: 0,
              borderRadius: 6,
              marginTop: 8,
            }}
          >
            Send OTP
          </button>
          {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
        </>
      )}

      {step === 2 && (
        <>
          <label>OTP Verification</label>
          <input
            type='text'
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/, ''))}
            placeholder='Enter OTP'
            style={{
              width: '100%',
              margin: '8px 0',
              padding: 8,
              borderRadius: 6,
              border: '1px solid #ccc',
            }}
            maxLength={4}
          />
          <button
            onClick={handleVerifyOtp}
            style={{
              width: '100%',
              background: '#222',
              color: '#fff',
              padding: 10,
              border: 0,
              borderRadius: 6,
              marginTop: 8,
            }}
          >
            Verify
          </button>
          <div
            style={{ color: '#888', marginTop: 8, cursor: 'pointer' }}
            onClick={() => setStep(1)}
          >
            Edit Mobile Number
          </div>
          {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
        </>
      )}

      {step === 3 && carStatus && (
        <div style={{ textAlign: 'center' }}>
          <img
            src='https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg'
            alt='Car'
            style={{ width: 120, margin: '0 auto 12px' }}
          />
          <h4>
            Car Status:{' '}
            <span style={{ color: '#16a085' }}>{carStatus.status}</span>
          </h4>
          <div style={{ margin: '12px 0' }}>
            <div>
              <b>Model:</b> {carStatus.model}
            </div>
            <div>
              <b>Plate Number:</b> {carStatus.plate}
            </div>
            <div>
              <b>Service Date:</b> {carStatus.serviceDate}
            </div>
            <div>
              <b>Location:</b> {carStatus.location}
            </div>
          </div>
        </div>
      )}

      {/* Footer / Support */}
      <div
        style={{
          borderTop: '1px solid #eee',
          marginTop: 24,
          paddingTop: 16,
          fontSize: 14,
          color: '#888',
        }}
      >
        <div>Contact Support</div>
        <div style={{ fontWeight: 'bold' }}>+1 234 567 890</div>
        <div style={{ margin: '8px 0' }}>
          <a
            href='#'
            style={{ color: '#222', textDecoration: 'none', marginRight: 12 }}
          >
            Go to Homepage
          </a>
          <span style={{ marginRight: 8 }}>
            <i className='fa fa-twitter'></i>
          </span>
          <span style={{ marginRight: 8 }}>
            <i className='fa fa-facebook'></i>
          </span>
          <span>
            <i className='fa fa-instagram'></i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CarStatus
