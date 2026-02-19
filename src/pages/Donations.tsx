import React, { useState } from "react";

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
    <div className="min-h-screen p-8 max-w-2xl mx-auto">

      <h1 className="text-3xl font-bold">दान करें</h1>

      <p className="mt-2 text-gray-600">
        आपका सहयोग समाज के विकास में मदद करता है।
      </p>

      {/* Amount */}
      <div className="mt-6">

        <h2 className="font-semibold">Amount Select करें</h2>

        <div className="flex gap-3 mt-2">

          <button
            onClick={() => handleAmountClick(100)}
            className="border px-4 py-2 rounded hover:bg-green-100"
          >
            ₹100
          </button>

          <button
            onClick={() => handleAmountClick(500)}
            className="border px-4 py-2 rounded hover:bg-green-100"
          >
            ₹500
          </button>

          <button
            onClick={() => handleAmountClick(1000)}
            className="border px-4 py-2 rounded hover:bg-green-100"
          >
            ₹1000
          </button>

        </div>

        <input
          type="number"
          placeholder="Custom Amount"
          value={amount || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(Number(e.target.value))
          }
          className="border p-2 rounded mt-3 w-full"
        />

      </div>

      {/* User Info */}
      <div className="mt-6">

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className="border p-2 rounded w-full mt-2"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="border p-2 rounded w-full mt-2"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMobile(e.target.value)
          }
          className="border p-2 rounded w-full mt-2"
        />

      </div>

      {/* Donate Button */}
      <button
        onClick={handleDonate}
        className="bg-green-600 text-white px-6 py-3 rounded mt-6 w-full hover:bg-green-700"
      >
        Donate Now
      </button>

      <p className="text-sm text-gray-500 mt-3">
        Secure payment powered by Razorpay
      </p>

    </div>
  );
};

export default Donations;
