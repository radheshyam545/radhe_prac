import React from 'react';

const EnquiryForm = () => {
    return (
        <div className="bg-[#e8e4df] px-4 sm:px-8 py-8 flex flex-col md:flex-row font-editorial">
            <div className="w-full md:w-1/2 mx-auto rounded-lg px-4 sm:px-10 py-6 bg-[#e8e4df] flex flex-col">
                <form className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm md:text-[18px]  font-light text-[#142A33]">Title</label>
                            <input
                                type="text"
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#142A33] bg-[#e8e4df] focus:outline-none focus:border focus:border-[#142A33]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm md:text-[18px] font-light text-[#142A33]">First Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                required
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#142A33] bg-[#e8e4df] focus:outline-none focus:border focus:border-[#142A33]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm md:text-[18px] font-light text-[#142A33]">Last Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                required
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#142A33] bg-[#e8e4df] focus:outline-none focus:border focus:border-[#142A33]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm md:text-[18px] font-light text-[#142A33]">Phone</label>
                            <input
                                type="tel"
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#142A33] bg-[#e8e4df] focus:outline-none focus:border focus:border-[#142A33]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm md:text-[18px] font-light text-[#142A33]">Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                required
                                className="mt-1 px-2 py-1 w-full border-b-2 border-[#142A33] bg-[#e8e4df] focus:outline-none focus:border focus:border-[#142A33]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm md:text-[18px] font-light text-[#142A33]">Country of Residence <span className="text-red-500">*</span></label>
                            <input
                                type="text"
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
                        required
                        className="mt-1 px-4 py-1 w-full h-[200px] border-b-2 border-[#142A33] bg-[#e8e4df] focus:outline-none focus:border focus:border-[#142A33]"
                    ></textarea>
                    <button type="submit" className="mt-4 px-6 py-1 bg-[#e8e4df] text-[#142A33] font-light border-2 border-[#142A33] hover:border-black focus:border-black text-center">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EnquiryForm;
