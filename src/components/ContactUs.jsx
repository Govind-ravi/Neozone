import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset errors when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Form validation logic
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    // Address validation
    if (!formData.address) {
      newErrors.address = "Address is required.";
      isValid = false;
    }

    // Name validation (optional, but you can add a check if needed)
    if (formData.name && formData.name.length < 3) {
      newErrors.name = "Name should be at least 3 characters.";
      isValid = false;
    }

    // Mobile validation (optional, but you can add a check if needed)
    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form submission logic
      console.log("Form Data Submitted:", formData);

      // Reset form data
      setFormData({
        name: "",
        mobile: "",
        email: "",
        address: "",
        message: "",
      });
    }
  };

  return (
    <div className="text-secondary-text mb-12">
      <h1 className="text-5xl text-center font-bold text-primary my-8">
        Contact Us
      </h1>
      <div className="flex px-48">
        <div className="flex-1 flex flex-col justify-around">
          <h2 className="uppercase text-3xl font-medium">
            Get in touch with us
          </h2>
          <div>
            <h3 className="text-2xl font-medium">Office Address</h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=635,+3rd+cross+Mahalakshmi+layout+Bangalore-560086"
              className="flex gap-2 items-center text-xl"
              target="_blank"
            >
              <FaLocationDot />
              <p># 635, 3rd cross Mahalakshmi layout Bangalore-560086</p>
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Email</h3>
            <a
              href="mailto:info.neozone@gmail.com"
              className="flex gap-2 items-center text-xl"
              target="_blank"
            >
              <MdEmail />
              <p>info.neozone@gmail.com</p>
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Phone</h3>
            <a
              href="tel:+919739906259"
              className="flex gap-2 items-center text-xl"
              target="_blank"
            >
              <IoCall />
              <p>+91 9739906259</p>
            </a>
          </div>
        </div>

        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="peer w-full p-2 border-2 rounded"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className={`absolute left-3 px-2 transition-all duration-200 text-secondary-text rounded-sm
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500
                    top-0 translate-y-[-50%] text-sm bg-white ext-secondary-text`}
              >
                Name
              </label>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="relative mb-4">
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="peer w-full p-2 border-2 rounded"
                placeholder=" "
              />
              <label
                htmlFor="mobile"
                className={`absolute left-3 px-2 transition-all duration-200 text-secondary-text rounded-sm
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500
                    top-0 translate-y-[-50%] text-sm bg-white ext-secondary-text`}
              >
                Mobile No
              </label>
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="peer w-full p-2 border-2 rounded"
                placeholder=" "
              />

              <label
                htmlFor="email"
                className={`absolute left-3 px-2 transition-all duration-200 text-secondary-text rounded-sm
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500
                    top-0 translate-y-[-50%] text-sm bg-white ext-secondary-text`}
              >
                Email
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative mb-4">
              <input
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="peer w-full p-2 border-2 rounded"
                placeholder=" "
              />

              <label
                htmlFor="address"
                className={`absolute left-3 px-2 transition-all duration-200 text-secondary-text rounded-sm
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500
                    top-0 translate-y-[-50%] text-sm bg-white ext-secondary-text`}
              >
                Address
              </label>
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>

            <div className="relative mb-4">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="peer w-full p-2 border-2 rounded"
                placeholder=" "
                rows="1"
              ></textarea>
              <label
                htmlFor="message"
                className={`absolute left-3 px-2 transition-all duration-200 text-secondary-text rounded-sm
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500
                    top-0 translate-y-[-50%] text-sm bg-white ext-secondary-text`}
              >
                Message
              </label>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-primary text-default-text rounded text-btn-text font-normal p-lg hover:opacity-80 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
