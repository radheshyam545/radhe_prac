import React from 'react';

const EnquiryForm = () => {
    return (
        <div className="bg-[#988F80] px-4 sm:px-8 py-8 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mx-auto rounded-lg px-4 sm:px-10 py-6 bg-[#988F80] flex flex-col">
                <form className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-white">Title</label>
                            <input
                                type="text"
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#FFFFFF59] bg-[#988F80] focus:outline-none focus:border focus:border-[#FFFFFF]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">First Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                required
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#FFFFFF59] bg-[#988F80] focus:outline-none focus:border focus:border-[#FFFFFF]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Last Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                required
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#FFFFFF59] bg-[#988F80] focus:outline-none focus:border focus:border-[#FFFFFF]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Phone</label>
                            <input
                                type="tel"
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#FFFFFF59] bg-[#988F80] focus:outline-none focus:border focus:border-[#FFFFFF]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                required
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#FFFFFF59] bg-[#988F80] focus:outline-none focus:border focus:border-[#FFFFFF]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Country of Residence <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                required
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#FFFFFF59] bg-[#988F80] focus:outline-none focus:border focus:border-[#FFFFFF]"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center pt-0  sm:pt-0">
                <div className="w-full px-4 py-6">
                    <label className="block text-sm font-medium text-white">Type Your Enquiry Here <span className="text-red-500">*</span></label>
                    <textarea
                        required
                        className="mt-1 px-4 py-1 w-full h-[200px] border-b-2 border-[#FFFFFF59] bg-[#988F80] focus:outline-none focus:border focus:border-[#FFFFFF]"
                    ></textarea>
                    <button type="submit" className="mt-4 px-6 py-1 bg-[#988F80] text-white font-medium border-4 border-[#FFFFFF59] hover:border-black focus:border-black">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EnquiryForm;
