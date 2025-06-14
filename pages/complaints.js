import ComplaintsForm from '../components/ComplaintsForm/ComplaintsForm';
import Layout from '../components/Layout/Layout';

const ComplaintsPage = () => {
    return (
        <Layout>


<div className="relative min-h-screen">
{/* Background Image */}
<div className="absolute inset-0">
    <img 
        src="/assets/form/bg.jpg" 
        alt="Background" 
        className="w-full h-full object-cover"
    />
</div>

{/* Form Section */}
<div className="min-h-screen flex items-center justify-center lg:pt-1  relative ">
    <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        {/* <h1 className="text-2xl font-bold text-gray-800 mb-6">Suggestion Form</h1>
        <SuggestionsForm/> */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Complaints Form</h1>
        <ComplaintsForm />
    </div>
</div>
</div>
        </Layout>
    );
};

export default ComplaintsPage;
