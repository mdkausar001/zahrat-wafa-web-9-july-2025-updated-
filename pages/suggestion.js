import Layout from '../components/Layout/Layout'
import SuggestionsForm from '../components/suggestionForm/suggestionForm'

const ComplaintsPage = () => {
  return (
    <Layout>
      {/* <div className="relative min-h-screen ">

                {/* bg img */}
      {/* <div className="absolute inset-0 z-[-1]"> */}
      {/* <div className="absolute inset-0 z-0">

                    <img 
                        src="/assets/form/bg.jpg" 
                        alt="Background" 
                        className="w-full h-full object-cover"
                        // className="w-full h-full object-cover opacity-70" // Adjust opacity here

                    /> */}
      {/* </div>
                <div className="min-h-screen flex items-center justify-center pt-10">
                    <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
                        <h1 className="text-2xl font-bold text-gray-800 mb-6">Suggestion Form</h1>
                        <SuggestionsForm/>
                    </div>
                </div> */}
      {/* </div> */}

      <div className='relative min-h-screen mt-10'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src='/assets/form/bg.jpg'
            alt='Background'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Form Section */}
        <div className='min-h-screen md:w-6/12 mx-auto  flex items-center justify-center pt-10 relative '>
          <div className='md:max-w-4xl w-full bg-white-500 rounded-lg md:p-8 p-1'>
            {/* <h1 className="text-2xl font-bold text-gray-800 mb-6">Suggestion Form</h1> */}
            <SuggestionsForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ComplaintsPage
