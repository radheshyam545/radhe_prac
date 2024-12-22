import React from 'react';

const EnquiryForm = () => {
    return (
        <div className="bg-[#988F80] px-4 sm:px-8 py-8 flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 mx-auto rounded-lg px-4 sm:px-10 py-6 bg-[#988F80] flex flex-col justify-end items-end">
                <form>
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


                    <div className="mt-4 flex items-end space-x-4">
                        <div className="">
                            <label className="block text-sm font-medium text-white">Type Your Enquiry Here <span className="text-red-500">*</span></label>
                            <textarea
                                required
                                className="mt-1 px-4 py-1 w-full h-[100px] border-b-2 border-[#FFFFFF59] bg-[#988F80] focus:outline-none focus:border focus:border-[#FFFFFF]"
                            ></textarea>
                        </div>
                        <button type="submit" className="mt-4 px-6 py-1 bg-[#988F80] text-white font-medium border-4 border-[#FFFFFF59] hover:border-black focus:border-black">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className='w-full sm:w-1/2 flex flex-col justify-center items-center pt-10 sm:pt-0'>
                <div className="flex items-end">
                    <div className="w-[270px] h-[2px] bg-white mr-3 mb-[20px]"></div>  {/* Horizontal line */}
                    <div className="text-white font-medium text-[30px] sm:text-[60px]">Make An</div>
                </div>
                <div className="text-white font-medium leading-none text-[50px] sm:text-[100px] flex items-start justify-end w-full pr-10">
                    <p>Enquiry</p>
                    </div> {/* "Enquiry" below "Make An" */}
            </div>
        </div>
    );
}

export default EnquiryForm;
