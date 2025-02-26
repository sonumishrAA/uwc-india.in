// import { useState, useEffect } from 'react';

// const WorkerRegistration = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     age: '',
//     photo: null,
//     fullAddress: '',
//     district: '',
//     village: '',
//     tehsil: '',
//     pincode: '',
//     state: '',
//     dob: '',
//     mobile: '',
//     whatsapp: '',
//     gender: '',
//     bankAccount: '',
//     ifsc: '',
//     bankBranch: '',
//     bankPassbook: null,
//     aadharNumber: '',
//     aadharFront: null,
//     aadharBack: null,
//     maritalStatus: '',
//     education: '',
//     workExperience: '',
//     workType: [],
//     agreeTerms: false,
//   });
//   const workTypes = [
//     { value: 'Plumber', label: 'Plumber (प्लंबर)' },
//     { value: 'Painter', label: 'Painter (पेंटर)' },
//     { value: 'Electrician', label: 'Electrician (बिजली मिस्त्री)' },
//     { value: 'Bricklayer', label: 'Mason (राजगीर)' },
//     { value: 'Helper', label: 'Helper (मजदूर)' },
//     { value: 'Carpenter', label: 'Carpenter (बढ़ई)' },
//     { value: 'Cleaner', label: 'Cleaner (सफ़ाई करनेवाला)' },
//     { value: 'Driver', label: 'Driver (ड्राइवर)' },
//     { value: 'Tiles', label: 'Tiles & stone workers' },
//     { value: 'Others', label: 'Others' }
//   ];


//   const [showPopup, setShowPopup] = useState(false);
//   const [workerId, setWorkerId] = useState('');
//   const [serialNumber, setSerialNumber] = useState(1);

//   // Get current year code (YY)
//   const getYearCode = () => new Date().getFullYear().toString().slice(-2);

//   // Generate work type code
//   const getWorkTypeCode = () => {
//     if (formData.workType.length === 0) return 'NULL';
//     if (formData.workType.length === 1) {
//       return formData.workType[0].slice(0, 4).toUpperCase();
//     }
//     return 'MULT';
//   };

//   // Generate worker ID
//   const generateWorkerId = () => {
//     const yy = getYearCode();
//     const xxxx = getWorkTypeCode();
//     const zzzz = serialNumber.toString().padStart(4, '0');
//     return `${yy}${xxxx}${zzzz}`;
//   };

//   // Serial number management
//   useEffect(() => {
//     const storedSerial = localStorage.getItem('workerSerial');
//     const currentYear = new Date().getFullYear();

//     if (!storedSerial || JSON.parse(storedSerial).year !== currentYear) {
//       localStorage.setItem('workerSerial', JSON.stringify({
//         year: currentYear,
//         number: 1
//       }));
//       setSerialNumber(1);
//     } else {
//       setSerialNumber(JSON.parse(storedSerial).number);
//     }
//   }, []);

//   const handleFileChange = (field, e) => {
//     setFormData({ ...formData, [field]: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newWorkerId = generateWorkerId();
//     setWorkerId(newWorkerId);
//     setShowPopup(true);

//     // Update serial number
//     const updatedSerial = serialNumber + 1;
//     setSerialNumber(updatedSerial);
//     localStorage.setItem('workerSerial', JSON.stringify({
//       year: new Date().getFullYear(),
//       number: updatedSerial
//     }));

//     // Reset form
//     setFormData({
//       fullName: '',
//       age: '',
//       photo: null,
//       // ... reset all other fields
//     });
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Personal Details Section */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-1">Full Name *</label>
//               <input type="text" required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.fullName}
//                 onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Age *</label>
//               <input type="number" required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.age}
//                 onChange={(e) => setFormData({ ...formData, age: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Photo (Passport Size) *</label>
//               <input type="file" required accept="image/*"
//                 className="w-full"
//                 onChange={(e) => handleFileChange('photo', e)}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Date of Birth *</label>
//               <input type="date" required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.dob}
//                 onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Gender *</label>
//               <select required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.gender}
//                 onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
//               >
//                 <option value="">Select</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Marital Status *</label>
//               <select required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.maritalStatus}
//                 onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
//               >
//                 <option value="">Select</option>
//                 <option value="married">Married</option>
//                 <option value="unmarried">Unmarried</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Address Section */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h2 className="text-xl font-semibold mb-4">Address Details</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-1">Full Address *</label>
//               <textarea required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.fullAddress}
//                 onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Village *</label>
//               <input type="text" required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.village}
//                 onChange={(e) => setFormData({ ...formData, village: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Tehsil *</label>
//               <input type="text" required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.tehsil}
//                 onChange={(e) => setFormData({ ...formData, tehsil: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">District *</label>
//               <input type="text" required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.district}
//                 onChange={(e) => setFormData({ ...formData, district: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">State *</label>
//               <input type="text" required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.state}
//                 onChange={(e) => setFormData({ ...formData, state: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Pincode *</label>
//               <input type="number" required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.pincode}
//                 onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Contact Details */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-1">Mobile Number *</label>
//               <input type="tel" required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.mobile}
//                 onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
//               <input type="tel"
//                 className="w-full p-2 border rounded-md"
//                 value={formData.whatsapp}
//                 onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bank Details Section */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h2 className="text-xl font-semibold mb-4">Bank Details</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-1">Account Number *</label>
//               <input type="number" required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.bankAccount}
//                 onChange={(e) => setFormData({ ...formData, bankAccount: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">IFSC Code *</label>
//               <input type="text" required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.ifsc}
//                 onChange={(e) => setFormData({ ...formData, ifsc: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Bank Branch *</label>
//               <input type="text" required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.bankBranch}
//                 onChange={(e) => setFormData({ ...formData, bankBranch: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Passbook (Front Page) *</label>
//               <input type="file" required accept=".pdf,image/*"
//                 className="w-full"
//                 onChange={(e) => handleFileChange('bankPassbook', e)}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Aadhar Details */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h2 className="text-xl font-semibold mb-4">Aadhar Details</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-1">Aadhar Number *</label>
//               <input type="number" required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.aadharNumber}
//                 onChange={(e) => setFormData({ ...formData, aadharNumber: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Front Side *</label>
//               <input type="file" required accept=".pdf,image/*"
//                 className="w-full"
//                 onChange={(e) => handleFileChange('aadharFront', e)}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Back Side *</label>
//               <input type="file" required accept=".pdf,image/*"
//                 className="w-full"
//                 onChange={(e) => handleFileChange('aadharBack', e)}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Professional Details */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h2 className="text-xl font-semibold mb-4">Professional Details</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//             <div>
//               <label className="block text-sm font-medium mb-1">Education Qualification *</label>
//               <select required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.education}
//                 onChange={(e) => setFormData({ ...formData, education: e.target.value })}
//               >
//                 <option value="">Select</option>
//                 <option value="10th">10th Standard</option>
//                 <option value="12th">12th Standard</option>
//                 <option value="Graduate">Graduate</option>
//                 <option value="Post Graduate">Post Graduate</option>

//               </select>
//             </div>


//             <div>
//               <label className="block text-sm font-medium mb-1">Work Experience (Years) *</label>
//               <input type="number" required
//                 className="w-full p-2 border rounded-md"
//                 value={formData.workExperience}
//                 onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
//               />
//             </div>

//             <div className="col-span-full">
//               <label className="block text-sm font-medium mb-1">Select Work Type *</label>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {workTypes.map((work) => (
//                   <label key={work.value} className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       value={work.value}
//                       checked={formData.workType.includes(work.value)}
//                       onChange={(e) => {
//                         const selected = [...formData.workType];
//                         if (e.target.checked) {
//                           selected.push(e.target.value);
//                         } else {
//                           const index = selected.indexOf(e.target.value);
//                           selected.splice(index, 1);
//                         }
//                         setFormData({ ...formData, workType: selected });
//                       }}
//                       className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                     />
//                     <span className="text-sm">{work.label}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Terms and Conditions */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <label className="flex items-center">
//             <input type="checkbox" required
//               className="mr-2"
//               checked={formData.agreeTerms}
//               onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
//             />
//             <span className="text-sm">I agree to the Terms and Conditions *</span>
//           </label>
//         </div>

//         <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
//           Submit Registration
//         </button>
//       </form>

//       {/* Success Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white p-8 rounded-lg max-w-md w-full animate-popup">
//             <div className="text-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//               </svg>
//               <h3 className="text-2xl font-bold mt-4 mb-2">Registration Successful!</h3>
//               <p className="text-lg mb-4">Your Worker ID:</p>
//               <div className="text-3xl font-mono bg-gray-100 p-4 rounded-lg mb-6">
//                 {workerId}
//               </div>
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WorkerRegistration;
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const workTypes = [
  { value: 'Plumber', label: 'Plumber (प्लंबर)' },
  { value: 'Painter', label: 'Painter (पेंटर)' },
  { value: 'Electrician', label: 'Electrician (बिजली मिस्त्री)' },
  { value: 'Bricklayer', label: 'Mason (राजगीर)' },
  { value: 'Helper', label: 'Helper (मजदूर)' },
  { value: 'Carpenter', label: 'Carpenter (बढ़ई)' },
  { value: 'Cleaner', label: 'Cleaner (सफ़ाई करनेवाला)' },
  { value: 'Driver', label: 'Driver (ड्राइवर)' },
  { value: 'Tiles', label: 'Tiles & stone workers' },
  { value: 'Others', label: 'Others' }
];

const WorkerRegistration = () => {
  const initialFormState = {
    fullName: '',
    age: '',
    photo: null,
    fullAddress: '',

    district: '',
    village: '',
    tehsil: '',
    pincode: '',
    state: '',
    dob: '',
    mobile: '',
    whatsapp: '',
    gender: '',
    bankAccount: '',
    ifsc: '',
    bankBranch: '',
    bankPassbook: null,
    aadharNumber: '',
    aadharFront: null,
    aadharBack: null,
    maritalStatus: '',
    education: '',
    workExperience: '',
    workType: [],
    agreeTerms: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [workerId, setWorkerId] = useState('');

  const uploadFile = async (file, bucket) => {
    if (!file) return null;
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random()}.${fileExt}`;
    const { error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file);

    if (error) throw error;
    return supabase.storage.from(bucket).getPublicUrl(fileName).data.publicUrl;
  };

  const generateWorkerId = async () => {
    const { count } = await supabase
      .from('workers')
      .select('*', { count: 'exact', head: true });
    return `${new Date().getFullYear().toString().slice(-2)}${(count + 1).toString().padStart(4, '0')}`;
  };

  const handleWorkTypeChange = (value) => {
    setFormData(prev => ({
      ...prev,
      workType: prev.workType.includes(value)
        ? prev.workType.filter(item => item !== value)
        : [...prev.workType, value]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const workerId = await generateWorkerId();
      const [photoUrl, passbookUrl, aadharFrontUrl, aadharBackUrl] = await Promise.all([
        uploadFile(formData.photo, 'photos'),
        uploadFile(formData.bankPassbook, 'documents'),
        uploadFile(formData.aadharFront, 'documents'),
        uploadFile(formData.aadharBack, 'documents')
      ]);
      if (!formData.photo) {
        alert("कृपया पासपोर्ट साइज फोटो अपलोड करें");
        return;
      }

      const { error } = await supabase.from('workers').insert([{
        ...formData,
        workerId,
        photo: photoUrl,
        bankPassbook: passbookUrl,
        aadharFront: aadharFrontUrl,
        aadharBack: aadharBackUrl
      }]);

      if (error) throw error;

      setWorkerId(workerId);
      setShowPopup(true);
      setFormData(initialFormState);

    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* सभी फॉर्म सेक्शन पहले जैसे ही रहेंगे */}
        {/* =========================================================================================== */}

        {/* Personal Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name *</label>
              <input type="text" required
                className="w-full p-2 border rounded-md"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Age *</label>
              <input type="number" required
                className="w-full p-2 border rounded-md"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Photo (Passport Size) *</label>
              <input type="file" required accept="image/*"
                className="w-full"
                onChange={(e) => handleFileChange('photo', e)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth *</label>
              <input type="date" required
                className="w-full p-2 border rounded-md"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Gender *</label>
              <select required
                className="w-full p-2 border rounded-md"
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Marital Status *</label>
              <select required
                className="w-full p-2 border rounded-md"
                value={formData.maritalStatus}
                onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
              >
                <option value="">Select</option>
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
              </select>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Address Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Full Address *</label>
              <textarea required
                className="w-full p-2 border rounded-md"
                value={formData.fullAddress}
                onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Village *</label>
              <input type="text" required
                className="w-full p-2 border rounded-md"
                value={formData.village}
                onChange={(e) => setFormData({ ...formData, village: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Tehsil *</label>
              <input type="text" required
                className="w-full p-2 border rounded-md"
                value={formData.tehsil}
                onChange={(e) => setFormData({ ...formData, tehsil: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">District *</label>
              <input type="text" required
                className="w-full p-2 border rounded-md"
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">State *</label>
              <input type="text" required
                className="w-full p-2 border rounded-md"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Pincode *</label>
              <input type="number" required
                className="w-full p-2 border rounded-md"
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Mobile Number *</label>
              <input type="tel" required
                className="w-full p-2 border rounded-md"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
              <input type="tel"
                className="w-full p-2 border rounded-md"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Bank Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Bank Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Account Number *</label>
              <input type="number" required
                className="w-full p-2 border rounded-md"
                value={formData.bankAccount}
                onChange={(e) => setFormData({ ...formData, bankAccount: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">IFSC Code *</label>
              <input type="text" required
                className="w-full p-2 border rounded-md"
                value={formData.ifsc}
                onChange={(e) => setFormData({ ...formData, ifsc: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Bank Branch *</label>
              <input type="text" required
                className="w-full p-2 border rounded-md"
                value={formData.bankBranch}
                onChange={(e) => setFormData({ ...formData, bankBranch: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Passbook (Front Page) *</label>
              <input type="file" required accept=".pdf,image/*"
                className="w-full"
                onChange={(e) => handleFileChange('bankPassbook', e)}
              />
            </div>
          </div>
        </div>

        {/* Aadhar Details */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Aadhar Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Aadhar Number *</label>
              <input type="number" required
                className="w-full p-2 border rounded-md"
                value={formData.aadharNumber}
                onChange={(e) => setFormData({ ...formData, aadharNumber: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Front Side *</label>
              <input type="file" required accept=".pdf,image/*"
                className="w-full"
                onChange={(e) => handleFileChange('aadharFront', e)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Back Side *</label>
              <input type="file" required accept=".pdf,image/*"
                className="w-full"
                onChange={(e) => handleFileChange('aadharBack', e)}
              />
            </div>
          </div>
        </div>
        {/* ================================================== */}
        {/* Professional Details */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Work Experience (Years) *
          </label>
          <input
            type="number"
            required
            min="0"
            max="50"
            className="w-full p-2 border rounded-md"
            value={formData.workExperience}
            onChange={(e) =>
              setFormData({
                ...formData,
                workExperience: e.target.value ? parseInt(e.target.value) : 0
              })
            }
          />
          <p className="text-xs text-gray-500 mt-1">
            Please enter 0 if you're a fresher
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Professional Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Education Qualification *</label>
              <select
                required
                className="w-full p-2 border rounded-md"
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              >
                <option value="">Select</option>
                <option value="10th">10th Standard</option>
                <option value="12th">12th Standard</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
              </select>
            </div>

            <div className="col-span-full">
              <label className="block text-sm font-medium mb-1">Select Work Type *</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {workTypes.map((work) => (
                  <label key={work.value} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={work.value}
                      checked={formData.workType?.includes(work.value)}
                      onChange={() => handleWorkTypeChange(work.value)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">{work.label}</span>
                  </label>

                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  required
                  className="mr-2"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                />
                <span className="text-sm">I agree to the Terms and Conditions *</span>
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Registration'}
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg max-w-md w-full animate-popup">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-bold mt-4 mb-2">Registration Successful!</h3>
              <div className="text-3xl font-mono bg-gray-100 p-4 rounded-lg mb-6">
                {workerId}
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkerRegistration;