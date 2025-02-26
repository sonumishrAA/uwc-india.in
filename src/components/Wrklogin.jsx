import { useState } from "react";
import { motion } from "framer-motion";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

export default function WorkersLogin() {
  const [workerId, setWorkerId] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (workerId.trim()) {
      alert(`Welcome, Worker ID: ${workerId}`);
      setError("");
    } else {
      setError("Worker ID is required.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-96 p-6 bg-white shadow-2xl rounded-2xl">
          <CardContent>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-center text-gray-800"
            >
              Welcome to Workers Login
            </motion.h1>
            <div className="mt-6">
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Enter Worker ID
              </label>
              <Input
                type="text"
                placeholder="Worker ID"
                value={workerId}
                onChange={(e) => setWorkerId(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4"
              >
                <Button className="w-full bg-blue-500 text-white py-2 rounded-lg" onClick={handleLogin}>
                  Login
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
