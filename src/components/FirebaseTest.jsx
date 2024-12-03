import React, { useEffect } from "react";
import { db } from "../firebase"; // Import your firebase.js file
import { collection, addDoc, getDocs } from "firebase/firestore";

const FirebaseTest = () => {
  useEffect(() => {
    const verifyFirebase = async () => {
      try {
        // Add test data to Firestore
        const docRef = await addDoc(collection(db, "testCollection"), {
          name: "Firebase Test",
          timestamp: new Date(),
        });
        console.log("Document added with ID: ", docRef.id);

        // Retrieve data from Firestore
        const querySnapshot = await getDocs(collection(db, "testCollection"));
        querySnapshot.forEach((doc) => {
          console.log("Retrieved data:", doc.id, "=>", doc.data());
        });

        alert("Firebase connection successful! Check the console for details.");
      } catch (error) {
        console.error("Error testing Firebase connection: ", error);
        alert("Firebase connection failed. Check the console for details.");
      }
    };

    verifyFirebase();
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-xl font-bold">Firebase Connection Test</h1>
      <p>
        This component tests the connection to Firebase by adding and fetching
        data.
      </p>
    </div>
  );
};

export default FirebaseTest;
