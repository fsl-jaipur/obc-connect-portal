import React, { useState } from "react";
import { motion } from "framer-motion"; // ✅ added animation import

const Donations: React.FC = () => {

  // State types
  const [amount, setAmount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");

  // Handle preset amount click
  const handleAmountClick = (value: number) => {
    setAmount(value);
  };

  // Handle donate click
  const handleDonate = () => {
    if (!amount || !name || !email || !mobile) {
      alert("Please fill all fields");
      return;
    }

    console.log({
      amount,
      name,
      email,
      mobile,
    });

    alert("Proceeding to payment...");
  };

  return (
    <>
      {/* ✅ animation wrapper added */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen p-8 max-w-2xl mx-auto"
      >

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold"
        >
          दान करें
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-gray-600"
        >
          आपका सहयोग समाज के विकास में मदद करता है।
        </motion.p>

        {/* Amount */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >

          <h2 className="font-semibold">Amount Select करें</h2>

          <div className="flex gap-3 mt-2">

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAmountClick(100)}
              className="border px-4 py-2 rounded hover:bg-green-100"
            >
              ₹100
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAmountClick(500)}
              className="border px-4 py-2 rounded hover:bg-green-100"
            >
              ₹500
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAmountClick(1000)}
              className="border px-4 py-2 rounded hover:bg-green-100"
            >
              ₹1000
            </motion.button>

          </div>

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="number"
            placeholder="Custom Amount"
            value={amount || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(Number(e.target.value))
            }
            className="border p-2 rounded mt-3 w-full"
          />

        </motion.div>

        {/* User Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            className="border p-2 rounded w-full mt-2"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="border p-2 rounded w-full mt-2"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMobile(e.target.value)
            }
            className="border p-2 rounded w-full mt-2"
          />

        </motion.div>

        {/* Donate Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDonate}
          className="bg-green-600 text-white px-6 py-3 rounded mt-6 w-full hover:bg-green-700"
        >
          Donate Now
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-500 mt-3"
        >
          Secure payment powered by Razorpay
        </motion.p>

      </motion.div>
    </>
  );
};

export default Donations;