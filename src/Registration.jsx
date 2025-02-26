// import { useState } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { v4 as uuidv4 } from "uuid";

// const supabase = createClient(
//     "YOUR_SUPABASE_URL",
//     "YOUR_SUPABASE_ANON_KEY"
// );

// export default function RegistrationForm() {
//     const [formData, setFormData] = useState({
//         fullName: "",
//         age: "",
//         address: "",
//         district: "",
//         village: "",
//         tehsil: "",
//         pincode: "",
//         state: "",
//         dob: "",
//         mobile: "",
//         whatsapp: "",
//         gender: "",
//         bankAccount: "",
//         ifsc: "",
//         branch: "",
//         aadhar: "",
//         maritalStatus: "",
//         education: "",
//         experience: "",
//         workType: "",
//         agree: false,
//     });
//     const [files, setFiles] = useState({ photo: null, passbook: null, aadharFront: null, aadharBack: null });
//     const [workerId, setWorkerId] = useState(null);

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//     };

//     const handleFileChange = (e) => {
//         setFiles({ ...files, [e.target.name]: e.target.files[0] });
//     };

//     const uploadFile = async (file, path) => {
//         if (!file) return null;
//         const { data, error } = await supabase.storage.from("worker_files").upload(`${path}/${uuidv4()}`, file);
//         return data?.path || null;
//     };

//     const generateWorkerId = () => {
//         const agePart = formData.age;
//         const typeCode = formData.workType === "Multiple" ? "multi" : formData.workType.slice(0, 4).toLowerCase();
//         return `${agePart}${typeCode}${String(Math.floor(Math.random() * 9000) + 1000)}`;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const workerIdGenerated = generateWorkerId();
//         setWorkerId(workerIdGenerated);

//         const photoPath = await uploadFile(files.photo, "photos");
//         const passbookPath = await uploadFile(files.passbook, "passbooks");
//         const aadharFrontPath = await uploadFile(files.aadharFront, "aadhar");
//         const aadharBackPath = await uploadFile(files.aadharBack, "aadhar");

//         const { error } = await supabase.from("workers").insert({
//             ...formData,
//             workerId: workerIdGenerated,
//             photo: photoPath,
//             passbook: passbookPath,
//             aadharFront: aadharFrontPath,
//             aadharBack: aadharBackPath,
//         });

//         if (error) console.error("Error saving to database", error);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg">
//             <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
//             <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
//             <input type="file" name="photo" accept="image/*" onChange={handleFileChange} required />
//             <input type="text" name="address" placeholder="Full Address" onChange={handleChange} required />
//             <input type="text" name="district" placeholder="District" onChange={handleChange} required />
//             <input type="text" name="village" placeholder="Village" onChange={handleChange} required />
//             <input type="text" name="tehsil" placeholder="Tehsil" onChange={handleChange} required />
//             <input type="number" name="pincode" placeholder="Pincode" onChange={handleChange} required />
//             <input type="text" name="state" placeholder="State" onChange={handleChange} required />
//             <input type="date" name="dob" onChange={handleChange} required />
//             <input type="tel" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
//             <input type="tel" name="whatsapp" placeholder="Whatsapp Number" onChange={handleChange} required />
//             <select name="gender" onChange={handleChange} required>
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//             </select>
//             <input type="text" name="bankAccount" placeholder="Bank Account Number" onChange={handleChange} required />
//             <input type="text" name="ifsc" placeholder="IFSC Code" onChange={handleChange} required />
//             <input type="text" name="branch" placeholder="Bank Branch Name" onChange={handleChange} required />
//             <input type="file" name="passbook" accept="image/*,application/pdf" onChange={handleFileChange} required />
//             <input type="text" name="aadhar" placeholder="Aadhar Number" onChange={handleChange} required />
//             <input type="file" name="aadharFront" accept="image/*,application/pdf" onChange={handleFileChange} required />
//             <input type="file" name="aadharBack" accept="image/*,application/pdf" onChange={handleFileChange} required />
//             <select name="maritalStatus" onChange={handleChange} required>
//                 <option value="">Select Marital Status</option>
//                 <option value="Single">Single</option>
//                 <option value="Married">Married</option>
//             </select>
//             <input type="text" name="education" placeholder="Education Qualification" onChange={handleChange} required />
//             <input type="number" name="experience" placeholder="Work Experience (Years)" onChange={handleChange} required />
//             <select name="workType" onChange={handleChange} required>
//                 <option value="">Select Work Type</option>
//                 <option value="Plumber">Plumber</option>
//                 <option value="Painter">Painter</option>
//                 <option value="Electrician">Electrician</option>
//                 <option value="Multiple">Multiple</option>
//             </select>
//             <label>
//                 <input type="checkbox" name="agree" onChange={handleChange} required /> I agree to Terms and Conditions
//             </label>
//             <button type="submit">Register</button>
//             {workerId && <p>Generated Worker ID: {workerId}</p>}
//         </form>
//     );
// }

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import supabase from "../config/supabase";

// export default function WorkerDetails() {
//     const { workerID } = useParams();
//     const [worker, setWorker] = useState(null);

//     useEffect(() => {
//         async function fetchWorker() {
//             const { data, error } = await supabase
//                 .from("workers")
//                 .select("*")
//                 .eq("worker_id", workerID)
//                 .single();

//             if (error) {
//                 alert("Worker not found!");
//             } else {
//                 setWorker(data);
//             }
//         }
//         fetchWorker();
//     }, [workerID]);

//     if (!worker) return <p className="text-center mt-10">Loading...</p>;

//     return (
//         <div className="p-6 max-w-lg mx-auto border rounded-lg shadow-lg bg-white">
//             <div className="flex flex-col items-center">
//                 <img
//                     src={worker.profile_pic}
//                     alt="Profile"
//                     className="w-24 h-24 rounded-full border"
//                 />
//                 <h2 className="text-xl font-bold mt-2">{worker.full_name}</h2>
//                 <p className="text-gray-600">Worker ID: {worker.worker_id}</p>
//             </div>

//             <div className="mt-4 space-y-3">
//                 <p>
//                     <strong>📅 Age:</strong> {worker.age}
//                 </p>
//                 <p>
//                     <strong>🏠 Address:</strong> {worker.address}, {worker.village},{" "}
//                     {worker.tehsil}, {worker.district}, {worker.state} - {worker.pincode}
//                 </p>
//                 <p>
//                     <strong>📞 Mobile:</strong> {worker.mobile}
//                 </p>
//                 {worker.whatsapp && (
//                     <p>
//                         <strong>💬 WhatsApp:</strong> {worker.whatsapp}
//                     </p>
//                 )}
//                 <p>
//                     <strong>🎂 Date of Birth:</strong> {worker.dob}
//                 </p>
//                 <p>
//                     <strong>🛠 Work Type:</strong> {worker.work_type.join(", ")}
//                 </p>
//                 <p>
//                     <strong>🎓 Education Qualification:</strong>{" "}
//                     {worker.education_qualification}
//                 </p>
//                 <p>
//                     <strong>📆 Work Experience:</strong> {worker.work_experience} years
//                 </p>

//                 {/* Secure Bank Details */}
//                 <div className="p-4 border rounded-lg bg-gray-100">
//                     <h3 className="text-lg font-bold">🏦 Bank Details</h3>
//                     <p>
//                         <strong>Account Number:</strong> XXXXXX
//                         {worker.bank_account.slice(-4)}
//                     </p>
//                     <p>
//                         <strong>IFSC Code:</strong> {worker.ifsc_code}
//                     </p>
//                     <p>
//                         <strong>Branch Name:</strong> {worker.branch_name}
//                     </p>
//                 </div>

//                 {/* Aadhaar Details (Masked) */}
//                 <div className="p-4 border rounded-lg bg-gray-100">
//                     <h3 className="text-lg font-bold">🆔 Aadhaar Verification</h3>
//                     <p>
//                         <strong>Aadhaar Number:</strong> XXXX-XXXX-
//                         {worker.aadhaar_number.slice(-4)}
//                     </p>
//                 </div>

//                 {/* Uploaded Files (Hidden Links) */}
//                 <div className="p-4 border rounded-lg bg-gray-100">
//                     <h3 className="text-lg font-bold">📑 Uploaded Documents</h3>
//                     <p>
//                         <strong>Bank Passbook:</strong>{" "}
//                         <a href={worker.bank_passbook} target="_blank" className="text-blue-600">
//                             View Document
//                         </a>
//                     </p>
//                     <p>
//                         <strong>Aadhaar (Front & Back):</strong>{" "}
//                         <a href={worker.aadhaar_front} target="_blank" className="text-blue-600">
//                             View Aadhaar Front
//                         </a>{" "}
//                         |{" "}
//                         <a href={worker.aadhaar_back} target="_blank" className="text-blue-600">
//                             View Aadhaar Back
//                         </a>
//                     </p>
//                 </div>

//                 <p>
//                     <strong>📜 Marital Status:</strong> {worker.marital_status}
//                 </p>
//             </div>
//         </div>
//     );
// }
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../config/supabase";

export default function WorkerDetails() {
    const { workerID } = useParams();
    const [worker, setWorker] = useState(null);

    useEffect(() => {
        async function fetchWorker() {
            const { data, error } = await supabase
                .from("workers")
                .select("*")
                .eq("worker_id", workerID)
                .single();

            if (error) {
                alert("Worker not found!");
            } else {
                setWorker(data);
            }
        }
        fetchWorker();
    }, [workerID]);

    if (!worker)
        return <p className="text-center mt-10 text-gray-500">Loading...</p>;

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white border rounded-xl shadow-lg">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-6">
                <img
                    src={worker.profile_pic}
                    alt="Profile"
                    className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-md"
                />
                <h2 className="text-2xl font-semibold mt-3">{worker.full_name}</h2>
                <p className="text-gray-600 text-sm">Worker ID: {worker.worker_id}</p>
            </div>

            {/* Personal Details */}
            <div className="space-y-3">
                <DetailRow label="📅 Age" value={worker.age} />
                <DetailRow
                    label="🏠 Address"
                    value={`${worker.address}, ${worker.village}, ${worker.tehsil}, ${worker.district}, ${worker.state} - ${worker.pincode}`}
                />
                <DetailRow label="📞 Mobile" value={worker.mobile} />
                {worker.whatsapp && <DetailRow label="💬 WhatsApp" value={worker.whatsapp} />}
                <DetailRow label="🎂 Date of Birth" value={worker.dob} />
                <DetailRow label="🛠 Work Type" value={worker.work_type.join(", ")} />
                <DetailRow label="🎓 Education Qualification" value={worker.education_qualification} />
                <DetailRow label="📆 Work Experience" value={`${worker.work_experience} years`} />
                <DetailRow label="📜 Marital Status" value={worker.marital_status} />
            </div>

            {/* Bank Details */}
            <SectionCard title="🏦 Bank Details">
                <DetailRow label="Account Number" value={`XXXXXX${worker.bank_account.slice(-4)}`} />
                <DetailRow label="IFSC Code" value={worker.ifsc_code} />
                <DetailRow label="Branch Name" value={worker.branch_name} />
            </SectionCard>

            {/* Aadhaar Details */}
            <SectionCard title="🆔 Aadhaar Verification">
                <DetailRow label="Aadhaar Number" value={`XXXX-XXXX-${worker.aadhaar_number.slice(-4)}`} />
            </SectionCard>

            {/* Uploaded Documents */}
            <SectionCard title="📑 Uploaded Documents">
                <p className="text-gray-700">
                    <span className="font-medium">Bank Passbook:</span>{" "}
                    <a href={worker.bank_passbook} target="_blank" className="text-blue-600 hover:underline">
                        View Document
                    </a>
                </p>
                <p className="text-gray-700">
                    <span className="font-medium">Aadhaar (Front & Back):</span>{" "}
                    <a href={worker.aadhaar_front} target="_blank" className="text-blue-600 hover:underline">
                        View Front
                    </a>{" "}
                    |{" "}
                    <a href={worker.aadhaar_back} target="_blank" className="text-blue-600 hover:underline">
                        View Back
                    </a>
                </p>
            </SectionCard>
        </div>
    );
}

// Helper Component for Individual Rows
const DetailRow = ({ label, value }) => (
    <p className="flex justify-between border-b pb-2 text-gray-700">
        <span className="font-medium">{label}:</span> <span>{value}</span>
    </p>
);

// Helper Component for Section Cards
const SectionCard = ({ title, children }) => (
    <div className="p-4 mt-6 border rounded-lg bg-gray-50 shadow-md">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        {children}
    </div>
);
