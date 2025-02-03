import Head from "next/head";
import { useState } from "react";
import { Mail, User, DollarSign, MessageSquare } from "lucide-react";

export default function FundraisingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}, for your donation of ₹${formData.amount}!`);
    setFormData({ name: "", email: "", amount: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>Fundraising for Our Cause</title>
        <meta
          name="description"
          content="Support our NGO's mission by contributing to our fundraising campaign."
        />
      </Head>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="bg-[#f4f3f2] shadow-xl rounded-lg p-8 w-full max-w-2xl">
          <h1 className="text-4xl font-bold text-center text-[black] mb-6">
            Fundraising for Our Cause
          </h1>
          <p className="text-center text-[black] mb-8">
            Help us bring change by contributing to our NGO&apos;s mission.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[gray]"
              >
                Full Name
              </label>
              <div className="flex items-center mt-1">
                <User className="absolute ml-3 text-[gray]" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full pl-10 p-2 border border-[gray] rounded-lg focus:ring-2 focus:ring-[green] outline-none"
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[gray]"
              >
                Email Address
              </label>
              <div className="flex items-center mt-1">
                <Mail className="absolute ml-3 text-[gray]" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 p-2 border border-[gray] rounded-lg focus:ring-2 focus:ring-[green] outline-none"
                  required
                />
              </div>
            </div>

            {/* Donation Amount */}
            <div className="relative">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-[gray]"
              >
                Donation Amount (₹)
              </label>
              <div className="flex items-center mt-1">
                <DollarSign className="absolute ml-3 text-[gray]" />
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Enter the donation amount"
                  className="w-full pl-10 p-2 border border-[gray] rounded-lg focus:ring-2 focus:ring-[green] outline-none"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[gray]"
              >
                Message (Optional)
              </label>
              <div className="flex items-center mt-1">
                <MessageSquare className="absolute ml-3 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write a message to us..."
                  rows="4"
                  className="w-full pl-10 p-2 border border-[gray] rounded-lg focus:ring-2 focus:ring-[green] outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[green] text-[white] py-2 rounded-lg hover:bg-[darkgreen] transition font-semibold text-lg"
            >
              Donate Now
            </button>
          </form>

          <p className="text-center text-sm text-[black] mt-6">
            Thank you for your support! Your contributions make a difference.
          </p>
        </div>
      </div>
    </>
  );
}
