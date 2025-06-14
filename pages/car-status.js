import Career from '../components/Career/career'
import CarStatusForm from '../components/CarStatus/CarStatusForm'
import ComplaintsForm from '../components/ComplaintsForm/ComplaintsForm'
import JobRequest from '../components/JobRequest/JobRequest'
import Layout from '../components/Layout/Layout'

const CarStatus = () => {
  return (
    <Layout>
      <div className='relative min-h-screen'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src='/assets/form/bg.jpg'
            alt='Background'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Form Section */}
        <div className=' flex items-center justify-center relative '>
          <div className='max-w-4xl w-full bg-white lg:p-1'>
            {/* <h1 className="text-2xl font-bold text-gray-800 mb-6">Suggestion Form</h1>
        <SuggestionsForm/> */}
            <h1 className='text-2xl font-bold text-gray-800 mb-6'>
              Check Car Status
            </h1>
            <CarStatusForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CarStatus
