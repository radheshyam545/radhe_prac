import React, { useState } from 'react';
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { EMAILJS_CONFIG } from '../../config/emailConfig';

const EnquiryForm = () => {

    const [formData, setFormData] = useState({
        title: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        country: "",
        enquiry: "",
    });

    const [loading, setLoading] = useState(false); // 🔄 Loading state


    // Input Change Handler
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    // Form Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);


        // Check required fields
        if (!formData.firstName.trim()) {
            toast.error("First Name is required! ❌");
            setLoading(false);
            return;
        }
        if (!formData.lastName.trim()) {
            toast.error("Last Name is required! ❌");
            setLoading(false);
            return;
        }
        if (!formData.email.trim()) {
            toast.error("Email is required! ❌");
            setLoading(false);
            return;
        }
        if (!formData.country.trim()) {
            toast.error("Country of Residence is required! ❌");
            setLoading(false);
            return;
        }
        if (!formData.enquiry.trim()) {
            toast.error("Enquiry field cannot be empty! ❌");
            setLoading(false);
            return;
        }

        const emailParams = {
            title: formData.title,
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            email: formData.email,
            country: formData.country,
            enquiry: formData.enquiry,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        };

        emailjs
            .send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                emailParams,
                EMAILJS_CONFIG.USER_ID
            )
            .then(
                () => {
                    toast.success("Enquiry sent successfully! 🎉");
                    setFormData({
                        title: "",
                        firstName: "",
                        lastName: "",
                        phone: "",
                        email: "",
                        country: "",
                        enquiry: "",
                    });
                },
                (error) => {
                    toast.error("Failed to send enquiry. Try again! ❌");
                    console.error("Email Send Failed:", error);
                }
            )
            .finally(() => {
                setLoading(false);
            });
    };



    return (
        <div className="bg-[#e8e4df] px-4 sm:px-8 py-8 flex flex-col md:flex-row font-editorial">
            <Toaster position="top-center" reverseOrder={false} /> {/* 🍞 Toast Notifications */}
            <div className="w-full md:w-1/2 mx-auto rounded-lg px-4 sm:px-10 py-6 bg-[#e8e4df] flex flex-col">
                <form className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm md:text-[18px]  font-light text-[#142A33]">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#142A33] bg-[#e8e4df] focus:outline-none focus:border focus:border-[#142A33]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm md:text-[18px] font-light text-[#142A33]">First Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#142A33] bg-[#e8e4df] focus:outline-none focus:border focus:border-[#142A33]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm md:text-[18px] font-light text-[#142A33]">Last Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#142A33] bg-[#e8e4df] focus:outline-none focus:border focus:border-[#142A33]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm md:text-[18px] font-light text-[#142A33]">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, ""); // Allow only numbers
                                    if (value.length <= 10) {
                                        setFormData({ ...formData, phone: value });
                                    }
                                }}
                                maxLength={10}
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#142A33] bg-[#e8e4df] focus:outline-none focus:border focus:border-[#142A33]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm md:text-[18px] font-light text-[#142A33]">Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#142A33] bg-[#e8e4df] focus:outline-none focus:border focus:border-[#142A33]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm md:text-[18px] font-light text-[#142A33]">Country of Residence <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#142A33] bg-[#e8e4df] focus:outline-none focus:border focus:border-[#142A33]"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center pt-0  sm:pt-0">
                <div className="w-full px-4 py-6">
                    <label className="block text-sm md:text-[18px] font-light text-[#142A33]">Type Your Enquiry Here <span className="text-red-500">*</span></label>
                    <textarea
                        name="enquiry"
                        value={formData.enquiry}
                        onChange={handleChange}
                        required
                        className="mt-1 px-4 py-1 w-full h-[200px] border-b-2 border-[#142A33] bg-[#e8e4df] focus:outline-none focus:border focus:border-[#142A33]"
                    ></textarea>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={loading}
                        className="mt-4 px-6 py-1 bg-[#e8e4df] text-[#142A33] font-light border-2 border-[#142A33] hover:border-black focus:border-black text-center">
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EnquiryForm;
