import { useState } from "react";
import { motion } from "framer-motion";
import React from 'react';

export default function TrackPage() {
  return (
    <div>
      <h1>Track Your Order</h1>
      <p>Tracking details will be shown here.</p>
    </div>
  );
}


export default function TrackOrder() {
  const [status, setStatus] = useState(null);
  const [orderId, setOrderId] = useState("");

  const handleLookup = () => {
    // Simulate fetch
    setStatus("In Progress");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Track Your Order</h2>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button onClick={handleLookup} className="w-full bg-blue-600 text-white p-2 rounded">
        Lookup
      </button>
      {status && (
        <motion.div
          className="mt-6 p-4 bg-gray-100 rounded shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-lg font-semibold">Status: {status}</p>
        </motion.div>
      )}
    </div>
  );
}
