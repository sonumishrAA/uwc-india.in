import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HireWorkerML = () => {
    const [masonSelected, setMasonSelected] = useState(false);
    const [labourSelected, setLabourSelected] = useState(false);
    const [masonCount, setMasonCount] = useState(0);
    const [labourCount, setLabourCount] = useState(0);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const handleProceed = () => {
        const totalPrice = masonCount * 700 + labourCount * 500;
        navigate("/payment", { state: { name, phone, address, totalPrice } });
    };

    return (
        // <div>
        //     <h2>Mason and Labour Booking</h2>
        //     <label>
        //         <input
        //             type="checkbox"
        //             checked={masonSelected}
        //             onChange={() => setMasonSelected(!masonSelected)}
        //         />
        //         Mason
        //     </label>
        //     {masonSelected && (
        //         <input
        //             type="number"
        //             placeholder="Number of Masons"
        //             value={masonCount}
        //             onChange={(e) => setMasonCount(e.target.value)}
        //         />
        //     )}
        //     <br />
        //     <label>
        //         <input
        //             type="checkbox"
        //             checked={labourSelected}
        //             onChange={() => setLabourSelected(!labourSelected)}
        //         />
        //         Labour
        //     </label>
        //     {labourSelected && (
        //         <input
        //             type="number"
        //             placeholder="Number of Labour"
        //             value={labourCount}
        //             onChange={(e) => setLabourCount(e.target.value)}
        //         />
        //     )}
        //     <br />
        //     <input
        //         type="text"
        //         placeholder="Name"
        //         value={name}
        //         onChange={(e) => setName(e.target.value)}
        //     />
        //     <input
        //         type="text"
        //         placeholder="Phone"
        //         value={phone}
        //         onChange={(e) => setPhone(e.target.value)}
        //     />
        //     <input
        //         type="text"
        //         placeholder="Address"
        //         value={address}
        //         onChange={(e) => setAddress(e.target.value)}
        //     />
        //     <br />
        //     <button onClick={handleProceed}>Proceed to Payment</button>
        // </div>
        <div>
            <h2>Mason and Labour Booking</h2>

            <label>No. of Masons (₹700 per worker)</label>
            <input
                type="number"
                placeholder="Number of Masons"
                value={masonCount}
                min="0"
                onChange={(e) => setMasonCount(Number(e.target.value))}
            />
            <br />

            <label>No. of Labours (₹500 per worker)</label>
            <input
                type="number"
                placeholder="Number of Labours"
                value={labourCount}
                min="0"
                onChange={(e) => setLabourCount(Number(e.target.value))}
            />
            <br />

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <br />

            <button onClick={handleProceed} disabled={!name || !phone || !address || (masonCount === 0 && labourCount === 0)}>
                Proceed to Payment
            </button>
        </div>
    );
};

const HireWorkerLC = () => {
    const [workerCount, setWorkerCount] = useState(0);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const handleProceed = () => {
        const totalPrice = workerCount * 500;
        navigate("/payment", { state: { name, phone, address, totalPrice } });
    };

    return (
        <div>
            <h2>Labour for Construction</h2>
            <input
                type="number"
                placeholder="Number of Workers"
                value={workerCount}
                onChange={(e) => setWorkerCount(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <button onClick={handleProceed}>Proceed to Payment</button>
        </div>
    );
};

export { HireWorkerLC, HireWorkerML };
